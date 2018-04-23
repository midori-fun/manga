$(window).on("scroll", function() {
	let targets = $('.not_displayed')
	targets.each(function(i, e) {
		let t = $(e).offset().top;
		let nb_page = +$(e).attr("id").match(/(\d+)$/)[0];
		let p = t - (window.innerHeight ? window.innerHeight: $(window).height());

		if($(window).scrollTop() > p) {
			$(e).removeClass("not_displayed");
			let [a, b, c] = [nb_page, nb_page+1, nb_page+2];
			$(`#page_${a} img, #page_${b} img, #page_${c} img`).attr("src", function() {
				return $(this).attr("data");
			});
		}
	});
});