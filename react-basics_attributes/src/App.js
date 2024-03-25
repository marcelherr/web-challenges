import React from "react";
import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article__title">this is a headline</h2>
      <label htmlFor="input"></label>
      <input type="input" id="input"></input>
      <a
        className="article__link"
        href="https://github.com/neuefische/hh-web-24-2/blob/main/sessions/react-basics/react-basics.md"
      >
        link to handout
      </a>
    </article>
  );
}
