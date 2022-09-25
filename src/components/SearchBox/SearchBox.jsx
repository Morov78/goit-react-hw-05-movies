import search from './search.png';
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
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <input type="text" name="query"></input>
        </label>
        <button type="submit" style={{ width: '22px', height: '22px' }}>
          <img
            src={search}
            style={{ width: '14px', height: '14px' }}
            alt="icon search"
          />
        </button>
      </form>
    </>
  );
};
