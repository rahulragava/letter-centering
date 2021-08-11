import { React } from 'react';
import context from '../core/context';
import Update from './update';

const RenderInput = () =>
	<input
		className="input"
		value={ context.state.input }
		readOnly={ true }
		contentEditable="true"
		autoFocus={ true }
		tabIndex="0"
		onKeyUp={ (evt) => Update(evt.key) }
	/>;

export default RenderInput;

// onKeyUp={ (evt) => context.actions.updateInput(evt.code) }
