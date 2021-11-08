import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";

export default function Cards(props) {
    const [result, setResult] = useState({});

    useEffect(() => {
        let defs = props.definitions;
        if (defs) {
            for (let element of defs) {
                for (let meanings of element.meanings) {
                    // console.log(meanings)
                    if (meanings.partOfSpeech === props.pos) {
                        setResult(meanings);
                    }
                }
            }
        }
    }, [props.definitions, props.pos]);

    // let renderNouns;
    // if (Object.keys(noun).length > 0) {
    //   if (noun.definitions.length > 0) {
    //   renderNouns = noun?.definitions?.map((element, index) => {
    //     return (
    //       <ListGroupItem key={index}>Definition {index+1}: PLACEHOLDER Some quick example text to build on the card title and
    //             make up the bulk of the card's content.</ListGroupItem>
    //     )
    //   })
    // }
    // }
    // Above is the same as below
    const renderDefinitions = result?.definitions?.map((element, index) => {
        return (
            <ListGroupItem key={index}>
                <strong>Definition {index + 1}</strong>: {element.definition}
                <br></br>
                <strong>Example:</strong> {element.example ? element.example : "N/A"}
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
                    <ListGroup className="list-group-flush">{renderDefinitions}</ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}