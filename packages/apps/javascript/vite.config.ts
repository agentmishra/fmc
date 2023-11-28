import { defineConfig } from 'vite';
import { resolve } from 'path';
import { challenges } from './src/helpers/challenges';

const challengesPath = challenges.map((challenge) => `./src/challenges/${challenge}/index.html`);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ['./index.html', ...challengesPath],
    },
  },
});
