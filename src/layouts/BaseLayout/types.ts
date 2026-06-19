export type Props = {
  title?: string;
  description?: string;
  /** Path to the page, used for the canonical + og:url. */
  path?: string;
  /** Keep the page out of search results (e.g. internal reference pages). */
  noindex?: boolean;
  /** id of the page's <main>, so the skip link targets the right content. */
  mainId?: string;
};
