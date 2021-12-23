import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import { Container, Alert } from "react-bootstrap";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import MyJumbotron from "./components/Jumbotron/MyJumbotron";
import { Component } from "react";
import BlogList from "./components/SampleBlog/BlogList";

class App extends Component {
  state = {
    blogs: null,
    searchResults: [],
    loading: true,
    error: false,
    country: "us",
  };
  apikey = `&apiKey=3e3bd1d7ddf54a268dca59e4b48107bc`;
  url = `https://newsapi.org/v2/top-headlines?country=us&category=`;
  componentDidMount = () => {
    this.loadArticles("business", "in");
  };
  /*  componentDidUpdate = (prevProps) => {

  }; */
  loadArticles = async (category, country) => {
    console.log("load articles");
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3e3bd1d7ddf54a268dca59e4b48107bc`;
    try {
      const resp = await fetch(URL);
      if (resp.ok) {
        const data = await resp.json();
        console.log(data);

        this.setState({
          blogs: data.articles,
          searchResults: [],
        });
      } else {
        this.setState({ error: true });
        console.log("fetch failed");
      }
    } catch (error) {
      this.setState({ loading: false });
      this.setState({ error: true });
      console.log(error);
    }
  };

  searchBar = async (searchString) => {
    if (searchString === "") {
      this.setState({ error: false, searchResults: [] }, () => {
        this.loadArticles("business", "us");
      });
    } else {
      try {
        const response = await fetch(this.url + searchString + this.apikey);
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          this.setState({ searchResults: data.articles, error: false });
          console.log("search", this.state.searchResults);
        } else {
          this.setState({ error: true });
        }
      } catch (error) {
        this.setState({ error: true });
        console.log(error);
      }
    }
  };

  render() {
    return (
      <Container className="App">
        <MyNav
          categories={[
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
          ]}
          countries={["us", "ua", "de", "in", "it", "au"]}
          loadArticles={this.loadArticles}
          searchBar={this.searchBar}
        />
        {this.state.error && (
          <Alert variant="danger" className="text-center">
            An error has occurred, please try again!
          </Alert>
        )}
        {this.state.searchResults?.length > 0 && (
          <>
            <MyJumbotron
              loading={this.state.loading}
              articles={this.state.searchResults}
            />
            <FeaturedPosts
              loading={this.state.loading}
              articles={this.state.searchResults}
            />
            <BlogList
              countries={["us", "ua", "de", "in", "it", "au"]}
              loadArticles={this.loadArticles}
              loading={this.state.loading}
              articles={this.state.searchResults}
            />
          </>
        )}
        {!this.state.error && !this.state.searchResults?.length > 0 && (
          <>
            {this.state.blogs && (
              <MyJumbotron
                loading={this.state.loading}
                articles={this.state.blogs}
              />
            )}
            {this.state.blogs && (
              <FeaturedPosts
                loading={this.state.loading}
                articles={this.state.blogs}
              />
            )}
            {this.state.blogs && (
              <BlogList
                loading={this.state.loading}
                articles={this.state.blogs}
              />
            )}
          </>
        )}
      </Container>
    );
  }
}

export default App;
