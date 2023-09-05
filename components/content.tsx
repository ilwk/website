import { Posts } from '@/.contentlayer/generated';
import { FC } from 'react';

export const Content: FC<{ post: Posts }> = ({ post }) => {
  return (
    <div
      className='cl-post-body'
      dangerouslySetInnerHTML={{ __html: post.body.html }}
    />
  );
};
