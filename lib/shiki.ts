import { getHighlighter } from 'shiki';

export const highlighterPromise = getHighlighter({
  theme: 'nord',
  langs: ['javascript', 'bash', 'tsx', 'jsx', 'js', 'json'],
});

export async function hightlight(code: string, language: string) {
  const highlighter = await highlighterPromise;
  const output = highlighter.codeToHtml(code, { lang: language });
  return output;
}
