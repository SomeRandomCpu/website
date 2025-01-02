import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://duplicake.fyi',
  output: 'static',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    spectre({
      name: 'Duplicake',
      openGraph: {
        home: {
          title: 'Homepage',
          description: 'The homepage for my website'
        },
        blog: {
          title: 'Blog',
          description: 'My blog'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'louisescher/spectre',
        repositoryId: 'R_kgDONjm3ig',
        category: 'General',
        categoryId: 'DIC_kwDONjm3is4ClmBF',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});