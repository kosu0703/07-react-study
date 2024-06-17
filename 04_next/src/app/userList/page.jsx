"use client"

import { Container, Typography } from "@mui/material"

export default function UserList() {
    return(
        <Container>
            <Typography variant="h4" gutterBottom> 
                유저 리스트
            </Typography>
            <Typography>이곳은 유저 리스트가 있습니다.</Typography>
        </Container>
    )
}