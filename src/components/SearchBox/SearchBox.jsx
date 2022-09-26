import search from '../../images/search.png';
import { List } from './SearchBox.styled';
import PropTypes from 'prop-types';

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
        <List>
          <input type="text" name="query"></input>

          <button type="submit">
            <img src={search} alt="icon search" />
          </button>
        </List>
      </form>
    </>
  );
};

SearchBox.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
