import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="max-w-xl py-8 mx-auto">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
        {format(parseISO(post.date), 'yyyy-MM-dd')}
      </time>

      <div className="mt-8 prose prose-slate" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostLayout;
