import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { mfConfig } from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(mfConfig)],
  server: {
    port: Number(process.env.PORT ?? 3000),
    cors: {
      origin: '*', // Prevents CORS errors when fetching mf-manifest to/from other remote
    },
  },
});
