export default function ActionForm() {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    const hairColor = formData.get('hairColor') as string;
    console.log('Username from ActionForm: ', username, hairColor);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" />
      <input type="text" name="hairColor" defaultValue="blondy" />
      <button type="submit">Submit</button>
    </form>
  );
}
