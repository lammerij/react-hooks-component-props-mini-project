import React from "react";

function Article({ title, date, preview }) {
    // const date = "January 1, 1970"
  return (
  
  <article>
      <h3>{title}</h3>
      {date ? <small>{date}</small> : date = "January 1, 1970"}
      <p>{preview}</p>
  </article>
  )
}

export default Article;
