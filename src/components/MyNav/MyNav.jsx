import { Nav, Button, FormControl, Form, Navbar } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import "../MyNav/MyNav.css";

const { Component } = require("react");
const URL =
  "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=84d479210d7f42b2a132ddc058f6c7d5";

class MyNav extends Component {
  state = { searchString: "" };

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.searchBar(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  loadArticles = (category) => {
    this.props.loadArticles(category);
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <>
        <Navbar
          bg=""
          expand="lg"
          className="text-dark d-flex justify-content-center"
        >
          <Navbar.Brand href=""></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className="nav__link subscribe">
                Subscribe
              </Nav.Link>
            </Nav>

            <div className="search__box mr-5 mr-sm-2">
              <input
                className="search__txt mr-sm-2 search"
                type="text"
                aria-label="search"
                aria-describedby="basic-addon1"
                placeholder="Search and press enter"
                onKeyDown={this.searchStringHandler}
                onChange={this.searchStringHandler}
                value={this.state.searchString}
              />

              <BsSearch className="search__btn" />
            </div>
            {/*   <input
              style={{}}
              placeholder="Search and press enter"
            <input
              placeholder="Search for an article"
              aria-label="search"
              className="mr-sm-2 search-bar"
              aria-describedby="basic-addon1"
              onKeyDown={this.searchStringHandler}
              onChange={this.searchStringHandler}
              value={this.state.searchString}

            /> */}
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <div>
          <Navbar bg="" expand="lg" className="navigation">
            <Nav className="Navigation">
              {this.props.categories.map((category, i) => (
                <Nav.Link
                  key={i}
                  className="nav__link mr-5 ml-4"
                  onClick={() => this.loadArticles(category)}
                >
                  <h6>{this.capitalizeFirstLetter(category)}</h6>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}
export default MyNav;
