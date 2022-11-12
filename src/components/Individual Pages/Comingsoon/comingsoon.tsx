// import { getComingSoon } from "../../../services/getmovies";
// import {Alert} from "react-bootstrap";
// import { useEffect,useState } from "react";
// import Imovie from "../../../models/Imovie";


// const ComingSoon=()=>{
//     const [movies, setMovies] = useState<Imovie[]>([]);
//     const [error, setError] = useState<Error | null>(null);

//    useEffect(
//       ()=>{
//             const fetchHepler = async() =>{
//                 try{
//                     const data =  await getComingSoon();
//                     setMovies(data);
//                 }
//                 catch(error)
//                 {
//                     setError(error as Error);
//                 }   
//              }
//              fetchHepler();
//       },
//       []
//    );

//     return(
//            <>
           
//             <h1>
//                 ComingSoon
//             </h1>
//             {
//                 error && (
//                     <Alert variant="danger"> error.message</Alert>
//                 )

//             }
//             {
//                 movies.length !=0 &&(
//                     movies.map(
//                         movie=> (
//                             <div>
//                                 {movie.title}
//                             </div>
//                         )
//                     )
//                 )

                
//             }
           
//             </>
//     )
// };
// export default ComingSoon;

import { getComingSoon } from "../../../services/getmovies";
import ListMovies from "../../listmovies"
const ComingSoon=()=>{
    return(
        <>
         <h1>
             Coming Soon
         </h1>
         <ListMovies getmovies={getComingSoon}/>
         </>     
 )
};
export default ComingSoon;