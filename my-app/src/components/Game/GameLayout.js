import React from 'react';
import PropTypes from 'prop-types';
import { Information } from '../Information/Information';
import { Field } from '../Field/Field';

import styles from '../../App.module.css';

const GameLayout = ({ currentPlayer, field, handleCellClick, handleRestart, isGameEnded, isDraw }) => {
	return (
		<div className="game-layout">
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
			<Field field={field} onCellClick={handleCellClick} />
			<div className={styles.restartButton}>
				<button onClick={handleRestart}>Начать заново</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	handleCellClick: PropTypes.func,
	handleRestart: PropTypes.func,
};

export default GameLayout;
