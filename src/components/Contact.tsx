interface Name {
  name: string;
}

export default function Contact({ name }: Name) {
  return (
    <li>
      <p>{name}</p>
    </li>
  );
}
