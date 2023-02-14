
import {Row, Col} from "react-bootstrap";
import SingleBook from "./SingleBook";

const Booklist = (props) => {
    return(
        <>
        <Row>
            {props.book.map((e)=>
             <Col>
             <SingleBook
             img={e.img}
             title={e.title}
             />
             </Col>
            )}
           
        </Row>
        </>
    )
}
export default Booklist;