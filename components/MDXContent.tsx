import { Post } from '@/.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const MDXContent = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);
  return <Component />;
};
