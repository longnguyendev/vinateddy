import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";

export function Footer() {
  return (
    <Box
      sx={{
        height: "900px",
        width: "100%",
        backgroundImage: "url(/scene.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      <Box sx={{ background: "#88cada ", padding: "45px 0" }}>
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Typography fontSize="24px" color="#fff" fontWeight={700}>
                Subscribe to our Newsletter
              </Typography>
              <Typography color="#fff" fontSize="14px">
                Be the first to know about new products, sales and promotions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Box sx={{ position: "relative" }}>
                <InputBase
                  placeholder="Your email"
                  sx={{
                    padding: "18px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    height: "56px",
                    width: "100%",
                    borderRadius: "56px",
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
                <Button
                  variant="dashed"
                  sx={{
                    position: "absolute",
                    height: "100%",
                    right: 0,
                    padding: "11px 20px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    fontSize: "13px",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
