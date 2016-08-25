$(document).ready(function() {

	$('.button').on('click', function() {
		console.log('Button clicked');
		findYouTubeTerm();
	});

});


function findYouTubeTerm() {


	var youTubeTerm = $('.text').val();
	fullFillRequest(youTubeTerm);
};

function fullFillRequest(youTubeTerm) {

     url = 'https://www.googleapis.com/youtube/v3/search';
	
	var parameters = {
		part: 'snippet',
		q: youTubeTerm,
		maxResults: 5,
		key: 'AIzaSyBcHFW3bqFau0HKNVQWHMaJ9-StZxMeVXc'
	};

	
	$.getJSON(url, parameters, function(data) {
		console.log('success');
		displayResults(data);
	});
};

function displayResults(data) {


	$('.search-outcome').empty();
	
	for (item in data.items) {
		var videoId = data.items[item].id.videoId;
		var videoURL = 'https://www.youtube.com/watch?v=' + videoId;
		var item = data.items[item].snippet;
		$('.search-outcome').append("<div class='video-output'>" + "<div class='top-area'>" + "<p class='title'>" + item.title + "</p>" + "<p class='description'>" + item.description + "</p>" + "</div>" + "<a href='" + videoURL + "'>" + "<img src='" + item.thumbnails.medium.url + "'>" + "</a>" + "<div>");
	};

};