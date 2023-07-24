import { Post } from '@/.contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import cx from 'clsx';

export const PostCard: React.FC<{ value: Post }> = ({ value }) => {
  const post = value;
  return (
    <Link className='block' href={post.url}>
      <article
        className={cx(
          '-mx-4 space-y-2 rounded p-4',
          'hover:bg-neutral-800',
          'transition-colors'
        )}
        key={post._id}
      >
        <h1>{post.title}</h1>
        <p className='text-neutral-500'>{post.summary}</p>
        <p>
          <time dateTime={post.date} className='text-neutral-500'>
            {format(parseISO(post.date), 'yyyy-MM-dd')}
          </time>
        </p>
      </article>
    </Link>
  );
};
