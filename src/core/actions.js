// import config from './config';

const updateInput = ({ state, data }) => ({
	input: state.input + data,
});

// const updateScore = ({ data, state }) => ({
// 	score: state.score + config.increment,
// });

const actions = {
	updateInput,
	// updateScore,
};

export default actions;
