$(document).ready(function() {
	
	page("*", function(context, controller) {
		if(document.location.pathname != context.path) {
			//$(".big-container .container").hide();

			$(".navbar-nav li").removeClass("active");
			if(context.path == "/") context.path = "index.html";
			jQuery.get("/ajax/" + context.path + ".json", function(data) {
				content = data.content;
				var parent = $(".big-container").parent();
				$("title").html(data.title);
				$(".big-container").remove();
				parent.append(content);
				/*$(".big-container .container").hide();
				$(".big-container .container").show();*/

				$(".navbar-nav li").each(function(e, i) {
					if($(i).find("a").attr("href") == context.path) {
						$(i).addClass("active", {duration: 0});
					}
				});
				pageChange();
			});
		}
	});
	page();

	if($(".navbar-toggle").is(":visible")) {
		$('.nav a').on('click', function(){
		    $(".btn-navbar").click(); //bootstrap 2.x
		    $(".navbar-toggle").click() //bootstrap 3.x by Richard
		});
	};
	pageChange();

});

function pageChange() {
	setTimeout(function() {
		$("span.link").each(function(i, e) {
			console.log(e);
			var link = $(e).html();
			$(e).html("<a href='http://"+link+"'>"+link+"</a>");
		});
	}, 400);
}