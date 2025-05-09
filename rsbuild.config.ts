import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { mfConfig } from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginEslint({
      eslintPluginOptions: {
        configType: 'flat',
      },
    }),
    pluginModuleFederation(mfConfig),
  ],
  // Disable this for the host app
  tools: {
    rspack: {
      output: {
        publicPath: 'auto',
      },
    },
  },
  output: {
    polyfill: 'usage',
  },
  server: {
    port: Number(process.env.PORT ?? 3000),
    cors: {
      origin: '*', // Prevents CORS errors when fetching mf-manifest to/from other remote
    },
  },
});
