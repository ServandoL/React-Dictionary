import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Container className="mainContainer">
        Dictionary
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Row>
      </Container>

    </div>
  );
}
