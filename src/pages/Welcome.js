import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h2>The welcome page</h2>
      <Route path="/welcome/new-user">Welcome new user !</Route>
    </>
  );
};

export default Welcome;
