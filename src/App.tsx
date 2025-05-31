import '@use-gpu/inspect/theme.css';

import {UseInspect} from '@use-gpu/inspect';
import {inspectGPU} from '@use-gpu/inspect-gpu';
import {type LC} from '@use-gpu/live';
import {HTML} from '@use-gpu/react';
import {AutoCanvas, WebGPU} from '@use-gpu/webgpu';
import {DebugProvider} from '@use-gpu/workbench';

import {RTTAccumulatePage} from './accumulate';
import {makeFallback} from './Fallback';

export const App: LC = () => {
  const root = document.querySelector('#use-gpu')!;

  return (
    <UseInspect provider={DebugProvider} extensions={[inspectGPU]}>
      <WebGPU // WebGPU Canvas with a font
        fallback={(error: Error) => (
          <HTML container={root}>{makeFallback(error)}</HTML>
        )}
      >
        <AutoCanvas selector={'#use-gpu .canvas'} samples={4}>
          <RTTAccumulatePage />
        </AutoCanvas>
      </WebGPU>
    </UseInspect>
  );
};

App.displayName = 'App';
