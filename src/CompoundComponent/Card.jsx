import React from "react";
import "./Card.css";

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

Card.Body = function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
};

Card.Title = function CardTitle({ children }) {
  return <p>{children}</p>;
};

Card.Image = function CardImage({ src, alt }) {
  return <img className="card-img" src={src} alt={alt} />;
};

Card.Text = function CardText({ children }) {
  return <p className="card-text">{children}</p>;
};

Card.Button = function CardButton({ children }) {
  return <button>{children}</button>;
};
