"use client"

import { Container, Typography } from "@mui/material"

export default function GuestBook() {
    return(
        <Container>
            <Typography variant="h4" gutterBottom> 
                방명록 리스트
            </Typography>
            <Typography>이곳은 방명록 리스트가 있습니다.</Typography>
        </Container>
    )
}