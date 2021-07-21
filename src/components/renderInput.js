import { React } from 'react';
import context from '../core/context';

const RenderInput = () =>
	<input
		value={ context.state.input }
		onKeyUp={ (evt) => context.actions.updateInput(evt.code) }
		readOnly="true"
	/>;

export default RenderInput;

// onKeyUp={ (evt) => context.actions.updateInput(evt.code) }
