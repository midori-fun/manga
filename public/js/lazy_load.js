let all_img = $(".read_manga img");
let img_len = all_img.length;
let loaded_counter = 0;

for(let i=0; i<img_len; i++){
	all_img[i].addEventListener("load",loadFunc);
	$(".read_manga img").eq(0).attr("src", function() {
		return $(this).attr("data");
	}).removeAttr();
	$(".read_manga img").eq(1).attr("src", function() {
		return $(this).attr("data");
	}).removeAttr();
}

function loadFunc() {
	$(this).fadeIn(500);
	loaded_counter++;
	if(img_len === loaded_counter){
		$("#footer").css("display", "block");
	}
}

$(window).on("scroll", function() {
	let targets = $('.not_displayed');
	targets.each(function(i, e) {
		let t = $(e).offset().top;
		let nb_page = +$(e).attr("id").match(/(\d+)$/)[0];
		let p = t - (window.innerHeight ? window.innerHeight: $(window).height());

		if($(window).scrollTop() > p) {
			$(e).removeClass("not_displayed");
			$(`#page_${nb_page+1} img, #page_${nb_page+2} img`).attr("src", function() {
				return $(this).attr("data");
			}).removeAttr("data");
		}
	});
});