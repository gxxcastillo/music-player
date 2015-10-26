'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Hello = _react2['default'].createClass({ displayName: 'Hello',
    render: function render() {
        return _react2['default'].createElement("div", null, "Hello ", this.props.name);
    }
});

ReactDOM.render(_react2['default'].createElement(Hello, { name: "World" }), document.getElementById('container'));