"use client"

import {Container, List, ListItem, ListItemText, Paper, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import {MenuContext} from "@/stores/StoreContext";
import {useContext} from "react";

const UserDetail = observer(() => {
    const menuStore = useContext(MenuContext);

    const { id, name, email, provider ,phone} = menuStore.userInfo;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                유저 정보
            </Typography>
            <Paper elevation={3} style={{ padding: "20px" }}>
                <List>
                    <ListItem>
                        <ListItemText primary="ID" secondary={id} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Name" secondary={name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Phone" secondary={phone} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Provider" secondary={provider} />
                    </ListItem>
                </List>
            </Paper>
        </Container>
    );
});

export default UserDetail;