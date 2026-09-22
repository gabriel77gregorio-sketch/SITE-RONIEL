import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.roniellealmeida.com.br',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
