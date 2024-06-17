"use client"

import { Box, Container, Grid, Paper, Typography } from "@mui/material"

export default function AdminList({adminList}) {
    return(
        <Container>
            <Typography variant="h4" gutterBottom> 
                관리자 리스트
            </Typography>
            <Grid container spacing={2}>
                {adminList.map((k) => (
                    <Grid item xs={12} key={k.id}> {/* 구역을 12개로 나눠서 */}
                        <Paper>
                            <Box p={2}>                         {/* 간격이 2 */}
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Typography>{k.id}</Typography>
                                    </Grid>
                                    {/* 구격을 2개씩 차지 */}
                                    <Grid item xs={2}>
                                        <Typography>{k.email}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>{k.created_at.substring(0,10)}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography>{k.last_login}</Typography>
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