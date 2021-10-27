import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Container className="mainContainer">
        <h3 className="center">Dictionary</h3>
        <Row>
          <Col>
            <Form.Label>Search a word</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter word"
              />
              <Button variant="dark" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
