import "./MyJumbotron.css";
import { Container, Jumbotron } from "react-bootstrap";
import { Component } from "react";

class MyJumbotron extends Component {
  render() {
    return (
      
        <Jumbotron className="jb bg-dark">
          
            <h1>{this.props.articles[0].title}</h1>
            <p>
              {this.props.articles[0].description}
            </p>
            <a href = {this.props.articles[0].url}>Continue reading...</a>
         </Jumbotron>
     
    );
  }
}

export default MyJumbotron;
