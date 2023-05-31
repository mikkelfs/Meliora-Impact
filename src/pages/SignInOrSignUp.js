import { Button } from "bootstrap";
import "./donateSignUpCSS.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams,
} from "react-router-dom";

function SignInOrSignUp() {
  return (
    <div className="conatainer-fluid" id="container">
      <div className="text-center">
        <img src="./images/logo.png" alt="company" id="companyImg"></img>
        <h3 id="signIn">SIGN IN</h3>
        <p id="infoText">Sign in to continue for subscribed donations option</p>
        <div id="innput">
          <input type="text" id="username" placeholder="Username"></input>
          <br></br>
          <input type="password" id="password" placeholder="Password"></input>
        </div>
        <button id="loginButton" className="btn btn-primary">
        <Link to={"/DonationPageSaveTheOcean"} className="text-white routing">
          Login
          </Link>
        </button>
        <p>Click here if you forgot your password</p>
        <div id="noAccount">
          <p>
            If you dont have an account yet, click here to sign up to Meliora
            Impact Platform
          </p>
          <button id="subscribe" className="btn btn-light">
            Subscribe to Melliora Impact
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInOrSignUp;
