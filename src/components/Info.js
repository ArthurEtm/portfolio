import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import me from "../assets/images/Asset4.svg";
import Typed from "react-typed";
import Draggy from "./Draggy";
export default function Info() {
  return (
    <div className="info">
      <Container>
        <Row>
          <Col>
            <img src={me} alt="logo" />
          </Col>
          <Col className="hacked-typed">
            <Typed
              strings={[
                "Here you can find anything",
                "Maybe youll find a new developer",
                "Maybe you'll find inspiration",
                "Maybe not"
              ]}
              typeSpeed={40}
            />

            <Draggy />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
