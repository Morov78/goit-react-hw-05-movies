import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MovieItemCast = () => {
  const [movieCast, useMovieCast] = useState(null);

  useEffect(() => {});
  return (
    <div>
      <h2>Cast</h2>
      <Link>lala</Link>
      <Link>bobo</Link>
    </div>
  );
};
