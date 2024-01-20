'use client'

import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'


import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  Pagination,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { montserrat } from "@/components/fonts";

// const movies = [
//   { id: 1, image: "", title: "Movie 1", publishYear: "2020" },
//   { id: 2, image: "", title: "Movie 2", publishYear: "2021" },
//   { id: 3, image: "", title: "Movie 3", publishYear: "2019" },
//   { id: 4, image: "", title: "Movie 4", publishYear: "2022" },
//   { id: 5, image: "", title: "Movie 5", publishYear: "2018" },
//   { id: 6, image: "", title: "Movie 6", publishYear: "2023" },
//   { id: 7, image: "", title: "Movie 7", publishYear: "2017" },
//   { id: 8, image: "", title: "Movie 8", publishYear: "2024" },
//   { id: 9, image: "", title: "Movie 9", publishYear: "2016" },
//   {
//     id: 10,
//     image: "../images/img-10",
//     title: "Movie 10",
//     publishYear: "2025",
//   },
//   {
//     id: 11,
//     image: "../images/img-11",
//     title: "Movie 11",
//     publishYear: "2015",
//   },
//   {
//     id: 12,
//     image: "../images/img-12",
//     title: "Movie 12",
//     publishYear: "2026",
//   },
// ];

export interface Movie {
  id: string;
  image: string;
  title: string;
  publishYear: string;
}

const StyledPagination = styled(Pagination)({
  "& .MuiPagination-ul li:last-child": {
      marginLeft: "16px",
  },
  "& .MuiPagination-ul li:last-child button::before": {
      content: "'Next'",
      marginRight: "8px",
      color:"#fff",
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: montserrat.style,
      lineHeight: "24px",

  },
  "& .MuiPagination-ul li:first-child": {
      marginRight: "16px",
  },
  "& .MuiPagination-ul li:first-child button::after": {
      content: "'Previous'",
      marginLeft: "8px",
      color:"#fff",
      fontSize: "16px",
      fontWeight: 700,
      fontFamily: montserrat.style,
      lineHeight: "24px",
  },
  ".css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon":{
      display:"none"
    },
    ".css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":{
      backgroundColor:"#2BD17E",
      color:"#fff"
    }
});

const Movies: React.FC = () => {
  const router = useRouter()

  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async (): Promise<Movie[] | undefined> => {
    try {
      const response = await axios.get("http://localhost:3000/api/movies", {
        headers: {
          "Cache-Control": "no-store",
        },
      });
  
      if (!response.data) {
        throw new Error("Failed to fetch movies");
      }
  
      return response.data as Movie[];
    } catch (error) {
      console.error("Error loading movies: ", error);
    }
  };

  useEffect(() => {
    getMovies().then((data) => {
      if (data) {
        setMovies(data.movies);
        console.log("Fetched movies:", data.movies);
      } else {
        console.log("Failed to fetch movies");
      }
    });;
  }, []);

  return (
    <>
      <Box
        sx={{
          maxWidth: "80rem",
          height: "100vh",
          margin: "auto",
          marginBottom:"20rem",
          padding: "70px 57px 70px 75px",
          fontFamily: montserrat.style,
          "@media (max-width: 768px)": {
            padding: "75px 30px 0px 30px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#FFF",
                    fontFamily: montserrat.style,
                    textAlign: "start",
                    fontSize: "48px",
                    fontWeight: 600,
                    lineHeight: "56px",
                    "@media (max-width: 425px)": {
                      fontSize: "28px",
                    },
                    "@media (max-width: 320px)": {
                      fontSize: "24px",
                    },
                  }}
                >
                  My movie
                </Typography>
                <Button type="button" onClick={() => router.push('/createmovie')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_3_196)">
                      <path
                        d="M17.3334 9.33332H14.6667V14.6667H9.33342V17.3333H14.6667V22.6667H17.3334V17.3333H22.6667V14.6667H17.3334V9.33332ZM16.0001 2.66666C8.64008 2.66666 2.66675 8.63999 2.66675 16C2.66675 23.36 8.64008 29.3333 16.0001 29.3333C23.3601 29.3333 29.3334 23.36 29.3334 16C29.3334 8.63999 23.3601 2.66666 16.0001 2.66666ZM16.0001 26.6667C10.1201 26.6667 5.33341 21.88 5.33341 16C5.33341 10.12 10.1201 5.33332 16.0001 5.33332C21.8801 5.33332 26.6667 10.12 26.6667 16C26.6667 21.88 21.8801 26.6667 16.0001 26.6667Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_196">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </Box>
              <Button
                      onClick={() => {
                        router.push("/signin");
                      }}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "#FFF",
                    fontFamily: montserrat.style,
                    textAlign: "start",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    "@media (max-width: 425px)": {
                      display: "none",
                    },
                  }}
                >
                  Logout
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clip-path="url(#clip0_7_232)">
                    <path
                      d="M22.6667 10.6667L20.7867 12.5467L22.8933 14.6667H12V17.3333H22.8933L20.7867 19.44L22.6667 21.3333L28 16L22.6667 10.6667ZM6.66667 6.66667H16V4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H16V25.3333H6.66667V6.66667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_232">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} mt={10}>
            <Grid container spacing={4}>
              {movies.map((card) => (
                <Grid item key={card.id} xs={6} md={3}>
                  <Card
                    sx={{
                      maxWidth: "282px",
                      backgroundColor: "#092C39",
                      borderRadius: "12px",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt={card.title}
                      />
                      <CardContent>
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontFamily: montserrat.style,
                            textAlign: "start",
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: "32px",
                            margin: "10px 0px",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#FFF",
                            fontFamily: montserrat.style,
                            textAlign: "start",
                            fontSize: "14px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            margin: "1px 0px",
                          }}
                        >
                          {card.publishYear}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} mt={10}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledPagination count={2} shape="rounded" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Movies;
