import { Container, List, ListItem } from "@mui/material";
import React from "react";
import BookListItem from "./BookListItem";

class BookList extends React.Component{

    render(){
        //  원래
        //const books = this.props.books;

        //  구조 분해 할당 (자바스크립트)
        const {books} = this.props;
        const bookItems = books.map((k) => {
          return(
            <ListItem>
              <BookListItem book={k} />
            </ListItem>
          )
        })
        return(
          <Container maxWidth='sm'>
            <List>
                {bookItems}
            </List>
          </Container>
        )
    }

}

export default BookList;

