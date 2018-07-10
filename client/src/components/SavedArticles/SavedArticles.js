import React from "react";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const SavedArticles = props => (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-8 sm-9">
                    <h3 href="noreferrer noopener" target="_blank" href={props.url}>
                        {props.title}
                    </h3>
                    <p>{props.synopsis}</p>
                    <h4>{props.date}</h4>
                </Col>
                <button>delete</button>
            </Row>
        </Container>
    </li>
);
