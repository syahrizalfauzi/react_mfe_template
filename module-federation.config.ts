import type { ModuleFederationOptions } from '@module-federation/rsbuild-plugin';
import path from 'path';
import { name, dependencies } from './package.json';

// List of dependencies that should be singletons, e.g. react, react-router, component library, etc.
const singletons = ['react', 'react-dom'];

// List of remotes that should be shared, e.g. components, utils, etc.
// Set the URL from .env
const remotes = {
  federation_remote: process.env.FEDERATION_REMOTE_URL,
};

export const mfConfig: ModuleFederationOptions = {
  name,
  shared: {
    ...dependencies,
    ...singletons.reduce(
      (acc, dep) => ({
        ...acc,
        [dep]: {
          singleton: true,
          requiredVersion: dependencies[dep],
          eager: true,
        },
      }),
      {},
    ),
  },
  remotes: Object.fromEntries(
    Object.entries(remotes).map(([name, url]) => {
      return [name, `${name}@${url}/mf-manifest.json`];
    }),
  ),
  runtimePlugins: [path.resolve(__dirname, 'shared-strategy.ts')],
};
