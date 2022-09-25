export const SearchBox = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.currentTarget.query.value.trim();
    if (searchQuery === '') {
      return;
    }
    onSubmit(searchQuery);
    event.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query"></input>
        </label>
        <button type="submit"></button>
      </form>
    </>
  );
};
