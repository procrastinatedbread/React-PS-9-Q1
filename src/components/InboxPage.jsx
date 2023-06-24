import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { NavLink, Link } from "react-router-dom";

const InboxPage = () => {
  const { inboxMails, handleMarkAsRead } = useContext(MailContext);
  console.log(inboxMails);
  const noOfReadMails = inboxMails?.reduce(
    (acc, { read }) => (read ? acc + 1 : acc),
    0
  );
  const noOfUnreadMails = inboxMails?.reduce(
    (acc, { read }) => (read ? acc : acc + 1),
    0
  );
  return (
    <>
      <h1>My Emails</h1>
      <NavLink to="/inbox">Inbox</NavLink>
      <br />
      <NavLink to="/sent">Sent</NavLink>
      <h2>Already read mails: {noOfReadMails}</h2>
      <h2> Unread mails: {noOfUnreadMails}</h2>
      <ul>
        {inboxMails.length > 0 &&
          inboxMails?.map(({ id, subject, read }) => {
            return (
              <>
                <li key={id}>
                  <Link to={`/email/inbox/${id}`}>{subject} </Link>
                  {!read && (
                    <button onClick={() => handleMarkAsRead(id)}>
                      Mark as read
                    </button>
                  )}
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
};
export default InboxPage;
