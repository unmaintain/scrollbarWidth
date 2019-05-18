/*! scrollbarWidth.js v0.1.4 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		(root.jQuery || root).scrollbarWidth = factory();
	}
}(this, function () {
	'use strict';

	function scrollbarWidth() {
		if (typeof document === 'undefined') {
			return 0;
		}

		var
			body = document.body,
			box = document.createElement('div'),
			boxStyle = box.style,
			width;

		boxStyle.position = 'fixed';
		boxStyle.visibility = 'hidden';
		boxStyle.overflowY = 'scroll';

		body.appendChild(box);

		width = box.getBoundingClientRect().right;

		body.removeChild(box);

		return width;
	}

	return scrollbarWidth;
}));
