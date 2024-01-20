import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import {Box} from "@mui/material";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Box
        component={"body"}
        className={`${inter.className} bg-color`}
        sx={{
          padding: 0,
          margin: 0,
        }}
      >
        <div className="child-wrapper">{children}</div>
        <Footer />
      </Box>
    </html>
  );
}