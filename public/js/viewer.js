let w = $(window).width();
let h = $(window).height();
let css;
let ua = navigator.userAgent;

if(ua.includes("iPad") || ua.includes("Android") && !ua.includes('Mobile')) {
	// Tablet
	style = "width: 80vw; height: auto; border: 1px solid darkgreen; margin: 2vh auto;";	
} else if(w > h) {
	// PC
	style = "width: auto; height: 94vh; border: 1px solid darkgreen; margin: 3vh 2vw;";
} else {
	// Mobile
	style = "width: 96vw; height: auto; border: 1px solid darkgreen; margin: 7vh auto;";
}

$(".read_manga img").attr("style", style);