import { fetchMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from './MoveItemCast.styled';
import { BiFemale, BiMale, BiGroup } from 'react-icons/bi';

const MovieItemCast = () => {
  const [cast, setCast] = useState(null);
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    if (!!cast) {
      return;
    }
    fetchMovieCredits(id).then(data => setCast(data.data.cast || []));
  }, [cast, id]);

  if (!cast) {
    return;
  }
  return (
    <List>
      {cast.map(({ gender, cast_id, name, character, profile_path }) => {
        const pictureUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
        return (
          <li key={cast_id}>
            {profile_path && <img src={pictureUrl} loading="lazy" alt="" />}

            {!profile_path && gender === 2 && (
              <BiMale style={{ width: '140px', height: '210px' }} />
            )}

            {!profile_path && gender === 1 && (
              <BiFemale style={{ width: '140px', height: '210px' }} />
            )}
            {!profile_path && gender === 0 && (
              <BiGroup style={{ width: '140px', height: '210px' }} />
            )}
            <h3>{name}</h3>
            <p>{character}</p>
          </li>
        );
      })}
    </List>
  );
};

export default MovieItemCast;
