import React from "react";
import Card from "./Card";
import { Container, Row } from 'reactstrap';
function CardUI(props) {
  return (
    <Container>
      <Row md="3" col="1" sm="2">
        <Card name={"Lê Quang Đông"}/>
        <Card name={"Lê Hoàng Vũ"}/>
        <Card name={"Đỗ Trọng Khôi"}/>
      </Row>
    </Container>
  );
}

export default CardUI;
