import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { createStaticGen } from '@askrjs/askr/ssg';

import { outputDir, routes } from './ssg.config';

const rootHtmlPath = join(outputDir, 'index.html');
const ssg = createStaticGen({ routes, outputDir });
const rootShell = await readFile(rootHtmlPath, 'utf8');
const result = await ssg.generate({ mode: 'full' });

const routeMetadata: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  'index.html': {
    title: 'sqrzl peas',
    description:
      'sqrzl peas is the emulator and client family for local object storage workflows.',
  },
  'clients/index.html': {
    title: 'sqrzl peas | Clients',
    description:
      'Explore the sqrzl client implementations in TypeScript, Go, Rust, Python, and .NET.',
  },
  'emulator/index.html': {
    title: 'sqrzl peas | Emulator',
    description:
      'Learn why the sqrzl emulator exists and how it keeps vendor compatibility visible.',
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getBaseHref(filePath: string) {
  const normalizedPath = filePath.replace(/\\/g, '/').replace(/^\/+/, '');
  const depth = normalizedPath.split('/').length - 1;

  if (depth <= 0) {
    return './';
  }

  return `${'../'.repeat(depth)}`;
}

function buildDocument(shellHtml: string, filePath: string, html: string) {
  const normalizedPath = filePath.replace(/\\/g, '/').replace(/^\/+/, '');
  const metadata = routeMetadata[normalizedPath] ?? routeMetadata['index.html'];
  const baseHref = getBaseHref(normalizedPath);
  const titlePattern = /<title>[\s\S]*?<\/title>/;
  const descriptionPattern = /<meta\s+name="description"\s+content="[^"]*"\s*\/>/;
  const appMountPattern = /<div id="app">\s*<\/div>/;

  if (!appMountPattern.test(shellHtml)) {
    throw new Error('Root template is missing the #app mount point.');
  }

  let documentHtml = shellHtml.replace(titlePattern, `<title>${escapeHtml(metadata.title)}</title>`);
  documentHtml = documentHtml.replace(
    descriptionPattern,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
  );
  documentHtml = documentHtml.replace(titlePattern, (match) => `${match}\n    <base href="${baseHref}" />`);

  return documentHtml.replace(appMountPattern, `<div id="app">${html}</div>`);
}

console.log(`Generated ${result.successful}/${result.totalRoutes} pages`);

if (result.failed > 0) {
  console.error(`Generation failed for ${result.failed} route(s).`);
  process.exit(1);
}

const rootRoute = result.routes.find(
  (route) => route.filePath.replace(/^\/+/, '') === 'index.html' && route.status === 'success' && route.written,
);

if (!rootRoute) {
  throw new Error('Root SSG output was not generated.');
}

for (const route of result.routes) {
  if (route.status !== 'success' || !route.written) {
    continue;
  }

  const routePath = route.filePath.replace(/^\/+/, '');
  const routeHtmlPath = join(outputDir, routePath);
  const routeDocumentHtml = buildDocument(rootShell, routePath, route.html);

  await writeFile(routeHtmlPath, routeDocumentHtml, 'utf8');
}