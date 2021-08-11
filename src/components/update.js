import context from '../core/context';

const Update = (key) =>
	(key.length !== 1
		? null
		: context.actions.updateInput(key));

export default Update;
