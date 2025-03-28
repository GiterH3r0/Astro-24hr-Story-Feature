export type Post = {
  frontmatter: {
    title: string;
    pubDate: string;
    description: string;
    author: string;
    image: {
      url: string;
      alt: string;
    };
    tags: Array<string>;
  };
};
