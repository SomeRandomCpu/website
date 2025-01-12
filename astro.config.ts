import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://duplicake.fyi',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap({
      customPages: ['https://status.duplicake.fyi'],
    }),
    spectre({
      name: 'Duplicake',
      openGraph: {
        home: {
          title: "Duplicake's personal website - Homepage",
          description: "The homepage of Duplicake's personal website. This website is Open Source, contains Umami Analytics, and is built with Astro.",
        },
        blog: {
          title: "Duplicake's personal website website - Blog",
          description: 'My Blog where I dump random stuff. This website is Open Source, contains Umami Analytics, and is built with Astro.'
        },
        projects: {
          title: "Duplicake's personal website - Projects",
          description: 'My Projects. This website is Open Source, contains Umami Analytics, and is built with Astro.'
        }
      },
      giscus: {
        repository: 'SomeRandomCpu/website-spectre',
        repositoryId: 'R_kgDONlh9tw',
        category: 'General',
        categoryId: 'DIC_kwDONlh9t84CltGC',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
});