import React from "react";

//components
import MovieNavbar from "../components/Navbar/movieNavbar.component.js";
const MovieLayout = (props) => {
  return (
    <div>
      <MovieNavbar />
      {props.children}
    </div>
  );
};

export default MovieLayout;
