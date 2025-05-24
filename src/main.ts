import shaders from './shaders.slang';

async function init() {
  if (!navigator.gpu) {
    throw new Error('WebGPU not supported on this browser.');
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw new Error('No appropriate GPUAdapter found.');
  }

  const canvas_ = document.getElementById('canvas');
  if (!(canvas_ instanceof HTMLCanvasElement)) {
    throw new Error('Could not find #canvas element');
  }
  const canvas: HTMLCanvasElement = canvas_;

  const device = await adapter.requestDevice();

  const context_ = canvas.getContext('webgpu');
  if (!context_) {
    throw new Error('Could not get webgpu context');
  }

  const context = context_;

  const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
  context.configure({
    device: device,
    format: canvasFormat,
  });

  const vertexBufferLayout: GPUVertexBufferLayout = {
    arrayStride: 8,
    attributes: [
      {
        format: 'float32x2',
        offset: 0,
        shaderLocation: 0,
      },
    ],
  };

  const pipeline = device.createRenderPipeline({
    label: 'Pipeline',
    layout: 'auto',
    vertex: {
      module: device.createShaderModule({
        label: 'Vertex shader module',
        code: shaders,
      }),
      entryPoint: 'vertexMain',
      buffers: [vertexBufferLayout],
    },
    fragment: {
      module: device.createShaderModule({
        label: 'Fragment shader module',
        code: shaders,
      }),
      entryPoint: 'fragmentMain',
      targets: [
        {
          format: canvasFormat,
        },
      ],
    },
  });

  const vertices = new Float32Array([0.0, -0.8, +0.8, +0.8, -0.8, +0.8]);
  const vertexBuffer = device.createBuffer({
    label: 'Triangle vertices',
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });
  const bufferOffset = 0;
  device.queue.writeBuffer(vertexBuffer, bufferOffset, vertices);

  const uniformBufferSize = 4 * 4;
  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  const uniformValues = new Float32Array(uniformBufferSize / 4);
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {buffer: uniformBuffer},
      },
    ],
  });

  async function render() {
    const time = (Date.now() / 1000) % 1000000;

    uniformValues.set([time], 0);
    device.queue.writeBuffer(uniformBuffer, 0, uniformValues);

    const encoder = device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: context.getCurrentTexture().createView(),
          loadOp: 'clear',
          clearValue: {r: 0, g: 0, b: 0, a: 1},
          storeOp: 'store',
        },
      ],
    });
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    const vertexBufferSlot = 0;
    pass.setVertexBuffer(vertexBufferSlot, vertexBuffer);
    pass.draw(vertices.length / 2);
    pass.end();
    const commandBuffer = encoder.finish();
    device.queue.submit([commandBuffer]);

    requestAnimationFrame(render);
  }

  render();
}

init();
