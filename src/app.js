import React from 'react';
import ReactDOM from 'react-dom';
import MusicPlayer from './MusicPlayer';
import { Provider } from 'react-redux';

ReactDOM.render(
	<MusicPlayer name="world" />,
	document.getElementById('app')
);