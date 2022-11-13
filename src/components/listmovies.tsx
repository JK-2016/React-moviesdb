
import { Alert, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Imovie from "../models/Imovie";
import MovieItem from "./Listmovieitem";

// type props={
//     getmovies():Imovie[];
// }
const ListMovies = (props: { getmovies: () => any; query: string }) => {
    const [movies, setMovies] = useState<Imovie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Imovie[]>([]);
    const [error, setError] = useState<Error | null>(null);
    // const [query, setquery] = useState<string>("");
    console.log("List:", props.query);
    useEffect(
        () => {
            //  setquery(props.query);
            const fetchHepler = async () => {
                try {
                    const data = await props.getmovies();
                    console.log("data:",data);
                    setMovies(data);
                    console.log("movies:",movies);
                }
                catch (error) {
                    setError(error as Error);
                }
            }
            fetchHepler();
        },
        []
    );
    useEffect(() => {
        if (movies) {
            let filtered = !props.query
             ? movies
             : movies.filter(movie =>
                movie.title.toLowerCase().includes(props.query.toLowerCase())
            );
            // setFilteredMovies(filtered);
            setMovies(filtered);
        }
    }, [props.query]);

    return (
        <>
            {
                error && (
                    <Alert variant="danger"> error.message</Alert>
                )
            }
            {
                movies.length != 0 && (
                    <Row xs={2} md={3} lg={6}>
                        {
                            movies.map(
                                movie => (
                                    <Col key={movie.title + movie.year + movie.id + movie.releaseDate} className="d-flex my-2">
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