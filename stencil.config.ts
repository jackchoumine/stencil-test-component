import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-test-component',
  bundles: [
    {
      components: ['my-name'],
    },
    {
      components: ['my-dropdown'],
    },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
