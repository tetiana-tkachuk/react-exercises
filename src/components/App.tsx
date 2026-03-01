import Alert from './Alert';
import Book from './Book';
import Button from './Button';
import ContactsList from './ContactsList';
import Form from './Form';
import ActionForm from './ActionForm';
import Mailbox from './Mailbox';
import Product from './Product';
import UserMenu from './UserMenu';

const books = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Query overview' },
];

const contacts = [
  { id: 'id-1', name: 'Kevin' },
  { id: 'id-2', name: 'Lucy' },
];

export default function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Clicked!', event);
    console.log('Target:', event.target);
  };

  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <section>
        <div>_ _ _ _ _ _ _</div>
        <h2>User menu</h2>
        <UserMenu name="Oscar" />

        <h2>Mailbox</h2>
        <Mailbox username="Oscar" messages={[]} unreadMessages={[]} />
      </section>
      <section>
        <h2>Books of the week</h2>
        <div>_ _ _ _ _ _ _</div>
        <Book books={books} />

        <Button variant="primary" text="Login" />
        <Button variant="secondary" text="Follow" />

        <Alert />
        <Alert type="success" />
        <Alert type="error" />

        <button onClick={handleClick}>Click me!</button>
      </section>
      <section>
        <ContactsList existedContacts={contacts} />
      </section>
      <section>
        <Form />
        <ActionForm />
      </section>
    </>
  );
}
