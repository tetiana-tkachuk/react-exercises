interface MailboxProps {
  username: string;
  messages: string[];
  unreadMessages: string[];
}

export default function Mailbox({
  username,
  messages,
  unreadMessages,
}: MailboxProps) {
  return (
    <>
      <h3>First way</h3>
      <p>Hello {username}</p>
      {messages.length > 0 && <p>You have {messages.length} unread messages</p>}

      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>

      <h3>Second way</h3>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages.length} unread messages</p>
          <p>Check your inbox to read them!</p>
          <button>Open inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
}
