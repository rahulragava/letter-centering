import context from '../core/context';
import { React } from 'react';

const ScoreBoard = () =>
	<div className="score-card">
		score: { context.state.score }
	</div>;

export default ScoreBoard;
