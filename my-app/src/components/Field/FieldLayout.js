import PropTypes from 'prop-types';
import { selectField } from '../../selectors/selectors.js';
import { useSelector } from 'react-redux';
import styles from '../../App.module.css';

const FieldLayout = ({ onCellClick }) => {
	const field = useSelector(selectField);
	return (
		<div className="field-layout">
			<div className={styles['field-wrapper']}>
				<div className={styles.field}>
					{field.map((cell, index) => (
						<button key={index} onClick={() => onCellClick(index)}>
							{cell}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default FieldLayout;
