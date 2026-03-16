import { MDXClient } from './mdx-client';

interface MDXWrapperProps {
  content: string;
}

export function MDXWrapper({ content }: MDXWrapperProps) {
  return <MDXClient source={content} />;
}
