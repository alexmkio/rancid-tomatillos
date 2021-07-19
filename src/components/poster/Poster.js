import PropTypes from 'prop-types';
import './Poster.css';

const Poster = ({photo, id, title}) => {
  if (photo) {
    return (
      <img
        className='poster-image'
        id={id}
        src={photo}
        alt={title}
      />
    )
  }
  return (
    <div className='poster-image placeholder-height'>
    </div>
  )
}

export default Poster;

Poster.propTypes = {
  photo: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string
};
