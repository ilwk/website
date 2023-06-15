import { FunctionComponent } from 'mdx/types';
import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';

export const CodeBlock: FunctionComponent<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> = ({ children }) => {
  return <code>{children}</code>;
};
