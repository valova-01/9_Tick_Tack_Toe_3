import { useDispatch, useSelector } from 'react-redux';
import FieldLayout from './FieldLayout';
import { setCurrentPlayer, setGameEnded, setDraw, setField } from '../../action';
import { checkWinner, chekDarw } from '../../utils/utils.js';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from '../../selectors/selectors.js';

export const Field = () => {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			dispatch(setField(newField));
			if (checkWinner(newField, currentPlayer)) {
				dispatch(setGameEnded());
			} else if (chekDarw(newField)) {
				dispatch(setDraw());
				dispatch(setGameEnded());
			} else {
				dispatch(setCurrentPlayer());
			}
		}
	};

	return <FieldLayout onCellClick={handleCellClick} />;
};
