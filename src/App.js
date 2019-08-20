import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    FilteredAuthors: 
  };
  filterAuthors = query => {
    let
  };


  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  unSelectAuthor = author => {
    this.setState({ currentAuthor: null });
  };
  conditionalRender = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail authors={this.state.currentAuthor} />;
    } else {
      return <AuthorsList authors={authors} author={this.selectAuthor} />;
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselect={this.unSelectAuthor} />
          </div>
          <div className="content col-10">
            <div />

            {this.conditionalRender()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
