
import { getMovies } from "../../../services/getmovies";
import ListMovies from "../../listmovies";

const Movies=()=>{
    return(
           <>
            <h1>
               Top Rated Movies
            </h1>
            <ListMovies getmovies={getMovies}/>
            </>     
    )
};
export default Movies;