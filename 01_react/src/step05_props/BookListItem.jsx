import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

class BookListItem extends React.Component{

    render(){
        const {book} = this.props;
        return(
            <Paper>
                    {/* 구역을 2개로 나눈다 */}
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={book.imgUrl} />
                    </Grid>  
                    <Grid item>
                        {/* 글자를 꾸미는 태그 */}
                        <Typography component='h5' variant="h5">
                            {book.title}
                        </Typography>
                        <Typography>
                            {book.author}
                        </Typography>
                        <Typography>
                            {book.introduce}
                        </Typography>
                    </Grid>                   

                </Grid>
            </Paper>
        )
    }

}

export default BookListItem;