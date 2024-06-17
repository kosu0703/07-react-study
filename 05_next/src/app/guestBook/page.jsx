"use client"

import { Box, Container, Grid, Paper, Typography } from "@mui/material"

export default function GuestBook({guestBook}) {
    return(
        <Container>
            <Typography variant="h4" gutterBottom> 
                방명록 리스트
            </Typography>
            <Grid container spacing={2}>
                {guestBook.map((k) => (
                    <Grid item xs={12} key={k.idx}> {/* 구역을 12개로 나눠서 */}
                        <Paper>
                            <Box p={2}>                         {/* 간격이 2 */}
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Typography>{k.name}</Typography>
                                    </Grid>
                                    {/* 구격을 2개씩 차지 */}
                                    <Grid item xs={2}>
                                        <Typography>{k.subject}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>{k.email}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>{k.regdate.substring(0,10)}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}