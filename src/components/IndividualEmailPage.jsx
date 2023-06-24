import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { useParams } from "react-router-dom";

const IndividualEmailPage = () => {
  const { emailId, type } = useParams();
  const { inboxMails, sentEmails } = useContext(MailContext);
  const email = (type === "inbox" ? inboxMails : sentEmails).find(
    ({ id }) => `${id}` === emailId
  );
  console.log(email);
  return (
    <>
      <h1>{email.subject}</h1>
      {type === "inbox" ? <p>From: {email.sender}</p> : <p>To: {email.to}</p>}
      <p>Message: {email.message}</p>
    </>
  );
};
export default IndividualEmailPage;
