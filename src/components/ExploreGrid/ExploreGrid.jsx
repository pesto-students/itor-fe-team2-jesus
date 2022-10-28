import React, { useEffect, useState } from "react";
import { Card,CircularProgress, Box, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function ExploreGrid() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://itor-simple-node-api.herokuapp.com/api/v1/mentor/search`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        return response.json();
      })
      .then((actualData) => {
        const { mentor } = actualData;
        setData(mentor);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if(loading){
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  }

  return (
    <Grid
      className="explore_grid"
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {data.map((mentor) => {
        return (
          <Grid
            key={mentor._id}
            item
            md={3}
            xs={8}
            onClick={() => navigate(`/mentor/${mentor._id}`)}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="280"
                image={mentor.photo?.secure_url}
                alt= {mentor.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {mentor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mentor.companyName} <br />
                  {mentor.expertise}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ExploreGrid;
