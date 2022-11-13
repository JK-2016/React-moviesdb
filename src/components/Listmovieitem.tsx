import Imovie from "../models/Imovie";
import {Card,Button} from "react-bootstrap";
import FavIcon from "../utils/FavouriteIcon";
import { Link ,useLocation} from "react-router-dom";
interface Props{
    movieItem:Imovie;
}

const MovieItem=({movieItem}:Props)=>{
  //Setting path for individual Card display
  var path = useLocation().pathname;
  if(movieItem.id!=undefined){
      path = path+'/'+movieItem.id;
  }
  else{
    //  path = path+'?title='+movieItem.title+'&?year='+movieItem.year;
     path = path+'/'+movieItem.title+'/'+movieItem.year;
       
  }
  return(
    //  <Link to = {useLocation().pathname +'/'+ movieItem.id}>
      
      <Card>
        <Link to = {path} className="mb-0">
        <Card.Img variant="top" src={movieItem.posterurl} style={{ height: '50vh', width: '100%', objectFit: 'cover' }} />
        <Card.Body className="py-0">
          <Card.Title className="py-0" style={{textAlign: "center"}}>{movieItem.title}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Link>
        <div className="py-0" style={{textAlign: "center"}}>
            Add to Favourites
            <FavIcon></FavIcon>
          </div>
      </Card>
    // </Link>
     

 
  );

};

export default MovieItem;