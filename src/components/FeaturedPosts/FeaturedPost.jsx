import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./FeaturedPosts.css";

import { format } from "date-fns";

export default class FeaturedPost extends Component {
  render() {
    return (
      <div>
        <Card className="article-card p-0">
          <Row className="">
            <Col>
              <Card.Body className="text-left">
                <p className="text-primary text-small font-weight-bold">
                  {this.props.article.source.name}
                </p>
                <Card.Title className="font-weight-bold article-title m-0">
                  {this.props.article.title}
                </Card.Title>
                <p className="text-muted ">
                  {format(new Date(this.props.article.publishedAt), "MMM d")}
                </p>
                <Card.Text className="article-description">
                  {this.props.article.description}
                </Card.Text>
                <a
                  className="continue"
                  variant="primary"
                  href={this.props.article.url}
                >
                  Continue reading
                </a>
              </Card.Body>
            </Col>

            <Col lg={5}>
              <Card.Img
                style={{ width: "200px", height: "100px" }}
                className=" article-image img-fluid rounded-start h-100"
                variant="top"
                src={this.props.article.urlToImage}
              />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
