// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
