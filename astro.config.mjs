import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roniellalmeida.com.br',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
