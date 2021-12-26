import React from "react";
import { useAuth } from "../provider/AuthContext";

const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.VGcE6AvXKEMNhRVJhktNfgyY2i02aCun1QKPUXtVcQk";
const tokenEmployee = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiRU1QTE9ZRUUiLCJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.BzU_rkvXznDLPk65-4329rD-AbpbSYvGjOEzhev4BWA"

const Login = (props) => {
    const { signIn } = useAuth();
  
    const loginAdmin = () => {
      // return accesstoken
      localStorage.setItem("token", tokenAdmin)
      signIn()
      props.history.push("/admin")
    }
  
    const loginEmployee = () => {
      localStorage.setItem("token", tokenEmployee)
      signIn()
      props.history.push("/employee")
    }
  
    return (
      <>
        <button onClick={() => loginAdmin()}>Sign in Admin</button>
        <br />
        <br />
        <button onClick={() => loginEmployee()}>Sign in Employee</button>
      </>
    )
  }

export default Login;