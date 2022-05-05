import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import ListItem from "../../components/ListItem/ListItem";
import React from "react";
import { deepOrange } from "@mui/material/colors";
import Post from "../../components/Post/Post";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getImage, postsCol } from "../../helpers/common";
import { IPost } from "../../interface/post";
import { ref } from "firebase/storage";
import { storage } from "../../firebase";
// import Counter from '../../components/Counter/Counter';
// import {CounterFc} from '../../components/Counter/CounterTs';

const Homepage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  // const spaceRef = ref(storage, 'images/188331630_3072855866279827_1342290930409402866_n.png');
  // const path = spaceRef.fullPath;
  
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCol);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  // console.log("posts: ", posts);
  getImage('188331630_3072855866279827_1342290930409402866_n');

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          [`& .MuiDrawer-paper`]: { width: 200, boxSizing: "border-box" },
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
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h5">Feeds</Typography>
        <Grid container spacing={3}>
          {posts.map((post) => {
            return (
              <Grid item xs={4}>
                <Post post={post}/>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography variant="h5">Suggestions for you</Typography>
        <Grid container spacing={3}>
          {posts.map((post) => {
            return (
              <Grid item xs={4}>
                <Post post={post}/>
              </Grid>
            );
          })}
        </Grid>
        <Divider variant="middle"/>
        <Typography variant="h5">Lastest post activity</Typography>
        <Paper elevation={2}>
          {/* <img src={path} alt='post recent' width={200}/> */}
        </Paper>
      </Box>
    </Box>
  );
};

export default Homepage;
