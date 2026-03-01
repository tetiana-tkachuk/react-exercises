export default function Form() {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    // const handleSubmit: React.SubmitEvent<HTMLFormElement> = event =>{}
    // From textbook!!! const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {}

    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const username = formData.get('username');
    console.log('Username:', username);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}
