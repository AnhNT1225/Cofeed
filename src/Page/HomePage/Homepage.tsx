import { Avatar, Box, Drawer, List, Typography } from "@mui/material";
import ListItem from "../../components/ListItem/ListItem";
import React from "react";
import { deepOrange } from "@mui/material/colors";
// import Counter from '../../components/Counter/Counter';
// import {CounterFc} from '../../components/Counter/CounterTs';

const Homepage = () => {
  return (
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
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </Box>
    </Drawer>
  );
};

export default Homepage;
