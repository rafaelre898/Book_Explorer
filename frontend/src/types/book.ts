export interface Book {
  id: string
  title: string
  authors?: string[]
  publication_year: string
  genre?: string[]
  rating?: number | string
  thumbnail?: string
}
