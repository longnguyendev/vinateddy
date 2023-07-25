import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { products } from "@/store/constants";

type Inputs = {
  value: number;
};

const schema = yup.object({
  value: yup.number().min(1).max(99).required("Required"),
});

export default function ShopDetailPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { value: 1 },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = ({ value }) => console.log(value);

  const router = useRouter();
  const id = Number(router.query.id);
  const product = products.find((product) => product.id === id);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={0} marginTop="150px">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              width="100%"
              src={`../${product?.image}`}
              alt={product?.name}
              onClick={handleOpen}
            />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                component="img"
                src={`../${product?.image}`}
                alt={product?.name}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60vw",
                  boxShadow: 24,
                }}
              />
            </Modal>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: { xs: "0", sm: "20px", lg: "80px" } }}
          >
            <Typography fontSize="40px" color="#333" fontWeight={700}>
              {product?.name}
            </Typography>
            <Typography>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              {product?.promotion && (
                <Typography
                  fontSize="18px"
                  color="#999"
                  sx={{ textDecoration: "line-through" }}
                >
                  {product?.price.toLocaleString()}
                </Typography>
              )}
              <Typography fontSize="30px" color="#333">
                {product?.promotion
                  ? (
                      product?.price -
                      (product?.price * product?.promotion) / 100
                    ).toLocaleString()
                  : product?.price.toLocaleString()}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              spacing={1}
              alignItems="center"
            >
              <Controller
                control={control}
                name="value"
                render={({ field: { onChange, ...rest } }) => (
                  <InputBase
                    inputMode="numeric"
                    type="number"
                    sx={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      fontSize: "15px",
                      fontWeight: "bold",
                      lineHeight: "46px",
                      color: "#666",
                      border: "none",
                      background: "#f5f5f5",
                      WebkitAppearance: "none",
                    }}
                    inputProps={{
                      style: {
                        textAlign: "center",
                      },
                    }}
                    {...rest}
                    onChange={(e) =>
                      onChange(
                        Number(e.target.value) < 100 ? e.target.value : "99"
                      )
                    }
                  />
                )}
              />
              <Button
                type="submit"
                variant="dashed"
                sx={{
                  padding: "12px 40px",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                Add to cart
              </Button>
              <IconButton>
                <FavoriteBorderIcon color="info" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
