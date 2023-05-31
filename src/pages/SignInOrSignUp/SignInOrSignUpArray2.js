import "../donateSignUpCSS.css";
import { Link, useParams } from "react-router-dom";
import CompanyLogo from "../../images/Logo.png";
import { Card, Button } from "react-bootstrap";
import React from "react";

const SignInOrSignUpArray2 = () => {
  const { id } = useParams();
  const SignInOrSignUpArray2 = [
    {
      name: "GirlsEdu",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageGirlsEdu",
    },
    {
      name: "ForestationPrjct",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageForestation",
    },
    {
      name: "SaveAralSea",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageSaveAralSea",
    },
    {
      name: "EducationForAll",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageEducation",
    },
    {
      name: "BrightFuture",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageBrightFuture",
    },
    {
      name: "SaveTheOcean",
      data: {
        imageSrc: CompanyLogo,
        header: "SIGN IN",
        title: "Sign in to continue for subscribed donations option",
      },
      buttonURL: "/DonationPageSaveTheOcean",
    },
  ];
  let object = SignInOrSignUpArray2.find((o) => o.name === id);
  if (object == null) {
    object = SignInOrSignUpArray2[0];
    return <h1 className="text-center">404 Page not found.</h1>;
  }
  return (
    <div className="container-fluid" id="container">
      <div className="text-center">
        <img src={object.data.imageSrc} alt="company" id="companyImg"></img>
        <h3 id="signIn">SIGN IN</h3>
        <p className="mt-5" style={{fontWeight: 700}} id="textStyle">Sign in to continue for subscribed donations option</p>
        <div id="input">
          <input className="text-center my-3"  type="text" id="inputStyle" placeholder="Username"/>
          <br></br>
          <input className="text-center my-3" type="password" id="inputStyle" placeholder="Password"/>
        </div>
        <Button href={object.buttonURL} id="loginButton">
          Login
        </Button>
        <p style={{textDecoration: 'underline'}} id="textStyle">Click here if you forgot your password</p>
        <div id="noAccount">
          <p id="textStyle">
            If you dont have an account yet, click here to sign up to Meliora
            Impact Platform
          </p>
          <button id="subscribe" className="btn btn-light">
            Subscribe to Meliora Impact
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInOrSignUpArray2;

const BtnStyle = {
  backgroundColor: "#0D2E6E",
  fontSize: 18,
  width: 144,
  height: 45,
  borderRadius: 10,
};
