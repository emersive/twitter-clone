$(document).ready(function() {

	$(".dashboard .tweet-compose").on("click",function() {
		$(".tweet-content .tweet-controls").show();
		$(this).css("height","5em");
	});

	$(".stream .tweet-compose").on("click",function() {
		$(this).css("height","5em");
	});

$( ".tweet-compose").on("keyup", function() {
	$(".char-count").text(140 - $("textarea").val().length);
		var tweetLength = $("textarea").val().length; 
		if (tweetLength >= 130) {
			$(".char-count").css("color","red");
		 }
			if (tweetLength <= 130) {
			$(".char-count").css("color","black");
		 }

		 	if(tweetLength == 0 || tweetLength > 140){
		 		$(".tweet-controls button").css({"background-color":"#ddd", "color": "#777","text-shadow":"none"});
		 		$(".tweet-controls button").attr('disabled', true);
		 	}

		 	if(tweetLength > 0){
		 		$(".tweet-controls button").css({"background-color":"#019ad2", "color": "#fff","text-shadow":"none"});
		 		$(".tweet-controls button").removeAttr('disabled');
		 	}

		});

$(".tweet-controls button").on("click", function(){
		var newTweetText = $(".tweet-content textarea").val();
		var tweetClone = $( ".tweet" ).first("child").clone();
		tweetClone.find("p.tweet-text").text(newTweetText);
		var profilePic = $(".profile-summary img.avatar").attr("src");
		tweetClone.find("img.avatar").attr("src", profilePic);
		tweetClone.find("full.name").text("Britton Stanfill");
		tweetClone.prependTo(".stream");
});

	$(".tweet-actions ul li:nth-child(2n").on("click", function(){
		$(this).attr('data-toggle', 'modal');
		$(this).attr('href', "#myModal");

	});

// Close Window
	$(".btn.cancel").on("click", function(){
		$('#myModal').modal('hide');
	});









});






