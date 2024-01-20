"use client";

import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { montserrat } from "@/components/fonts";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const AddMovie: React.FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "",
        height: "87.5vh",
        maxWidth: "550px",
        margin: "auto",
        fontFamily: montserrat.style,
        "@media (max-width: 425px)": {
          maxWidth: "300px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "56px",
            "@media (max-width: 425px)": {
              fontSize: "32px",
              lineHeight: "40px",
            },
          }}
        >
          Your movie list is empty
        </Typography>
        <Button
          onClick={() => {
            router.push("/createmovie");
          }}
          variant="contained"
          sx={{
            p: "15px",
            margin: "20px 150px",
            borderRadius: "10px",
            background: "#2BD17E",
            "&:hover": {
              bgcolor: "rgba(43, 209, 126, 0.7)",
            },
            "@media (max-width: 425px)": {
              margin: "15px 20px", // Adjust margin for smaller screens if needed
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: montserrat.style,
              fontSize: "16px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "24px",
            }}
          >
            Add a new movie
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AddMovie;
