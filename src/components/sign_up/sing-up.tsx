import { Component, ChangeEvent } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import facebookIcon from "../assets/facebook.png";
import appleIcon from "../assets/apple.png";
import googleIcon from "../assets/google.png";

import signUpStyle from "./sign-up.styles";
import image from "../assets/Saly-14.png";
import { Link } from "react-router-dom";
import db from "../../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface CounterState {
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
  formData: {
    email: string;
    userName: string;
    contactNumber: number | string;
    password: string;
    confirmPassword: string;
  };
}

class SignUp extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      formData: {
        email: "",
        userName: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  passwordHandler = () => {
    this.setState((prevSate) => ({
      isPasswordVisible: !prevSate.isPasswordVisible,
    }));
  };

  confirmPasswordHandler = () => {
    this.setState((prevSate) => ({
      isConfirmPasswordVisible: !prevSate.isConfirmPasswordVisible,
    }));
  };

  onChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  onSubmitEventHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.formData);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...this.state.formData,
        contactNumber: +this.state.formData.contactNumber,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  render() {
    const { isPasswordVisible, isConfirmPasswordVisible, formData } =
      this.state;
    const { email, userName, contactNumber, password, confirmPassword } =
      formData;
    return (
      <Box sx={signUpStyle.mainContainer}>
        <Typography
          sx={signUpStyle.yourLogoHeading}
          component="h1"
          variant="h1"
        >
          Your Logo
        </Typography>
        <Box sx={signUpStyle.responsiveContainer}>
          <Box sx={signUpStyle.bodyContainer}>
            <Box sx={signUpStyle.leftContainer}>
              <Box sx={signUpStyle.textContainer}>
                <Typography
                  sx={signUpStyle.signInToHeading}
                  component="h2"
                  variant="h2"
                >
                  Sign Up to
                </Typography>
                <Typography
                  sx={signUpStyle.loremIpsumParagraph}
                  paragraph={true}
                >
                  Lorem Ipsum is simply
                </Typography>
                <Box sx={signUpStyle.textImageContainer}>
                  <Box sx={{ mt: 5 }}>
                    <Typography
                      sx={signUpStyle.accountRegisterParagraph}
                      paragraph={true}
                    >
                      If you already have an account
                    </Typography>
                    <Typography
                      sx={{
                        ...signUpStyle.accountRegisterParagraph,
                        m: "0px",
                        marginTop: "0px",
                      }}
                      paragraph={true}
                    >
                      You can
                      <Box sx={signUpStyle.spanRegisterHere} component="span">
                        <Link to="/" style={{ textDecoration: "none" }}>
                          Login here!
                        </Link>
                      </Box>
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    sx={signUpStyle.image}
                    src={image}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={signUpStyle.RightContainer}>
              <Box component="form" onSubmit={this.onSubmitEventHandler}>
                <Typography sx={signUpStyle.signInHeading} variant="h2">
                  Sign Up
                </Typography>
                <Box sx={{ width: { lg: "370px" } }}>
                  <TextField
                    variant="standard"
                    placeholder="Enter email"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="email"
                    sx={signUpStyle.inputElement}
                    name="email"
                    value={email}
                    onChange={this.onChangeEventHandler}
                  />
                  <TextField
                    variant="standard"
                    placeholder="Create User name"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="text"
                    sx={signUpStyle.inputElement}
                    name="userName"
                    value={userName}
                    onChange={this.onChangeEventHandler}
                  />
                  <TextField
                    variant="standard"
                    placeholder="Contact number"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    type="number"
                    sx={signUpStyle.inputElement}
                    name="contactNumber"
                    value={contactNumber}
                    onChange={this.onChangeEventHandler}
                  />
                  <Box
                    sx={{
                      ...signUpStyle.inputElement,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant="standard"
                      placeholder="Password"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      type={isPasswordVisible ? "text" : "password"}
                      sx={{ border: "none", width: "88%" }}
                      name="password"
                      value={password}
                      onChange={this.onChangeEventHandler}
                    />
                    {isPasswordVisible ? (
                      <VisibilityIcon
                        sx={{ mr: 0.5, color: "#A7A3FF", fontSize: "20px" }}
                        onClick={this.passwordHandler}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ mr: 0.5, color: "#A7A3FF", fontSize: "20px" }}
                        onClick={this.passwordHandler}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      ...signUpStyle.inputElement,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      variant="standard"
                      placeholder="Confirm Password"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      sx={{ border: "none", width: "88%" }}
                      value={confirmPassword}
                      onChange={this.onChangeEventHandler}
                      name="confirmPassword"
                    />
                    {isConfirmPasswordVisible ? (
                      <VisibilityIcon
                        sx={{ mr: 0.5, color: "#A7A3FF", fontSize: "20px" }}
                        onClick={this.confirmPasswordHandler}
                      />
                    ) : (
                      <VisibilityOffIcon
                        sx={{ mr: 0.5, color: "#A7A3FF", fontSize: "20px" }}
                        onClick={this.confirmPasswordHandler}
                      />
                    )}
                  </Box>
                  {/* <Typography
                    sx={signUpStyle.forgotPasswordText}
                    paragraph={true}
                  >
                    Forgot password ? 
                  </Typography> */}
                  <Button
                    type="submit"
                    sx={signUpStyle.loginButton}
                    variant="contained"
                  >
                    Register
                  </Button>
                </Box>
                <Typography paragraph={true} sx={signUpStyle.continueWithText}>
                  or continue with
                </Typography>
                <Box sx={signUpStyle.iconsContainer}>
                  <Box
                    sx={signUpStyle.icon}
                    component="img"
                    src={facebookIcon}
                    alt="facebookIcon"
                  />
                  <Box
                    sx={signUpStyle.icon}
                    component="img"
                    src={appleIcon}
                    alt="appleIcon"
                  />
                  <Box
                    sx={signUpStyle.icon}
                    component="img"
                    src={googleIcon}
                    alt="googleIcon"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SignUp;
