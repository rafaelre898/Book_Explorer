export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    categories?: string[];
    averageRating?: number;
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

export interface GoogleBooksResponse {
  items?: Book[];
}
