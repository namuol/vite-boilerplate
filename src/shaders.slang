struct VertexStageInput
{
    float4 position : POSITION0;
};

struct VertexStageOutput
{
    float4 positionClipSpace : SV_POSITION;
};

struct FragmentStageOutput
{
    float4 color : SV_TARGET;
};

uniform float time = 0.0;

[shader("vertex")]
VertexStageOutput vertexMain(VertexStageInput input) : SV_Position
{
    VertexStageOutput output;
    output.positionClipSpace = float4(input.position.x + 0.1 * sin(time), input.position.y + 0.1 * cos(time), 1, 1);
    return output;
}

[shader("fragment")]
FragmentStageOutput fragmentMain() : SV_Target
{
    FragmentStageOutput output;
    output.color = float4(
        0.5 + cos(time) * 0.5,
        0.25 + cos(time) * 0.25 + 0.25 + sin(time) * 0.25,
        0.5 + sin(time) * 0.5,
        1);
    return output;
}
