import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jipsy-danger.github.io/bg-remove/',
  base: '/bg-remove/',
  output: 'static',
  build: { format: 'directory' }
});
