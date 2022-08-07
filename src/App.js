import {Route} from "react-router-dom";
import axios from "axios";
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//Components
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

 function App() {
   return (
     <>
     <DefaultHOC path ="/" exact component= {HomePage}/>
     <MovieHOC path ="/movie/:id" exact component= {Movie}/>
     </>
   );
 };
export default App;
