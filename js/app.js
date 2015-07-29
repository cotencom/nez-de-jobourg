$(document).ready(function() {
	
	page("*", function(context, controller) {
		if(document.location.pathname != context.path) {
			console.log(context);
			var content = null;
			$(".big-container .container").fadeOut(500);
			
			
			$(".navbar-nav li").removeClass("active", {duration:500});
				

			if(context.path == "/") context.path = "index.html";
			jQuery.get(context.path + "-ajax", function(data) {
				var parent = $(".big-container").parent();
				$(".big-container").remove();
				parent.append(data);
				$(".big-container .container").hide();
				$(".big-container .container").fadeIn(500);

				$(".navbar-nav li").each(function(e, i) {
					console.log($(i).find("a").attr("href") + " vs " + context.path);
					if($(i).find("a").attr("href") == context.path) {
						$(i).addClass("active", {duration:500});
					}
				});
			});
			return false;
		}
	});
	page();

	$('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});
});