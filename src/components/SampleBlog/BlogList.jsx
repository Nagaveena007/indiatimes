import React, { Component } from "react";
import SingleBlog from "./SingleBlog";

class BlogList extends Component {
  render() {
    return (
      <>
        {this.props.articles.slice(0, 4).map((b, i) => (
          <SingleBlog key={i} articles={b} />
        ))}
      </>
    );
  }
}

export default BlogList;
