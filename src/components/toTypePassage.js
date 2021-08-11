import faker from 'faker';
import { React } from 'react';

const text = faker.lorem.paragraph();

const ToTypePassage = () =>
	<div className="fake-sentence">{ text }</div>;

export default ToTypePassage;

// faker::Quote.matz
