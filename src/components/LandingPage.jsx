import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <h1>My Emails</h1>
      <NavLink to="/inbox">Inbox</NavLink>
      <br />
      <NavLink to="/sent">Sent</NavLink>
    </>
  );
};
export default LandingPage;
