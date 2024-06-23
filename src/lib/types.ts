export type Joke = {
  id: string;
  value: string;
  categories: string[];
};

export type JokeSearchResult = {
  total?: number;
  result: Joke[];
};
