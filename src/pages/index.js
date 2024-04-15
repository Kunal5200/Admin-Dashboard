import { loginCredientials } from "@/assests/login";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      state.email === loginCredientials.email &&
      state.password === loginCredientials.password
    ) {
      router.push("/dashboard");
    } else {
      setOpen(true);
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Log In to your Account</title>
        <meta
          name="description"
          content="Log In to your Account to redirect to the Dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          background: "rgb(0,40,104)",
          background:
            "linear-gradient(302deg, rgba(0,40,104,1) 27%, rgba(175,63,63,1) 100%)",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <Grid container>
              <Grid item lg={5} margin={"auto"}>
                <Card
                  sx={{
                    borderRadius: 4,
                    p: 4,
                    backgroundColor: "#ffffff49",
                    color: "#fff",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 25,
                      textAlign: "center",
                      mb: 2,
                      mt: 2,
                      fontWeight: 600,
                    }}
                  >
                    Log In to your Account
                  </Typography>
                  <form onSubmit={formSubmitHandler}>
                    <Grid container>
                      <Grid item lg={12}>
                        <TextField
                          label="Email*"
                          type="email"
                          fullWidth
                          id="email"
                          sx={{
                            "& .MuiOutlinedInput-input": {
                              color: "#ffffff",
                            },
                            "& label": {
                              color: "#ffffff",
                            },
                            "& label.Mui-focused": {
                              color: "#fff",
                              // backgroundColor: "#fff",
                              textAlign: "center",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#ffffff !important",
                                borderWidth: "1px",
                              },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                              {
                                border: "1px solid #ffffff",
                                borderColor: "#ffffff",
                              },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #ffffff",
                            },
                            "& .MuiOutinedInput-notchedOutline:hover": {
                              borderColor: "#fffff",
                            },
                          }}
                          onChange={inputHandler}
                        />
                      </Grid>
                      <Grid item lg={12} mt={3}>
                        <TextField
                          label="Password*"
                          fullWidth
                          id="password"
                          type={showPassword ? "text" : "password"}
                          sx={{
                            "& .MuiOutlinedInput-input": {
                              color: "#ffffff",
                            },
                            "& label": {
                              color: "#ffffff",
                            },
                            "& label.Mui-focused": {
                              color: "#fff",
                              // backgroundColor: "#fff",
                              textAlign: "center",
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                              {
                                borderColor: "#ffffff !important",
                                borderWidth: "1px",
                              },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                              {
                                border: "1px solid #ffffff",
                                borderColor: "#ffffff",
                              },
                            "& .MuiOutlinedInput-notchedOutline": {
                              border: "1px solid #ffffff",
                            },
                            "& .MuiOutinedInput-notchedOutline:hover": {
                              borderColor: "#fffff",
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <IconButton onClick={handleShowPassword}>
                                {!showPassword ? (
                                  <Visibility sx={{ fill: "#ffffff" }} />
                                ) : (
                                  <VisibilityOff sx={{ fill: "#ffffff" }} />
                                )}
                              </IconButton>
                            ),
                          }}
                          onChange={inputHandler}
                        />
                      </Grid>
                      <Grid item lg={12} mt={3}>
                        <Button
                          fullWidth
                          sx={{
                            border: "1px solid #000",
                            backgroundColor: "#000",
                            color: "#fff",
                            p: 1.5,
                            ":hover": {
                              backgroundColor: "#000",
                              color: "#fff",
                              transform: "scale(1.04)",
                            },
                            transition: "0.5s ease all",
                          }}
                          type="submit"
                        >
                          {loading ? (
                            <CircularProgress sx={{ color: "#fff" }} />
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Snackbar
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={4000}
                  >
                    <Alert
                      severity="error"
                      variant="filled"
                      sx={{ width: "100%", cursor: "pointer" }}
                      onClick={() => setOpen(false)}
                    >
                      <Typography>Invalid Credientials</Typography>
                    </Alert>
                  </Snackbar>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
