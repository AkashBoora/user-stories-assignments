import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import ProgressBar from "../../atoms/ProgressBar";
import { Book } from "../../organisms/BookCards";
import IconAndText from "../IconAndText";

interface BookCardProps {
  book: Book
}

const BookCard = ({book}:BookCardProps) => {
  return (
    <Card>
      <CardMedia component="img" alt="book image" image="image.png" />
      <CardContent>
        <Typography variant="h5" children={book.bookName}/>
        <Typography variant="body2" children={book.bookAuthor} />
        <IconAndText icon="time.svg" text={`${book.readTime} to read`}/>
        <ProgressBar value={book.finishedTime} />
      </CardContent>
    </Card>
  );
};

export default BookCard;
