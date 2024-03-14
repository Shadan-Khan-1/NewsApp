import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class NewsItem extends Component {
  // static propTypes = {};

  render() {
    let { titel, description, imgUrl, url, author, date } = this.props;
    return (
      <div>
        <div className="card my-2">
          <img
            src={
              !imgUrl
                ? `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQddsgCRHvNHEu3toKSDbQ_kbBk899eiI3i62QKrV976nsfBLmteiEpWWBiRYgoqvpUQmxyVUFT4kkS9lr_39z14pNQwbYDrvYuiJYgT36OygDRiEN-AOZ43iJ_9GiYpq0wS-wJQ2Nqf8PnQY1D84p3dnMeswLq8qdPVxxFqPfJdvf7l3jDN0Cejf1dyI/s1200/i%20phone%2015%20pro%20max.png`
                : imgUrl
            }
            className="card-img-top"
            alt={titel}
          />
          <div className="card-body">
            <h5 className="card-title">{titel}</h5>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-sm btn-primary">
              Read more
            </a>
            <div className="card-footer">
              <small className="text-muted">
                {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
