// import React, { useEffect, useState } from "react";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
// import mentor1 from "../../assets/mentor_pics/01.jpg";
// import mentor2 from "../../assets/mentor_pics/02.jpg";
// import mentor3 from "../../assets/mentor_pics/03.jpg";
// import mentor4 from "../../assets/mentor_pics/04.jpg";
// import mentor5 from "../../assets/mentor_pics/05.jpg";
// import mentor6 from "../../assets/mentor_pics/06.jpg";
// import mentor7 from "../../assets/mentor_pics/07.jpg";
// import mentor8 from "../../assets/mentor_pics/08.jpg";

// function ExploreGrid() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState('');

//   useEffect(() => {
//     fetch(`https://itor-simple-node-api.herokuapp.com/api/v1/mentor/search`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`,
//           );
//         }
//         return response.json();

//       })
//       .then((actualData) => {
//         const { mentor } = actualData
//         setData(mentor);
//         setError(null);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setData(null);
//         console.log(error)
//       })
//       .finally(() => {
//         setLoading(false);

//       });
//   }, []);

//   return (
//     <Grid
//       className="explore_grid"
//       container
//       rowSpacing={1}
//       columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//     >
//       {/* {data.map((mentor) => {
//         return <li key={mentor._id}>
//           {mentor.name}
//         </li>
//       })} */
//       console.log(data)
//       }
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor1}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor2}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor3}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor4}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor5}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor6}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor7}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       <Grid item md={3} xs={8}>
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia
//             component="img"
//             height="280"
//             image={mentor8}
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Jake Archibald IN
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Product Manager Mircrosoft <br />
//               Reactjs, career advice
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }

// export default ExploreGrid;








// useEffect(() => {
//     fetch('https://itor-simple-node-api.herokuapp.com/api/v1/mentor/search')
//     .then(res => res.json())
//     .then(data => {
//       const {mentor} = data;
//       setData(mentor)
//         console.log(mentor)
//     })
//   }, []);

//   return (
//    <>
//     <ul>
//       {data.map((mentor) =>{
//         return <li key={mentor.id}>
//           {mentor.name}
//         </li>
//       })}
//     </ul>
//    </>
//   );