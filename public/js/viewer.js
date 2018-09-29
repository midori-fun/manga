function resize() {
	let w = window.innerWidth ? window.innerWidth: $(window).width();
	let h = window.innerHeight ? window.innerHeight: $(window).height();
	let ua = navigator.userAgent;

	if(ua.includes("iPad") || ua.includes("Android") && !ua.includes('Mobile')) {
		// Tablet
		style = "width: 80vw; height: auto; margin: 2vh auto;";
	} else if(w > h) {
		// width is longer than height (typically PC)
		style = "width: auto; height: 94vh; margin: 2vh 10vw;";
	} else {
		// height is longer than width (typically mobile)
		style = "width: 96vw; height: auto; margin: 2vh auto;";
	}

	$(".read_manga .pages img").attr("style", style);
}

$(window).on("resize", resize);

resize();
