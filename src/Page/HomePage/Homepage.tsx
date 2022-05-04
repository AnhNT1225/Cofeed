import {
  Avatar,
  Box,
  Button,
  Drawer,
  Grid,
  List,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ListItem from "../../components/ListItem/ListItem";
import React from "react";
import { deepOrange } from "@mui/material/colors";
import Post from '../../components/Post/Post';
// import Counter from '../../components/Counter/Counter';
// import {CounterFc} from '../../components/Counter/CounterTs';

const Homepage = () => {
  return (
    <Box sx={{ display: "flex" }}>
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

          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Typography component="h6">Tuan Anh</Typography>
              <Typography component="caption">a@gmail.com</Typography>
              <Button href="/login">Logout</Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
      <Box>
        <Typography variant="h5">Feeds</Typography>

        <Post />
      </Box>
    </Box>
  );
};

export default Homepage;
