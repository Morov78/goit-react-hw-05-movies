import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsMovieById } from 'services/api';
import { List, Placeholder } from './MoveItemCast.styled';
import { BiFemale, BiMale, BiGroup } from 'react-icons/bi';
import AtomImage from '@s-ui/react-atom-image';
import spinner from '../../../images/spinner.svg';

const MovieItemCast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!!cast) {
      return;
    }

    fetchCreditsMovieById(movieId).then(data => setCast(data.data.cast || []));
  }, [cast, movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length === 0 && (
        <div style={{ marginLeft: '15px' }}>No cast list available</div>
      )}

      <List>
        {cast.map(({ gender, cast_id, name, character, profile_path }) => {
          const pictureUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <li key={cast_id}>
              {profile_path && (
                <Placeholder>
                  <AtomImage src={pictureUrl} alt="" placeholder={spinner} />
                </Placeholder>
              )}

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
    </>
  );
};

export default MovieItemCast;
