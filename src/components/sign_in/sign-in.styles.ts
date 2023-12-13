const signInStyle = {
  mainContainer: {
    height: "99vh",
    // border: "5px solid green", 
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },

  yourLogoHeading: {
    fontSize: { xs: "18px", lg: "20px" },
    fontWeight: "600",
    color: "#000000",
    lineHeight: { xs: "27px", lg: "30px" },
    padding: "20px 20px",
    // width: "100%",
    // border: "5px solid green",
  }, 


  responsiveContainer: {
    width: {xs: "90%", md: "75%", lg: "80%"},
    flexGrow: "1",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: {xs: "flex-start", lg: "center"},
    alignItems: "center",
    // border: "5px solid orange",
  },

  bodyContainer: {
    display: "flex",
    // /alignItems: {xs: "strech", lg: ""},
    flexDirection: { xs: "column", lg: "row" },
    // border: "5px solid green",
    gap: "100px",
    width: "100%"
  },

  leftContainer: {  
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // border: "1px solid red",
    width: { xs: "100%", lg: "50%" },
    position: "relative",
    top: "60px",
    left: "0px",
  },

  textContainer: {
    // border: "1px solid orange",
    width: "100%",
  },

  signInToHeading: {
    fontSize: { xs: "26px", lg: "50px" },
    fontWeight: "600",
    color: "#000000",
    lineHeight: { xs: "39px", lg: "75px" },
  },

  loremIpsumParagraph: {
    fontSize: { xs: "21px", lg: "35px" },
    fontWeight: "500",
    marginBottom: 0,
    color: "#000000",
    lineHeight: { xs: "31.5px", lg: "52.5px" },
  },

  textImageContainer: {
    display: "flex",
    padding: "0",
    marginTop: 0,
    alginItems: "center",
    // border: "1px solid pink",
  },

  accountRegisterParagraph: {
    fontSize: { xs: "14px", lg: "16px" },
    fontWeight: "400",
    color: "#000000",
    lineHeight: { xs: "21px", lg: "24px" },
    margin: "0",
    width: "270px",
    marginBottom: "14px"
  },

  spanRegisterHere: {
    color: "#4D47C3",
    marginLeft: "5px",
  },

  image: {
    height: "340px",
    width: "200px",
    // border: "1px solid green",
    alignSelf: "flex-end",
    padding: "0px",
    display: { xs: "none", lg: "inline" },
  },

  RightContainer: {
    // border: "1px solid red",
    width: {  lg: "50%" },
    display: {xs: "block", lg:"flex"},
    justifyContent: {lg: "flex-end"}
  },

  signInHeading: {
    fontSize: { xs: "14px", lg: "30px" },
    fontWeight: "500",
    color: "#000000",
    lineHeight: { xs: "21px", lg: "45px" },
    display: { xs: "none", lg: "block" },
    marginBottom: "20px",
  },

  inputElement: {
    outline: "none",
    padding: "10px 15px",
    width: {xs: "100%"},
    fontSize: "15px",
    backgroundColor: "#F0EFFF",
    fontWeight: "400",
    border: "none",
    borderRadius: "6px",
    color: "#A7A3FF",
    boxSizing: "border-box"
  },

  forgotPasswordText: {
    fontSize: { xs: "13px" },
    fontWeight: "400",
    color: "#B0B0B0",
    lineHeight: { xs: "21px", md: "19.5px" },
    alignSelf: "flex-end",
    marginTop: "12px",
  },

  loginButton: {
    outline: "none",
    cursor: "pointer",
    padding: "10px 0px",
    width: {xs: "100%"},
    fontSize: "15px",
    backgroundColor: "#4D47C3",
    fontWeight: "400",
    border: "none",
    borderRadius: "6px",
    color: "#FFFFFF",
    marginTop: "15px",
    textTransform: "capitalize",
    boxSizing: "border-box"
  },

  continueWithText: {
    fontSize: { xs: "13px" },
    fontWeight: "400",
    color: "#B0B0B0",
    lineHeight: { xs: "21px", md: "19.5px" },
    alignSelf: "flex-end",
    marginTop: "40px",
    textAlign: "center",
    // border: "1px solid red;",
    width: {xs: "100%"},
  },

  iconsContainer: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid yellow",
    width: {xs: "100%"},
    marginTop: "40px",
  },

  icon: {
    width: "27px",
    height: "27px",
  },
};

export default signInStyle;
