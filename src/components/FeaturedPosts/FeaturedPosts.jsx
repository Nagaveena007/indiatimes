import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./FeaturedPosts.css";
import FeaturedPost from "./FeaturedPost";

export default class FeaturedPosts extends Component {
  render() {
    return (
      <Container>
       
     
        <Row className="posts">
          <Col lg={6}>
            <FeaturedPost article={this.props.articles[0]} />
          </Col>
          <Col lg={6}>
            <FeaturedPost article={this.props.articles[1]} />
          </Col>
        </Row>
      </Container>
    );
  }
}
