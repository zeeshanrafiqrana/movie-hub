"use client";

import React from "react";
import {Field, useFormik} from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import {montserrat} from "@/components/fonts";
import { useRouter } from "next/navigation";

interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const SignInFormSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignInForm: React.FC = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: SignInFormSchema,
    onSubmit: (values: SignInFormValues) => {
      if (values.email === 'test@gmail.com' && values.password === 'admin123') {
        router.push('/movies');
      } else {
        alert('Invalid username or password');
      }
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "",
        height: "87.5vh",
        maxWidth: "300px",
        margin: "auto",
        fontFamily: montserrat.style,
      }}
    >
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
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
            fontSize: "64px",
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          Sign in
        </Typography>
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
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          autoComplete='off'
        />
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
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          autoComplete='off'
        />
        <FormControlLabel
          sx={{
            justifyContent: "center",
            color: "white"
          }}
          control={
            <Checkbox
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="rememberMe"
              color="default"
              sx={{
                // background: "#224957",
                color: "#224957",
                '&.Mui-checked': {
                  color: "#ffffff",
                },
              }}
            />
          }
          label="Remember me"
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            textAlign: "center",
            fontFamily: montserrat.style,
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: 1.5,
            p: "15px",
            borderRadius: "10px",
            background: "#2BD17E",
            "&:hover": {
              bgcolor: "rgba(43, 209, 126, 0.7)"
            }
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignInForm;
