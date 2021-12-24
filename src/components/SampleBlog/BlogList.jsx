import React, { Component } from "react";
import SingleBlog from "./SingleBlog";
import { Navbar, Nav, Col, Row, Container } from "react-bootstrap";
import "./BlogList.css";

class BlogList extends Component {
  state = {};
  countryArticle = (country) => {
    this.props.countryArticle(country);
  };
  countries = ["us", "ua", "de", "in", "it", "au"];
  countries1 = [
    {
      /* 
      country: "Australia", */
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/46px-Flag_of_Australia_%28converted%29.svg.png",
    },
    {
      /* 
      country: "Argentina", */
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/46px-Flag_of_Argentina.svg.png",
    },
    {
      /* 
      country: "Belgium",
  */ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/45px-Flag_of_Belgium_%28civil%29.svg.png",
    },
    {
      /* 
      country: "China",
    */ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
      /* 
      country: "Canada",
   */ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/46px-Flag_of_Canada_%28Pantone%29.svg.png",
    },
    {
      /* 
      country: "France",
   */ img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/45px-Flag_of_France.svg.png",
    },
    {
      /* 
      country: "Japan",
    */ img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png",
    },
    {
      /* 
      country: "USA",
      */ img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png",
    },
  ];
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={10}>
              {this.props.articles.slice(0, 4).map((b, i) => (
                <SingleBlog key={i} articles={b} />
              ))}
            </Col>
            <Col md={2} className="">
              <Navbar className="">
                <Nav className="navigation">
                  {this.props.countries.map((country, i) => (
                    <>
                      <Nav.Link
                        key={i}
                        className="navigation"
                        onClick={() => this.countryArticle(country)}
                      ></Nav.Link>
                      <img src={this.countries1.img} alt="" />
                    </>
                  ))}
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BlogList;
