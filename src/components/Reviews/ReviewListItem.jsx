import PropTypes from 'prop-types';

export const ReviewListItem = ({ avatarPath, author, content }) => {
  return (
    <li>
        <img
            width="200"
            height="300"
            src={
              avatarPath
                ? `https://image.tmdb.org/t/p/w300${avatarPath}`
                : `https://fakeimg.pl/600x400?text=No+Image+Available`
            }
            alt={author}
        />
        <p>{author}</p>
        <p>{content}</p>
    </li>
  );
};

ReviewListItem.propTypes = {
    review: PropTypes.string.isRequired,
};