import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../action';

import GameLayout from './GameLayout';

const Game = () => {
	const dispatch = useDispatch();
	const handleRestart = () => {
		dispatch(reset());
	};

	return <GameLayout handleRestart={handleRestart} />;
};

export default Game;
