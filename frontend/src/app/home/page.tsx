import BookList from "@/components/organisms/BookList"
import sampleBooks from "@/utils/data"
import React from "react"

type Props = {}

function page({}: Props) {
  return (
    <div>
      <BookList books={sampleBooks} />
    </div>
  )
}

export default page
