import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards(props) {
    const [result, setResult] = useState({});

    useEffect(() => {
        let syn = props.synonyms;
        if (syn) {
            for (let element of syn) {
                for (let meanings of element.meanings) {
                    // console.log(meanings)
                    if (meanings.partOfSpeech === props.pos) {
                        setResult(meanings);
                    }
                }
            }
        }
    }, [props.synonyms, props.pos]);

    const renderSynonyms = result?.definitions?.map((element, index) => {
        return (
            <ListGroupItem key={index}>
                <strong>Synonyms {index + 1}</strong>: {element.synonyms[0] ? element.synonyms : "N/A"}
                <br></br>
                <strong>Antonyms {index + 1}</strong>: {element.antonyms[0] ? element.antonyms : "N/A"}
            </ListGroupItem>
        );
    });

    return (
        <Col>
            <Card className="cardsCenter" style={{ width: "30rem" }}>
                <Card.Body>
                    <Card.Title className="center-text">{props.word}</Card.Title>
                    <Card.Subtitle className="center-text">Part of Speech: {props.pos}</Card.Subtitle>
                    <hr />
                    <ListGroup className="list-group-flush">{renderSynonyms}</ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}