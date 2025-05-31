import Stats from 'stats.js';
import * as THREE from 'three';

import fragmentShader from './shaders/fragment-shader.glsl';
import vertexShader from './shaders/vertex-shader.glsl';

class App {
  threejs_: THREE.WebGLRenderer | undefined;
  scene_: THREE.Scene | undefined;
  camera_: THREE.OrthographicCamera | undefined;
  stats_: Stats;

  constructor() {
    this.stats_ = new Stats();
  }

  async initialize() {
    this.threejs_ = new THREE.WebGLRenderer();
    document.body.appendChild(this.threejs_.domElement);
    document.body.appendChild(this.stats_.dom);

    window.addEventListener(
      'resize',
      () => {
        this.onWindowResize_();
      },
      false,
    );

    this.scene_ = new THREE.Scene();

    this.camera_ = new THREE.OrthographicCamera(0, 1, 1, 0, 0.1, 1000);
    this.camera_.position.set(0, 0, 1);

    // Setup project:
    {
      const material = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });

      const geometry = new THREE.PlaneGeometry(1, 1);

      const plane = new THREE.Mesh(geometry, material);
      plane.position.set(0.5, 0.5, 0);
      this.scene_.add(plane);
    }

    this.onWindowResize_();
    this.raf_();
  }

  onWindowResize_() {
    this.threejs_?.setSize(window.innerWidth, window.innerHeight);
  }

  raf_() {
    requestAnimationFrame(() => {
      if (!this.threejs_ || !this.scene_ || !this.camera_) return;

      this.stats_.begin();
      this.threejs_.render(this.scene_, this.camera_);
      this.stats_.end();

      this.raf_();
    });
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  const app = new App();
  await app.initialize();
});
