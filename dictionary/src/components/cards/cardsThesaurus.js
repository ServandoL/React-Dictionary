import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards(props) {
  const [antonyms, setAntonyms] = useState([]);
  const [synonyms, setSynonyms] = useState([]);

  useEffect(() => {
    let syn = props?.synonyms;
    let ant = props?.antonyms;
    let synTemp = [];
    let antTemp = [];

    if (syn) {
      for (const synArray of syn) {
        for (const word of synArray) {
          synTemp.push(word);
        }
      }
    }
    if (ant) {
      for (const antArray of ant) {
        for (const word of antArray) {
          antTemp.push(word);
        }
      }
    }

    setAntonyms(antTemp);
    setSynonyms(synTemp);
  }, [props?.synonyms, props?.antonyms]);

  const renderSynonyms = synonyms?.map((element, index) => {
    return (
      <ListGroupItem key={index}>
        <strong>{index + 1}</strong>: {element ? element : "N/A"}
      </ListGroupItem>
    );
  });

  const renderAntonyms = antonyms?.map((element, index) => {
    return (
      <ListGroupItem key={index}>
        <strong>{index + 1}</strong>: {element ? element : "N/A"}
      </ListGroupItem>
    );
  });

  return (
    <Col>
      <Card className="cardsCenter" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title className="center-text">{props.word}</Card.Title>
          <Card.Subtitle className="center-text">
            {props.synonyms && "Synonyms"}
            {props.antonyms && "Antonyms"}
          </Card.Subtitle>
          <hr />
          {synonyms && (
            <ListGroup className="list-group-flush">{renderSynonyms}</ListGroup>
          )}
          {antonyms && (
            <ListGroup className="list-group-flush">{renderAntonyms}</ListGroup>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
