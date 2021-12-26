import React from "react";
import Header from "../components/Header";

const PageAdmin = (props) => {
    return (
      <>
      <Header/>
      <h1>Page admin</h1>
      <button onClick={() => props.history.push("/todos")}>Go todo</button>
      </>
    )
  }

export default PageAdmin;