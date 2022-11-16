import React from "react";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: "white",
        }}>
        Search Results for:
        <span
          style={{
            color: "#F31503",
          }}>
          {searchTerm}
        </span>{" "}
        Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
