import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import gfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', require: false },
    pin: { type: 'boolean', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [gfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'nord',
        },
      ],
    ],
  },
});
