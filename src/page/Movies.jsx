import { SearchBox } from 'components/SearchBox/SearchBox';

import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <main>
      <SearchBox />

      <Outlet />
    </main>
  );
};
