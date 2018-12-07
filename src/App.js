import React, { Component } from "react";
import axios from "axios";

import Post from "./components/post";

// notes rcc / rfc

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(r => console.log(r))
    //   .then(data => {
    //     this.setState(() => ({ posts: data }));
    //   });
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'";
    axios.get(url).then(res => {
      // this.setState({ posts: res.data });
      console.log(res.data);
    });
    //.then(res => );
  }

  render() {
    // const postItems = this.state.posts.map(post => (
    //   <div key={post.id}>
    //     <h2>post.title</h2>
    //     <i>post.body</i>
    //   </div>
    // ));
    const x = this.state.posts;
    return (
      <div>
        {x}
        <Post />
      </div>
    );
  }
}
export default App;
