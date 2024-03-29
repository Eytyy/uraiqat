'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchPractice = exports.updateFilter = exports.fetchFilters = exports.fetchSearchResults = exports.toggleGallery = exports.updateActiveSlide = exports.updateGallery = exports.fetchRelated = exports.fetchProject = exports.fetchProjects = exports.fetchPost = exports.fetchPosts = exports.initClient = undefined;

var _reducers = require('./reducers');

var _api = require('./api');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// App Action Creators
var requestClient = function requestClient() {
	return {
		type: 'INIT_CLIENT'
	};
};

var recieveClient = function recieveClient(authState) {
	return {
		type: 'LOADED_CLIENT',
		authState: authState
	};
};

var initClient = exports.initClient = function initClient() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestClient());
		if ((0, _reducers.getIsClientLoading)(state)) {
			return Promise.resolve();
		}
		return api.setupClient().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveClient(response));
		});
	};
};

// Journal Action Creators
var requestPosts = function requestPosts() {
	return {
		type: 'REQUEST_POSTS'
	};
};

var recievePosts = function recievePosts(payload) {
	return {
		type: 'RECIEVE_POSTS',
		response: payload
	};
};

var requestPost = function requestPost() {
	return {
		type: 'REQUEST_POST'
	};
};

var recievePost = function recievePost(payload) {
	return {
		type: 'RECIEVE_POST',
		response: payload
	};
};

var fetchPosts = exports.fetchPosts = function fetchPosts() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestPosts());
		if ((0, _reducers.isPostsFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchPosts().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recievePosts(response));
		});
	};
};

var fetchPost = exports.fetchPost = function fetchPost(id) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestPost());
		if ((0, _reducers.isPostFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchPost(id).then(function (response) {
			dispatch(recievePost(response));
		});
	};
};

// Work Action Creators
var requestProjects = function requestProjects() {
	return {
		type: 'REQUEST_PROJECTS'
	};
};

var recieveProjects = function recieveProjects(payload) {
	return {
		type: 'RECIEVE_PROJECTS',
		response: payload
	};
};

var requestProject = function requestProject() {
	return {
		type: 'REQUEST_PROJECT'
	};
};

var recieveProject = function recieveProject(payload) {
	return {
		type: 'RECIEVE_PROJECT',
		response: payload
	};
};

var fetchProjects = exports.fetchProjects = function fetchProjects() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestProjects());
		if ((0, _reducers.isProjectsFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchProjects().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveProjects(response));
		});
	};
};

var fetchProject = exports.fetchProject = function fetchProject(id) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestProject());
		if ((0, _reducers.isProjectFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchProject(id).then(function (response) {
			dispatch(recieveProject(response));
		});
	};
};

// Related Action Creators
var requestRelated = function requestRelated() {
	return {
		type: 'REQUEST_RELATED'
	};
};

var recieveRelated = function recieveRelated(payload, id) {
	return {
		type: 'RECIEVE_RELATED',
		response: payload,
		projectID: id
	};
};

var fetchRelated = exports.fetchRelated = function fetchRelated(id) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestRelated());
		if ((0, _reducers.isRelatedFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchRelatedPosts(id).then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveRelated(response, id));
		});
	};
};

// Gallery Action Creators
var recieveGalleryContent = function recieveGalleryContent(sliderId, content) {
	return {
		type: 'RECIEVE_GALLERY_CONTENT',
		response: {
			sliderId: sliderId,
			content: content
		}
	};
};
var updateGallery = exports.updateGallery = function updateGallery(sliderId, content) {
	return function (dispatch) {
		return dispatch(recieveGalleryContent(sliderId, content));
	};
};

var updateSlide = function updateSlide(sliderId, direction) {
	return {
		type: 'UPDATE_ACTIVE_SLIDE',
		response: {
			direction: direction,
			sliderId: sliderId
		}
	};
};
var updateActiveSlide = exports.updateActiveSlide = function updateActiveSlide(sliderId, direction) {
	return function (dispatch) {
		return dispatch(updateSlide(sliderId, direction));
	};
};

var updateGalleryVisibility = function updateGalleryVisibility(sliderId, isVisible) {
	return {
		type: 'UPDATE_GALLERY_VISIBILITY',
		response: {
			sliderId: sliderId,
			isVisible: isVisible
		}
	};
};
var toggleGallery = exports.toggleGallery = function toggleGallery(sliderId, isVisible) {
	return function (dispatch) {
		return dispatch(updateGalleryVisibility(sliderId, isVisible));
	};
};

// Search Action Creator 
var requestSearch = function requestSearch() {
	return {
		type: 'REQUEST_SEARCH'
	};
};

var recieveSearch = function recieveSearch(payload, query) {
	return {
		type: 'RECIEVE_SEARCH',
		response: payload,
		query: query
	};
};

var fetchSearchResults = exports.fetchSearchResults = function fetchSearchResults(query) {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestSearch);
		if ((0, _reducers.isSearchFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchSearchResults(query).then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveSearch(response, query));
		});
	};
};

// Filter Action Creator
var requestFilters = function requestFilters() {
	return {
		type: 'REQUEST_FILTERS'
	};
};

var recieveFilters = function recieveFilters(payload) {
	return {
		type: 'RECIEVE_FILTERS',
		response: payload
	};
};

var fetchFilters = exports.fetchFilters = function fetchFilters() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestFilters);
		if ((0, _reducers.isSearchFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchFilters().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recieveFilters(response));
		});
	};
};

var updateFilterState = function updateFilterState(id) {
	return {
		type: 'UPDATE_FILTER',
		response: {
			id: id
		}
	};
};

var updateFilter = exports.updateFilter = function updateFilter(id) {
	return function (dispatch) {
		return dispatch(updateFilterState(id));
	};
};

// Pratctice Action Creator 
var requestPractice = function requestPractice() {
	return {
		type: 'REQUEST_PRACTICE'
	};
};

var recievePractice = function recievePractice(payload) {
	return {
		type: 'RECIEVE_PRACTICE',
		response: payload
	};
};

var fetchPractice = exports.fetchPractice = function fetchPractice() {
	return function (dispatch, getState) {
		var state = getState();
		dispatch(requestPractice);
		if ((0, _reducers.isPracticeFetching)(state)) {
			return Promise.resolve();
		}
		return api.fetchPractice().then(function (response) {
			return response;
		}).then(function (response) {
			dispatch(recievePractice(response));
		});
	};
};