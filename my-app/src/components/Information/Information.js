import InformationLayout from './InformationLayout';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsGameEnded, selectIsDraw } from '../../selectors/selectors.js';

export const Information = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

	let status;

	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
};
