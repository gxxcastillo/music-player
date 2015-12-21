import React from 'react';

let Hello = React.createClass({
	displayName: 'Hello'
	, render: function () {
			return React.createElement('div', null, 'Hello ', this.props.name);
		}
});

export default Hello;