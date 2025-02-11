import { Book } from "@/components/molecules/Table"

const sampleBooks: Book[] = [
  {
    id: "1",
    volumeInfo: {
      title: "The Great Gatsby",
      authors: ["F. Scott Fitzgerald"],
      publishedDate: "1925",
      categories: ["Classic", "Fiction"],
      averageRating: 4.2,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
      },
    },
  },
  {
    id: "2",
    volumeInfo: {
      title: "To Kill a Mockingbird",
      authors: ["Harper Lee"],
      publishedDate: "1960",
      categories: ["Classic", "Historical Fiction"],
      averageRating: 4.8,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/8225631-L.jpg",
      },
    },
  },
  {
    id: "3",
    volumeInfo: {
      title: "1984",
      authors: ["George Orwell"],
      publishedDate: "1949",
      categories: ["Dystopian", "Science Fiction"],
      averageRating: 4.7,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/9643256-L.jpg",
      },
    },
  },
  {
    id: "4",
    volumeInfo: {
      title: "Pride and Prejudice",
      authors: ["Jane Austen"],
      publishedDate: "1813",
      categories: ["Romance", "Classic"],
      averageRating: 4.5,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/9876789-L.jpg",
      },
    },
  },
  {
    id: "5",
    volumeInfo: {
      title: "The Hobbit",
      authors: ["J.R.R. Tolkien"],
      publishedDate: "1937",
      categories: ["Fantasy", "Adventure"],
      averageRating: 4.9,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/10067832-L.jpg",
      },
    },
  },
  {
    id: "6",
    volumeInfo: {
      title: "Moby-Dick",
      authors: ["Herman Melville"],
      publishedDate: "1851",
      categories: ["Adventure", "Classic"],
      averageRating: 4.1,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/10456420-L.jpg",
      },
    },
  },
  {
    id: "7",
    volumeInfo: {
      title: "The Catcher in the Rye",
      authors: ["J.D. Salinger"],
      publishedDate: "1951",
      categories: ["Classic", "Young Adult"],
      averageRating: 4.0,
      imageLinks: {
        thumbnail: "https://covers.openlibrary.org/b/id/10564589-L.jpg",
      },
    },
  },
]

export default sampleBooks
