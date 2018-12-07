import React, { Component } from "react";
import axios from "axios";

import Post from "./components/post";

// notes rcc / rfc

class App extends Component {
  state = {
    posts: []
  };
  onData = async () => {
    const url = "https://api.spotify.com/v1/albums";
    const data = await axios(url);
    // const json_data = data.json();
    console.log(data.data);
  };
  // componentDidMount() {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then(res => res.json())
  //   //   .then(r => console.log(r))
  //   //   .then(data => {
  //   //     this.setState(() => ({ posts: data }));
  //   //   });
  //   //const url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'";
  //   // axios.get(url).then(res => {
  //   //   // this.setState({ posts: res.data });
  //   //   console.log(res.data);
  //   // });
  //   //.then(res => );
  //   axios("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     //this.setState(() => ({ posts: res.data }));
  //     console.log(res);
  //   });
  // }

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
        <button onClick={this.onData}>Ok</button>
        <Post />
      </div>
    );
  }
}
export default App;
