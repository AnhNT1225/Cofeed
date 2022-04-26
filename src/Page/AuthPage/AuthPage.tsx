import React from 'react';
import {useParams} from 'react-router-dom'
import Forgot from './Forgot';
import Login from './Login';
import Register from './Register';
const AuthPage = () => {
    let params = useParams<string>();
  console.log("our parmas: ", params.auth);
  
  const renderRoute = (slug: string) => {
    switch (slug) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "forgot-password":
        return (<Forgot />);
      default:
        break;
    }
  };
    return (
        <div>
            {renderRoute(params.auth!)}
        </div>
    );
};

export default AuthPage;