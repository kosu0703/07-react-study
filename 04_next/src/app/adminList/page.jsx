"use client"

import { Container, Typography } from "@mui/material"

export default function AdminList() {
    return(
        <Container>
            <Typography variant="h4" gutterBottom> 
                관리자 리스트
            </Typography>
            <Typography>이곳은 관리자 리스트가 있습니다.</Typography>
        </Container>
    )
}