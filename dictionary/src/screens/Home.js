import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Cards from "../components/cards/cards";
import axios from "axios";

export default function Home() {
  const [searchWord, setSearchWord] = useState("");
  const [toggleCards, setToggleCard] = useState(false);
  const [pos, setPos] = useState([]);
  const [definition, setDefinition] = useState([]);
  let baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const submit = () => {
    axios.get(baseUrl + searchWord).then(function (response) {
      let posTemp = [];
      let definitionTemp = [];
      // console.log('response.data', response.data)
      for (const element of response.data) {
        // console.log('element', element)
        for (const meanings of element.meanings) {
          // console.log('meanings', meanings.partOfSpeech)
          posTemp.push(meanings.partOfSpeech);
          // console.log('definitions', meanings.definitions[0].definition);
          definitionTemp.push(meanings.definitions);
        }
      }
      // console.log(posTemp);
      setPos(posTemp);
      console.log(definitionTemp);
      setDefinition(definitionTemp);
    });
    setToggleCard(true);
  };


  return (
    <div>
      <Navigation />
      <Container className="mainContainer">
        <h3 className="center dictionary">Dictionary</h3>
        <Row className="center">
          <Col md={4}>
            <Form.Label>Search a word</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="enter word"
                value={searchWord}
                onChange={handleChange}
              />
              <Button variant="dark" id="button-addon2" onClick={submit}>
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row className="center">

          {/* {toggleCards && pos.includes("noun") && (
            console.log("noun"),
            <Cards word={searchWord} pos="noun" definition={definition[0]} />
          )}

          {toggleCards && pos.includes("verb") && (
            console.log("verb"),
            <Cards word={searchWord} pos="verb" definition={definition[1]} />
          )} */}

          {toggleCards && pos.includes("noun") && (
            console.log("noun"),
            <Cards word={searchWord} pos="noun" definition={definition} />
          )}

          {toggleCards && pos.includes("verb") && (
            console.log("verb"),
            <Cards word={searchWord} pos="verb" />
          )}

        </Row>
        <div className="footer">
          <span>https://dictionaryapi.dev/</span>
        </div>
      </Container>
    </div>
  );
}
