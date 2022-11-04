import { Grid } from "@mui/material";
import React from "react";
import { StringLiteral } from "typescript";
import BookCard from "../../molecules/BookCard";

export interface Book {
  bookImage: StringLiteral;
  bookName: string;
  bookAuthor: string;
  readTime: number;
  finishedTime: number;
}
interface BookCardsProps {
  books: Book[];
}

const BookCards = ({ books }: BookCardsProps) => {
  return (
    <Grid container>
      {books.map((book) => (
        <Grid item>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookCards;
