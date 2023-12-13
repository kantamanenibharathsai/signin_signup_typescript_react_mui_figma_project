import { Component } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
// import { spacing } from '@mui/system';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import facebookIcon from "../assets/facebook.png"
import appleIcon from "../assets/apple.png"
import googleIcon from "../assets/google.png"

import signInStyle from "./sign-in.styles";
import image from "../assets/Saly-14.png";
import { Link } from "react-router-dom";

interface CounterState {
  isPasswordVisible: boolean;
}

class SignIn extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isPasswordVisible: false,
    };
  }

  passwordHandler = () => {
    this.setState((prevSate) => ({
      isPasswordVisible: !prevSate.isPasswordVisible,
    }));
  };


  render() {
    const {isPasswordVisible} = this.state

    return (
      <Box sx={signInStyle.mainContainer}>
         <Typography
            sx={signInStyle.yourLogoHeading}
            component="h1"
            variant="h1"
          >
            Your Logo
          </Typography>
        <Box sx={signInStyle.responsiveContainer}>
          <Box sx={signInStyle.bodyContainer}>
            <Box sx={signInStyle.leftContainer}>
              <Box sx={signInStyle.textContainer}>
                <Typography
                  sx={signInStyle.signInToHeading}
                  component="h2"
                  variant="h2"
                >
                  Sign in to
                </Typography>
                <Typography
                  sx={signInStyle.loremIpsumParagraph}
                  paragraph={true}
                >
                  Lorem ipsum is simply
                </Typography>
                <Box sx={signInStyle.textImageContainer}>
                  <Box sx={{ mt: 5 }}>
                    <Typography
                      sx={signInStyle.accountRegisterParagraph}
                      paragraph={true}
                    >
                      If you don’t have an account register
                    </Typography>
                    <Typography
                      sx={{
                        ...signInStyle.accountRegisterParagraph,
                        m: "0px",
                        marginTop: "0px",
                      }}
                      paragraph={true}
                    >
                      You can

                      <Box sx={signInStyle.spanRegisterHere} component="span">
                        <Link to='/signup' style={{textDecoration: "none"}}>Register here!</Link>
                      </Box>
                    </Typography>
                  </Box>
                  <Box
                    component="img"
                    sx={signInStyle.image}
                    src={image}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={signInStyle.RightContainer}>
                <Box  >
              <Typography sx={signInStyle.signInHeading} variant="h2">
                Sign in
              </Typography>
              <Box sx={{width: {lg: "370px"}}}>
                <TextField
                  variant="standard"
                  placeholder="Enter email or user name"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  id="my-input"
                  type="text"
                  sx={signInStyle.inputElement}
                />
                <Box
                  sx={{
                    ...signInStyle.inputElement,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    mt: 3,
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    variant="standard"
                    placeholder="Password"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    id="my-input"
                    type={isPasswordVisible ? "text" : "password"}
                    sx={{ border: "none", width: "88%" }}
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
                <Typography
                  sx={signInStyle.forgotPasswordText}
                  paragraph={true}
                >
                  Forgot password?
                </Typography>
                <Button sx={signInStyle.loginButton} variant="contained">Login</Button>
              </Box>
              <Typography paragraph={true} sx={signInStyle.continueWithText}>or continue with</Typography>
              <Box sx={signInStyle.iconsContainer}>
                    <Box sx={signInStyle.icon} component="img" src={facebookIcon} alt="facebookIcon"/>
                    <Box sx={signInStyle.icon} component="img" src={appleIcon} alt="appleIcon"/>
                    <Box sx={signInStyle.icon} component="img" src={googleIcon} alt="googleIcon"/>
              </Box>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SignIn;
