import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "../components/navbar/nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Cards from "../components/cards/cardsThesaurus";
import axios from "axios";

export default function Thesaurus() {
  const [searchWord, setSearchWord] = useState("");
  const [toggleCards, setToggleCard] = useState(false);
  const [pos, setPos] = useState([]);
  const [word, setWord] = useState([]);
  let baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const submit = () => {
    axios.get(baseUrl + searchWord).then(function (response) {
      let posTemp = [];
      let wordTemp = [];

      for (const element of response.data) {
        // console.log('element', element)
        wordTemp.push(element);
        for (const meanings of element.meanings) {
          // console.log('meanings', meanings.partOfSpeech)
          posTemp.push(meanings.partOfSpeech);
        }
      }
      setPos(posTemp);
      setWord(wordTemp);
    })
    setToggleCard(true);
  }

  return (
    <div>
      <Navigation />
      <Container className="mainContainer">
        <h3 className="center dictionary">Thesaurus</h3>
        <Row className="center">
          <Col md={4}>
            <Form.Label>Search a word</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter word"
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

          {toggleCards && pos.includes("noun") && (
            <Cards word={searchWord} pos="noun" />
          )}

          {toggleCards && pos.includes("verb") && (
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
