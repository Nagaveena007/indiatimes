import { format } from "date-fns";
import "./SampleBlog.css";

const SingleBlog = ({ articles }) => (
  <div className="text-left my-4">
    {" "}
    <h3>{articles.source.id}</h3>
    <hr />
    <h1>
      <strong>{articles.title}</strong>
    </h1>
    <p className="text-muted">
      {format(new Date(articles.publishedAt), "MMMM d" + ", " + "yyyy ")}
      by{" "}
      <a
        className="text-primary text-small font-weight-bold"
        href={articles.url}
      >
        {articles.author}
      </a>
    </p>
    <img
      className="img-fluid w-75 mr-auto"
      src={articles.urlToImage}
      alt={articles.title + " image"}
    />
    <p className="p-blogs-generic">
      <strong>{articles.description}</strong>
    </p>
    <p>
      <strong>{articles.content}</strong>
    </p>
  </div>
);

export default SingleBlog;
