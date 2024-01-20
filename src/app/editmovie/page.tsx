"use client";

import React from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineFileDownload } from "react-icons/md";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { montserrat } from "@/components/fonts";
import { useRouter } from "next/navigation";

const EditMovieFormSchema = Yup.object({
  file: Yup.mixed().required("File is required"),
  title: Yup.string().required("Title is required"),
  publishYear: Yup.number()
    .typeError("Publish Year must be a number")
    .min(1800, "Invalid year")
    .max(new Date().getFullYear(), "Year cannot be in the future")
    .required("Publish Year is required"),
});

interface EditMovieFormValues {
  file: File | null;
  title: string;
  publishYear: string | null;
}

const EditMovie: React.FC = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      file: null,
      title: "",
      publishYear: "",
    },
    validationSchema: EditMovieFormSchema,
    onSubmit: (values: EditMovieFormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{
        maxWidth: "90rem",
        margin: "auto",
        padding: "60px 75px",
        fontFamily: montserrat.style,
        "@media (max-width: 768px)": {
          padding: "65px 30px 0px 30px",
        },
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFF",
              fontFamily: montserrat.style,
              textAlign: "start",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "56px",
            }}
          >
            Edit
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              marginTop: "4.5rem",
            }}
            component={"form"}
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    maxWidth: "473px",
                  }}
                >
                  <input
                    type="file"
                    style={{
                      opacity: 0,
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onChange={(event) => {
                      formik.setFieldValue(
                        "file",
                        event.currentTarget.files?.[0] || null
                      );
                    }}
                  />
                  <Box
                    sx={{
                      border: "2px dashed #fff",
                      padding: "20px",
                      textAlign: "center",
                      backgroundColor: "#224957",
                      borderRadius: "10px",
                      color: "#fff",
                      maxWidth: "473px",
                      height: "504px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      "@media (max-width: 1024px)": {
                        height: "354px",
                      },
                      "@media (max-width: 425px)": {
                        height: "150px",
                        marginBottom: "1rem",
                      },
                    }}
                  >
                    <MdOutlineFileDownload />
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontFamily: montserrat.style,
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                      }}
                    >
                      Drop an image here
                    </Typography>
                  </Box>
                  {formik.touched.file && formik.errors.file && (
                    <div style={{ color: "red" }}>{formik.errors.file}</div>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    maxWidth: "400px",
                  }}
                >
                  <TextField
                    sx={{
                      "& label, & input": {
                        color: "white",
                      },
                      "& input": {
                        borderRadius: "10px",
                        background: "#224957",
                      },
                    }}
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    autoComplete="off"
                  />
                  <TextField
                    sx={{
                      width: "50%",
                      "& label, & input": {
                        color: "white",
                      },
                      "& input": {
                        borderRadius: "10px",
                        background: "#224957",
                      },
                    }}
                    id="publishYear"
                    name="publishYear"
                    label="Publish Year"
                    type="number"
                    value={formik.values.publishYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.publishYear &&
                      Boolean(formik.errors.publishYear)
                    }
                    helperText={
                      formik.touched.publishYear && formik.errors.publishYear
                    }
                    autoComplete="off"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "30px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        router.push("/movies");
                      }}
                      variant="outlined"
                      sx={{
                        textAlign: "center",
                        fontFamily: montserrat.style,
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: 1.5,
                        width: "12rem",
                        p: "15px",
                        borderRadius: "10px",
                        border: "1px solid #fff",
                        color: "#fff",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "",
                        },
                        "@media (max-width: 768px)": {
                          width: "10rem",
                        },
                        "@media (max-width: 425px)": {
                          width: "11rem",
                        },
                        "@media (max-width: 375px)": {
                          width: "9.5rem",
                        },
                        "@media (max-width: 325px)": {
                          width: "7.5rem",
                        },
                      }}
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        textAlign: "center",
                        fontFamily: montserrat.style,
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "24px",
                        width: "12rem",
                        p: "15px",
                        borderRadius: "10px",
                        background: "#2BD17E",
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "rgba(43, 209, 126, 0.7)",
                        },
                        "@media (max-width: 768px)": {
                          width: "10rem",
                        },
                        "@media (max-width: 425px)": {
                          width: "11rem",
                        },
                        "@media (max-width: 375px)": {
                          width: "9.5rem",
                        },
                        "@media (max-width: 325px)": {
                          width: "7.5rem",
                        },
                      }}
                    >
                      Update
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditMovie;
