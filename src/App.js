/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import RenderInput from './components/renderInput.js';
import context from './core/context';

const App = () =>
	<div className="App">
		{ RenderInput() }
		<div className="center">{ context.state.input }</div>
	</div>;

export default App;
