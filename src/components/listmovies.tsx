
import {Alert,Row,Col} from "react-bootstrap";
import { useEffect,useState } from "react";
import Imovie from "../models/Imovie";
import MovieItem from "./Listmovieitem";

// type props={
//     getmovies():Imovie[];
// }
const ListMovies=(props: { getmovies: () => any; })=>{
    const [movies, setMovies] = useState<Imovie[]>([]);
    const [error, setError] = useState<Error | null>(null);

   useEffect(
      ()=>{
            const fetchHepler = async() =>{
                try{
                    const data =  await props.getmovies();
                    setMovies(data);
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

    return(
           <> 
            {
                error && (
                    <Alert variant="danger"> error.message</Alert>
                )
            }
            {
                movies.length !=0 &&(
                    <Row xs={2} md={3} lg={6}>
                        {
                            movies.map(
                                movie=> (
                                    <Col key={movie.title+movie.year} className="d-flex my-2">
                                          <MovieItem movieItem={movie} />
                                    </Col>
                                )
                            )
                        }
                    </Row>       
                )

                
            }
           
            </>
    )
};
export default ListMovies;