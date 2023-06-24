import { createContext, useEffect } from "react";
import { useState } from "react";
import { fakeFetch } from "../constants/constants";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [inboxMails, setInboxMails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch("https://example.com/api/allemails");
      setInboxMails(data.emails);
      setSentEmails(data.sentEmails);
    };
    innerFunction();
  }, []);
  const handleMarkAsRead = (mailId) => {
    setInboxMails((inboxMails) =>
      inboxMails.map((mail) =>
        mailId === mail.id ? { ...mail, read: true } : mail
      )
    );
  };

  const mailContext = {
    inboxMails,
    setInboxMails,
    sentEmails,
    setSentEmails,
    handleMarkAsRead
  };

  return (
    <MailContext.Provider value={mailContext}>{children}</MailContext.Provider>
  );
};
