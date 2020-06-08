import React, { Component } from "react";

import MoviesList from "./MoviesList";

class MoviesLoader extends Component {
  state = {
    loading: false,
    movies: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const url = `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies`;
      // const url = `http://localhost:8080/top-rated-movies`;
      this.setState({ loading: true });
      const rsp = await fetch(url);

      if (rsp.ok) {
        const data = await rsp.json();
        this.setState({ movies: data });
      } else if (
        rsp.headers.get("Content-Type").startsWith("application/json")
      ) {
        const data = await rsp.json();
        this.setState({
          error: { message: data.status_message || rsp.statusText },
        });
      } else {
        this.setState({ error: { message: rsp.statusText } });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentWillUnmount() {
    // Prevent state changes after unmounting as
    // this will generate error messages when running Jest tests
    this.setState = () => null;
  }

  render() {
    return <MoviesList {...this.state} />;
  }
}

export default MoviesLoader;
