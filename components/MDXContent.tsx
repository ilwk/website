import { Post } from '@/.contentlayer/generated';
import { highlighterPromise } from '@/lib/shiki';
import HTMLReactParser from 'html-react-parser';
import { useMDXComponent } from 'next-contentlayer/hooks';

export const MDXContent = async ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);
  const hightlight = await highlighterPromise;
  return (
    <Component
      components={{
        //
        pre: ({ children }: any = {}) => {
          const lang = children?.props.className?.split('-')[1];
          const html = hightlight.codeToHtml(String(children.props.children), { lang });
          return <>{HTMLReactParser(html)}</>;
        },
      }}
    />
  );
};
