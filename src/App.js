import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"

import { Header } from "./components/structure/Header"
import { Footer } from "./components/structure/Footer"
import { Homepage } from "./components/pages/Homepage"
import { Authors } from "./components/pages/Authors"
import { SingleAuthor } from "./components/pages/SingleAuthor"
import { SinglePost } from "./components/pages/SinglePost"
import { About } from "./components/pages/About"

class App extends Component {


  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/authors/:authorId" component={SingleAuthor} />
          <Route path="/posts/:postsId" component={SinglePost} />
          <Route path="/authors" component={Authors} />
          <Route path="/about" component={About} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;
