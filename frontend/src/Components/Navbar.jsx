import logo from "../images/zillow-logo.svg";
import profile from "../images/profile.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { loginUser, signupUser } from "../Services/user";
import { toast } from "react-toastify";

//--------------------------------------------------------------------------------
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
//--------------------------------------------------------------------------------

function Navbar() {
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length === 0) {
      setSnackbarMessage("Enter your email");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
    } else if (password.length === 0) {
      setSnackbarMessage("Enter your password");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
    } else {
      const result = await loginUser(email, password);
      console.log(result);
      if (result["status"] === "success") {
        const token = result["data"]["token"];
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("name", result.data.name);
        sessionStorage.setItem("id", result.data.id);
        setEmail("");
        setPassword("");
        setOpen(false);

        setSnackbarMessage("Login Successfull...");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);

        setTimeout(() => {
          if (result.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        }, 2000);

        console.log(result.status);
        console.log(result.data);
      } else {
        setSnackbarMessage(result.error || "Login failed");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  const onSignup = async () => {
    console.log("Button Clicked...");
    if (name.length === 0) {
      toast.warn("Enter your name");

    } else if (email.length === 0) {
      toast.warn("Enter your email");
    } else if (password.length === 0) {
      toast.warn("Enter your password");
    } else {
      const result = await signupUser(name, email, password);
      console.log(name, email, password);
      console.log("result status : " + result.status);

      if (result["status"] === "success") {
        toast.success("Successfully registered the user");
        console.log(result.status);
        setName("");
        setEmail("");
        setPassword("");
        setOpen(false);
        navigate("/home");
      } else {
        // setSnackbarMessage(result.error);
        // setSnackbarSeverity("error");
        // setSnackbarOpen(true);
        // toast.error(result.error)
        toast.error("Something went wrong")
        // console.log(result.status);
        // console.log(result.error);
        // console.log(result.data);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  return (
    <>
      <Container fixed>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "18px",
          }}
        >
          <div style={{ display: "flex" }}>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={()=>{navigate('/buy-home')}}
            >
              Buy
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={()=> { navigate('/under-construction') }}
            >
              Rent
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={()=> { navigate('/under-construction') }}
            >
              Sell
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={()=> { navigate('/under-construction') }}
            >
              Home Loans
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={()=> { navigate('/under-construction') }}
            >
              Find an Agent
            </Button>
          </div>

          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              marginLeft: "-60px",
            }}
          >
            <Button onClick={()=>{navigate('/')}}>
              <img src={logo} alt="logo" />
            </Button>
          </div>

          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              color: "black",
              ":hover": {
                color: "blue",
              },
            }}
            onClick={()=> { navigate('/under-construction') }}
          >
            Manager Rentals
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              color: "black",
              ":hover": {
                color: "blue",
              },
            }}
            onClick={()=> { navigate('/under-construction') }}
          >
            Advertise
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontSize: "16px",
              color: "black",
              ":hover": {
                color: "blue",
              },
            }}
            onClick={()=> { navigate('/under-construction') }}
          >
            Help
          </Button>

          {!sessionStorage.getItem("name") ? (
            <Button
              sx={{
                textTransform: "none",
                fontSize: "16px",
                color: "black",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={handleClickOpen}
            >
              Sign In
            </Button>
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <Button>
                  <img style={{ width: "30px" }} src={profile} alt="profile" />
                </Button>
              </div>
              <div>
                <Link
                  sx={{
                    textTransform: "none",
                    fontSize: "16px",
                    color: "black",
                    ":hover": {
                      color: "blue",
                    },
                  }}
                  onClick={()=>{
                    sessionStorage.removeItem("id");
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("token");
                    navigate('/');
                  }}
                >
                  <LogoutIcon />
                </Link>
              </div>
            </>
          )}

        </div>
      </Container>

      {/* ---------------------------------------------------------------------------------------- */}

      <Dialog open={open} onClose={handleClose} sx={{ borderRadius: "40px" }}>
        <DialogTitle
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          Welcome to Zillow
        </DialogTitle>
        <Tabs
          sx={{ padding: "30px", marginTop: "-50px" }}
          value={tabIndex}
          onChange={handleChange}
          aria-label="sign in tabs"
        >
          <Tab label="Sign In" sx={{ textTransform: "none" }} />
          <Tab label="New Account" sx={{ textTransform: "none" }} />
        </Tabs>
        <DialogContent
          sx={{ height: "600px", width: "400px", borderRadius: "40px" }}
        >
          <TabPanel value={tabIndex} index={0}>
            <Typography sx={{ marginTop: "-50px" }}>Email</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              type="email"
              placeholder="Enter email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography>Password</Typography>
            <TextField
              margin="dense"
              id="password"
              type="password"
              placeholder="Enter password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "10px",
                backgroundColor: "#0033cc",
                fontSize: "16px",
              }}
              onClick={onLogin}
            >
              Sign in
            </Button>
            <Box mt={2}>
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#0033cc",
                  fontWeight: "bold",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Forgot your password?
              </Link>
            </Box>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Typography sx={{ marginTop: "-50px" }}>Name</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="new-name"
              placeholder="Enter name"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography>Email</Typography>
            <TextField
              margin="dense"
              id="new-email"
              type="email"
              placeholder="Enter email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography>Password</Typography>
            <TextField
              margin="dense"
              id="new-password"
              type="password"
              placeholder="Create password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              At least 8 characters
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              Mix of letters and numbers validation neutral
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              At least 1 special character
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              At least 1 lowercase letter and 1 uppercase letter
            </Typography>
            <FormControlLabel
              control={<Checkbox name="landlord" color="primary" />}
              label="I am a landlord or industry professional"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 3,
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "10px",
                backgroundColor: "#0033cc",
                fontSize: "16px",
              }}
              onClick={onSignup}
            >
              Submit
            </Button>
          </TabPanel>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Navbar;
