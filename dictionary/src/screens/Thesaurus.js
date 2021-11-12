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
  // const [meanings, setMeanings] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [word, setWord] = useState([]);
  let baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  const submit = () => {
    axios.get(baseUrl + searchWord).then(function (response) {
      let synonymsTemp = [];
      let antonymsTemp = [];
      let wordTemp = [];

      for (const element of response.data) {
        // console.log('element', element)
        wordTemp.push(element);
        for (const meanings of element.meanings) {
          // console.log('each meaning',meanings)
          for (const definition of meanings.definitions) {
            // console.log(meanings.partOfSpeech)
            // console.log('synonyms',definition.synonyms)
            if (definition.synonyms.length > 0) {
              synonymsTemp.push(definition.synonyms)
            }
            if (definition.antonyms.length > 0) {
              antonymsTemp.push(definition.antonyms)
            }
            

          }
        }
      }
      // setMeanings(meaningsTemp);
      // console.log('array of synonyms',synonymsTemp)
      // console.log('array of antonyms', antonymsTemp)
      setSynonyms(synonymsTemp);
      setAntonyms(antonymsTemp);
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

          {/* {toggleCards && meanings.includes("noun") && (
            <Cards word={searchWord} pos="noun" synonyms={word} />
          )}

          {toggleCards && meanings.includes("verb") && (
            <Cards word={searchWord} pos="verb" synonyms={word} />
          )} */}

          {toggleCards && antonyms.length > 0 && (
            <Cards word={searchWord} antonyms={antonyms} />
          )}

          {toggleCards && synonyms.length > 0 && (
            <Cards word={searchWord} synonyms={synonyms} />
          )}

        </Row>
        <div className="footer">
          <span>https://dictionaryapi.dev/</span>
        </div>
      </Container>

    </div>
  );
}
