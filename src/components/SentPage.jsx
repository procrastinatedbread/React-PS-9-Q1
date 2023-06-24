import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";
import { Link } from "react-router-dom";

const SentPage = () => {
  const { sentEmails } = useContext(MailContext);
  return (
    <>
      <ul>
        {sentEmails.map(({ subject, id }) => {
          return (
            <>
              <li>
                {" "}
                <Link to={`/email/sent/${id}`}>{subject}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default SentPage;
