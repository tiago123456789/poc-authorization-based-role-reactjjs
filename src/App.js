import React from 'react';
import { AuthProvider } from './provider/AuthContext';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PageAdmin from "./pages/PageAdmin"
import PageEmployee from "./pages/PageEmployee"
import Login from './pages/Login';
import Todo from './pages/Todo';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoute permission="ADMIN" 
        exact={true} path="/admin" component={PageAdmin} />
        
        <PrivateRoute permission="EMPLOYEE" 
        exact={true} path="/employee" component={PageEmployee} />

        <PrivateRoute exact={true} path="/todos" component={Todo} />

        <Route exact={true} path="/" component={Login} />
        <Redirect to="/"/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
