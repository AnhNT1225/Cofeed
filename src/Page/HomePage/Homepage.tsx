import { Avatar, Box, Drawer, List, Typography } from "@mui/material";
import ListItem from "../../components/ListItem/ListItem";
import React from "react";
import { deepOrange } from "@mui/material/colors";
import Post from "../../components/Post/Post";
import { drawerWidth } from "../../constants/drawer";
// import Counter from '../../components/Counter/Counter';
// import {CounterFc} from '../../components/Counter/CounterTs';

const Homepage = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: "border-box" },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Typography variant="h5">Menu</Typography>
          <List>
            <ListItem />
          </List>
          <Typography variant="h5">Account</Typography>
          <List>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Typography variant="h6">Tuan Anh</Typography>
            <Typography variant="subtitle1">Tuan Anh</Typography>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Post />
      </Box>
    </>
  );
};

export default Homepage;
