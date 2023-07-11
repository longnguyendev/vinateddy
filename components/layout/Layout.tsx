import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Box height={{ xs: "70px", sm: "100px" }} />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
