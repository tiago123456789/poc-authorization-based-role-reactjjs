import React from "react"
import Header from "../components/Header";

const PageEmployee = (props) => {
    return (
      <>
      <Header/>
      <h1>Page employee</h1>
      <button onClick={() => props.history.push("/todos")}>Go todo</button>
      </>
    )
  }


export default PageEmployee;