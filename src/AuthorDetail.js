import React, { Component } from "react";

class AuthorDetail extends Component {
  author = this.props.authors;
  authorName = `${this.author.first_name} ${this.author.last_name}`;
  render() {
    return (
      <div className="author col-xs-10">
        <div>
          <h3>{this.authorName}</h3>
          <img
            src={this.author.imageUrl}
            className="img-thumbnail"
            alt={this.authorName}
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.author.books[1].title}</td>
              <td>{this.authorName}</td>
              <td>
                <button className="btn" style={{ backgroundColor: "blue" }} />
              </td>
            </tr>
            <tr>
              <td>{this.author.books[0].title}</td>
              <td>{this.authorName}</td>
              <td>
                <button className="btn" style={{ backgroundColor: "red" }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
