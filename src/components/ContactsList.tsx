import Contact from './Contact';

interface ContactsParams {
  existedContacts: Contact[];
}

interface Contact {
  id: string;
  name: string;
}

export default function ContactsList({ existedContacts }: ContactsParams) {
  return (
    <ul>
      {existedContacts.map((contact: Contact) => (
        <Contact key={contact.id} name={contact.name} />
      ))}
    </ul>
  );
}
