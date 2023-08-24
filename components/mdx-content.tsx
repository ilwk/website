import { Blog } from '@/.contentlayer/generated';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents: MDXComponents = {};

export const MDXContent = async ({ post }: { post: Blog }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Conetnt = useMDXComponent(post.body.code);
  return <Conetnt components={mdxComponents} />;
};
