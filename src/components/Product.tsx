import { useState } from 'react';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p>Price: {price} credits</p>
      <button onClick={handleClick}>Add to cart: {clicks}</button>;
    </div>
  );
}
