$(document).ready(function() {
	$(".tweet-compose").on("click",function() {
		$(".tweet-controls").show();
		$(".tweet-compose").css("height","5em");
	});



// $( ".tweet-compose" )
//   .keyup(function() {
//     var value = $( this ).val();
//     $( ".char-count").text(value);
//   })
//   .keyup();

$( ".tweet-compose").on("keyup", function() {
	$(".char-count").text(140 - $("textarea").val().length);
		var tweetLength = $("textarea").val().length; 
		if (tweetLength >= 130) {
			$(".char-count").css("color","red");
		 }
			if (tweetLength <= 130) {
			$(".char-count").css("color","black");
		 }
		 	if(tweetLength > 0){
		 		$(".tweet-controls button").css({"background-color":"#019ad2", "color": "#fff","text-shadow":"none"});
		 	}
		 	if(tweetLength == 0 || tweetLength > 140){
		 		$(".tweet-controls button").css({"background-color":"#ddd", "color": "#777","text-shadow":"none"});
		 	}
		});

$(".tweet-controls button").on("click", function(){
	$( ".stream" ).append( "<div>text</div>" );
});



	});	






