import { HiUser } from 'react-icons/hi';
import css from './UserMenu.module.css';

interface UserMenuProps {
  name: string;
}

export default function UserMenu({ name }: UserMenuProps) {
  const handleClick = () => {
    console.log("I'm a button!");
  };

  return (
    <>
      <div className={css.user}>
        <HiUser className={css.icon} size={24} />
        <p>{name}</p>
      </div>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => alert('Clicked!')}>Click me!</button>
    </>
  );
}
