
import { useState } from "react";
import { getComingSoon } from "../../../services/getmovies";
import ListMovies from "../../listmovies"
import Searchbar from "../../Menu/searchbar";
const ComingSoon=(props:{query: string})=>{
    console.log(props.query);
    // const [query, setquery] = useState<string>("");
    // setquery(props.query);
    return(
        <>
         <h1>
             Coming Soon
         </h1>

         <ListMovies getmovies={getComingSoon}  query={props.query}/>
         </>     
 )
};
export default ComingSoon;