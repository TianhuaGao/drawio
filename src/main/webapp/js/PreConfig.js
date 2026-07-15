/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.DRAWIO_PUBLIC_BUILD = true;
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math4/es5';
window.DRAWIO_CONFIG = {
	defaultLibraries: 'whiteCeramic;general;uml;er;bpmn;flowchart;basic;arrows2',
	expandLibraries: true,
	customPresetColors: ['FDFDFC', 'FFFFFF', 'F7F6F3', 'E7E7E7', 'B8B8B5', '9A9A9A', '5F5F5C', '1A1A1A'],
	customColorSchemes: [[
		{fill: '#FDFDFC', stroke: '#B8B8B5', font: '#1A1A1A', gradient: '#FFFFFF'},
		{fill: '#FFFFFF', stroke: '#B8B8B5', font: '#1A1A1A', gradient: '#F7F6F3'},
		{fill: '#F7F6F3', stroke: '#9A9A9A', font: '#1A1A1A', gradient: '#FFFFFF'},
		{fill: '#E7E7E7', stroke: '#9A9A9A', font: '#1A1A1A', gradient: '#FFFFFF'},
		{fill: '#9A9A9A', stroke: '#5F5F5C', font: '#FFFFFF', gradient: '#E7E7E7'},
		{fill: '#1A1A1A', stroke: '#1A1A1A', font: '#FFFFFF'}
	]],
	libraries: [{
		title: {main: 'Engineering', zh: '工程'},
		entries: [{
			id: 'whiteCeramic',
			title: {main: 'White Ceramic Engineering', zh: '白瓷工程'},
			desc: {main: 'Control blocks, summing points, signals and feedback loops', zh: '控制模块、求和点、信号线和反馈回路'},
			libs: [{
				title: {main: 'White Ceramic Engineering', zh: '白瓷工程'},
				url: new URL('libraries/white-ceramic-engineering.mxlibrary',
					document.baseURI).href,
				preload: true
			}]
		}]
	}]
}; // White Ceramic style pack and custom draw.io configurations
urlParams['sync'] = 'manual';
