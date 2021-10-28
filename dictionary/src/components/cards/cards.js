import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards() {
    return (
        <Row xs={1} md={2}>
            <Col>
                <Card className="cardsCenter" style={{ width: '30rem' }}>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Title>Word Title</Card.Title>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    <p>Part of speech: noun</p>
                                    Definition 1: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Definition 2: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Definition 3: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Example: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="cardsCenter" style={{ width: '30rem' }}>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Title>Word Title</Card.Title>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    <p>Part of speech: noun</p>
                                    Definition 1: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Definition 2: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Definition 3: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Card.Text>
                                    Example: Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            {/* <Col>
                <Card className="cardsCenter" style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Word Title</Card.Title>
                        <Card.Text>
                            Definition 1: Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col> */}
        </Row>
    );
}