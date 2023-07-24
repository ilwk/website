'use client';

import { Post } from '@/.contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Fruit } from './fruit';

const mdxComponents: MDXComponents = {
  Fruit: Fruit,
};

export const MDXContent = async ({ post }: { post: Post }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Conetnt = useMDXComponent(post.body.code);
  return <Conetnt components={mdxComponents} />;
};
