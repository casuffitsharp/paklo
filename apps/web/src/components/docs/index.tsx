import defaultMdxComponents, { createRelativeLink } from '@fumadocs/base-ui/mdx';
import { generate as DefaultImage } from '@fumadocs/base-ui/og';

export { DefaultImage };
export { defaultMdxComponents, createRelativeLink };

export { DocsLayout } from '@fumadocs/base-ui/layouts/notebook';
export { DocsBody, DocsPage, PageLastUpdate } from '@fumadocs/base-ui/layouts/notebook/page';
export { RootProvider } from '@fumadocs/base-ui/provider/next';

export * from './buttons';
export * from './feedback';
