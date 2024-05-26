// import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayer, setGameEnded, setDraw, setField } from '../../action';
// import { subscribe, store } from '../../store';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const selectField = (state) => state.field;
const selectCurrentPlayer = (state) => state.currentPlayer;
const selectIsGameEnded = (state) => state.isGameEnded;
const selectIsDraw = (state) => state.isDraw;

const Game = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;

			dispatch(setField(newField));

			if (checkWinner(newField, currentPlayer)) {
				dispatch(setGameEnded(true));
			} else if (newField.every((cell) => cell !== '')) {
				dispatch(setDraw(true));
				dispatch(setGameEnded(true));
			} else {
				dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
			}
		}
	};

	const handleRestart = () => {
		const resetState = {
			currentPlayer: 'X',
			isGameEnded: false,
			isDraw: false,
			field: Array(9).fill(''),
		};

		dispatch(setCurrentPlayer(resetState.currentPlayer));
		dispatch(setGameEnded(resetState.isGameEnded));
		dispatch(setDraw(resetState.isDraw));
		dispatch(setField(resetState.field));
	};

	const checkWinner = (currentField, player) => {
		return WIN_PATTERNS.some((pattern) => pattern.every((index) => currentField[index] === player));
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		/>
	);
};

export default Game;
