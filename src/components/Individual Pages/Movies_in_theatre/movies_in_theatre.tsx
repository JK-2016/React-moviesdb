import { getMoviesInTheatres } from "../../../services/getmovies";
import ListMovies from "../../listmovies";

const Movies_in_theatre=()=>{
    return(
           <>
            <h1>
                Movies in theatres
            </h1>
            <ListMovies getmovies={getMoviesInTheatres}/>
            </>     
    )
};
export default Movies_in_theatre;