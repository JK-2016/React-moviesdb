
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Imovie from "../../models/Imovie";
import {getMovieById, getMovieByTitle} from "../../services/getmovies";
import {Alert, Row, Col, Image} from "react-bootstrap";

interface RouteParams{
    group:string,
    id: string,
    title: string,
    year: string
}
//http://localhost:3001/top-rated-india?title=Anand&year=1971
const MovDetails=()=>{
    const {group} = useParams<{id:string, group:string}>();
    const {id} = useParams<{id:string, group:string}>();
    const {title, year} = useParams<{title:string, year:string}>();
    var currpath:string;
    // group = group?.replaceAll('_','-');
    console.log("group:"+group);
    console.log("title:"+title);
    console.log("year:"+year);
    let lc = useLocation().pathname.indexOf('/');
    currpath = useLocation().pathname.substring(0,lc+1)+group;
    
    const [movie, setMovie] = useState<Imovie | null >(null);
    const [error, setError] = useState<Error | null>(null);

   useEffect(
      ()=>{
            const fetchHepler = async() =>{
                try{
                    if(id!=undefined){
                        const data =  await getMovieById(id!,group!);
                        setMovie(data);
                       
                       
                    }
                    else{
                        const data =  await getMovieByTitle(title!,year!,group!);
                       setMovie(data[0]);   
                    //    console.log("title From data;"+data.title);  
                    }
                }
                catch(error)
                {
                    setError(error as Error);
                }   
                
             }
             fetchHepler();
      },
      []
   );   
   console.log(movie?.contentRating)

    return (
        <>
            <Link to = {currpath} className="m-3">Back to Home</Link>
    
            {
                error && (
                    <Alert variant="danger"> error.message</Alert>
                )
            }
            {   
                movie && (
                    <>
                    <Row className="m-3">
                        <Col xs={12} lg ={3} >
                           <Image src= {movie.posterurl} fluid className="photo"></Image>
                        </Col>
                        <Col xs={12} lg ={9}>
                             <h1> {movie.title}({movie.year})</h1>
                             <Row>
                             <Col xs={5} lg={3}>
                                   <div>IMDB Rating</div>
                                   <div>Content Rating</div>
                                   <div>Average Rating</div>
                                   <div>Duration</div>
                                   <div>Genres</div>
                                   <div>Actors</div>
                                   <div>Release Date</div>
                                   <div>Story Line</div>
                                   
                             </Col>
                             <Col xs={7} lg={5}>

                                   <div>{movie.imdbRating}</div>
                                                                      
                                  {movie.contentRating}&&(
                                    <div>{movie.contentRating}</div> )
                                  {!movie.contentRating}&&(
                                    <div></div> )

                                   
                                   <div>{movie.averageRating}</div>
                                   <div>{movie.duration}</div>
                                   <div>{movie.genres.join(",")}</div>
                                   <div>{movie.actors.join(",")}</div>
                                   <div>{movie.releaseDate}</div>
                                   <div>{movie.storyline}</div>
                                   
                             </Col>

                             </Row>
                            
                        </Col>
                    </Row>
                    </>
                )
                
            }
        </>

    )
};
 export default MovDetails;

   