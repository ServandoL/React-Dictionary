import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import Alert from 'react-bootstrap/Alert';

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <Container className="mainContainer">
          <Alert variant="danger">404 Not Found</Alert>
      </Container>
    </div>
  );
}
