/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import RenderInput from './components/renderInput.js';
import context from './core/context';
import ToTypePassage from './components/toTypePassage';
import ScoreBoard from './components/scoreBoard';

const App = () =>
	<div className="App">
		{ ToTypePassage() }
		{ RenderInput() }
		{ ScoreBoard() }
		<div className="center">{ context.state.input }</div>
	</div>;

export default App;
