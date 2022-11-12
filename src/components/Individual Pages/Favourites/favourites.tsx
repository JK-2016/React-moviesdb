// const Favourites=()=>{
//     return(
//            <>
           
//             <h1>
//                 Favourites
//             </h1>
           
//             </>
//     )
// };
// export default Favourites;
import { getFavourites} from "../../../services/getmovies";
import ListMovies from "../../listmovies";

const Favourites=()=>{
    return(
           <>
            <h1>
               Favourites
            </h1>
            <ListMovies getmovies={getFavourites}/>
            </>     
    )
};
export default Favourites;