import { Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import IconAndText from "../../molecules/IconAndText";
import { Book } from "../BookCards";
import KindlePopup from "../KindlePopup";
import Tabs from "../Tabs/index ";

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  const [isPopupActive, setPopupActive] = useState(false);
  const handleBuyNowClick = () => {
    setPopupActive(true);
  };
  const handleReadNowClick = () => {};
  return (
    <Grid container>
      <Grid item>
        <Grid container direction="row">
          <Grid item md={9}>
            <Grid container direction="column" rowSpacing={10}>
              <Grid item data-testid="top">
                <TypographyComponent
                  variant="body2"
                  children="Get the key ideas from"
                />
              </Grid>
              <Grid item>
                <Grid container direction="column" rowSpacing={4}>
                  <Grid item>
                    <TypographyComponent variant="h1">
                      {book?.bookName}
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <TypographyComponent variant="subtitle1">
                      Turning Your Business into an Enduring Great Company
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <TypographyComponent variant="body2">
                      <span>By {book.bookAuthor}</span>
                    </TypographyComponent>
                  </Grid>
                  <Grid item>
                    <IconAndText
                      icon="time.svg"
                      text={`${book?.readTime} minutes`}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container columnSpacing={5}>
                  <Grid item>
                    <Button children="Read Now" />
                  </Grid>
                  <Grid item>
                    <Button
                      children={"Read Now"}
                      onClick={handleReadNowClick}
                    />
                  </Grid>
                  <Grid item></Grid>
                  <Button children="send to Kindle" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Image src={`${book.bookImage}`} />
          </Grid>
        </Grid>
      </Grid>
      <Grid itemScope md={10} display="flex" justifyContent="left !important">
        <Tabs data={[]} />
      </Grid>
      <KindlePopup isActive={isPopupActive} />
    </Grid>
  );
};

export default BookDetails;
