import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
// React Router
import { Link } from "react-router-dom";
import { smallImage } from "../utils";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();

  // Load Details Handler
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
