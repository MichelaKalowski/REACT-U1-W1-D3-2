import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => (
  <Card className="SingleBook">
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>title:{props.title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
export default SingleBook;
