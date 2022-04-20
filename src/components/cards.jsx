import React from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import back from '../assets/back/ShinMegamiTenseiLogo.webp';

export default function Card({
  // Props
  id,
  img,
  updateCounter,
  keepFlipped,
  isComparing,
  comparator,
  setCompareCard,
}) {
  function handleClick(e) {
    e.preventDefault();
    if (!isComparing || !keepFlipped) {
      updateCounter();
      setCompareCard(id, img);
      comparator(img);
    }
  }

  return (
    <ReactCardFlip
      isFlipped={keepFlipped || isComparing}
      flipDirection="vertical"
    >
      <div>
        <button type="button" onClick={handleClick} className="card">
          <img src={back} alt="back" />
        </button>
      </div>

      <div>
        <button type="button" onClick={handleClick} className="card">
          <img src={img} alt="front" />
        </button>
      </div>
    </ReactCardFlip>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.node.isRequired,
  updateCounter: PropTypes.func.isRequired,
  keepFlipped: PropTypes.bool.isRequired,
  isComparing: PropTypes.bool.isRequired,
  comparator: PropTypes.func.isRequired,
  setCompareCard: PropTypes.func.isRequired,
};
