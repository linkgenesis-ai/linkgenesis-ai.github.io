import path from 'node:path';
import icons from '@jcamp/tailwindcss-plugin-icons';

export async function processData(
  pageData,
  ctx,
  aside = 'left',
  sidebar = false
) {
  const config = ctx?.siteConfig?.site?.themeConfig;
  const postsPattern = config.blog?.postsPath ?? 'blog/posts';
  const authorsPattern = config.blog?.authorsPath ?? 'blog/authors';

  if (pageData.relativePath.includes(postsPattern)) {
    pageData.frontmatter.blog = 'post';
    pageData.frontmatter.aside = aside;
    pageData.frontmatter.sidebar = sidebar;
    pageData.frontmatter.prev = false;
    pageData.frontmatter.next = false;
  }
  if (pageData.relativePath.includes(authorsPattern)) {
    pageData.frontmatter.blog = 'author';
    pageData.frontmatter.aside = aside;
    pageData.frontmatter.sidebar = sidebar;
    pageData.frontmatter.prev = false;
    pageData.frontmatter.next = false;
  }
}

export function defineTailwindContent(base = './docs_src') {
  return [
    path.join(base, '**/*.md'),
    path.join(base, '.vitepress/**/*.{js,ts,vue}'),
  ];
}

export function defineTailwindConfig(base = './docs_src', config) {
  if (base === null || base === undefined) {
    base = './docs_src';
  }
  return {
    darkMode: 'class',
    // @ts-expect-error icons works once transpiled
    plugins: [icons()],
    content: defineTailwindContent(base),
    ...config,
  };
}
