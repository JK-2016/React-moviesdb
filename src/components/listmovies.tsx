
import { Alert, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Imovie from "../models/Imovie";
import MovieItem from "./Listmovieitem";
import { useLocation } from "react-router-dom";

// type props={
//     getmovies():Imovie[];
// }
const ListMovies = (props: { getmovies: () => any; query: string; path: string }) => {
    const [movies, setMovies] = useState<Imovie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Imovie[]>([]);
    const [error, setError] = useState<Error | null>(null);
    // const [path,setPath] = useState<string>("");

    // const [query, setquery] = useState<string>("");
    // console.log("List:", props.query);
    // setquery(props.query);

    useEffect(
        () => {
            //  setquery(props.query);
            const fetchHepler = async () => {
                try {
                    const data = await props.getmovies();
                    // console.log("data:",data);
                    setMovies(data);
                    setFilteredMovies(data);
                    console.log("movies:", movies);
                }
                catch (error) {
                    setError(error as Error);
                }
            }
            fetchHepler();
        },
        [props.path]
    );
    useEffect(() => {
        const helper = async () => {
            console.log("queryprops:", props.query);
            if (movies) {
                let filtered = props.query.length === 0
                    ? movies
                    : movies.filter(movie =>
                        movie.title.toLowerCase().includes(props.query.toLowerCase())
                    );
                setFilteredMovies(filtered);
                // console.log("Filtered:",filtered);
                console.log("filteredMovies:", filteredMovies);

                // setMovies(filtered);
            }
        }
        helper();
    }, [props.query, props.path]);

    return (
        <>
            {
                error && (
                    <Alert variant="danger"> error.message</Alert>
                )
            }
            {
                filteredMovies.length !== 0 && (
                    <Row xs={2} md={3} lg={6}>
                        {
                            filteredMovies.map(
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