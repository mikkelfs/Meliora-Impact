import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <h1>This is the home page</h1>
      <li>
        <Link to={"./pages/NpoSaveTheOcean"}>Save the Ocean</Link>
      </li>
      <li>
        <Link to={"./pages/BrightFuture"}>Bright Future</Link>
      </li>
      <li>
        <Link to={"./pages/EducationForAll"}>Education For All</Link>
      </li>
      <li>
        <Link to={"./pages/Forestation"}>Forestation</Link>
      </li>
      <li>
        <Link to={"./pages/GirlsEdu"}>Girls Edu.</Link>
      </li>
      <li>
        <Link to={"./pages/SaveAralSea"}>Save Aral Sea</Link>
      </li>
    </Container>
  );
}
