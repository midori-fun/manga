let all_img = $(".read_manga img");
let img_len = all_img.length;
let loaded_counter = 0;

(function loadNext(arr, i) {
	arr.eq(i).attr("src", function() {
		return $(this).attr("data");
	});

	if(i == 2) {
		$(".loading").remove();
		$(".main").css("display", "block");
	}

	if(i>0) {
		arr[i].addEventListener("load", arr.eq(i+1).attr("src", function() {
			$(this).css("border", "1px solid darkgreen;");
			loadNext(arr, i+1);
			return $(this).attr("data");
		}));
	} else {
		arr[i].addEventListener("load", arr.eq(i+1).attr("src", function() {
			$(this).css("border", "1px solid darkgreen;");

			$('.arrow').css("visibility", "visible").fadeOut(1000).animate({
				'top': '30vh'
			},{
				duration: 1000,
				queue: false
			});	
		}));

		loadNext(arr, i+1);
	}
})(all_img, 0);

function loadFunc() {
	$(this).fadeIn(500);
	loaded_counter++;
	if(img_len === loaded_counter){
		$("#footer, #credit").css("display", "block");
	}
}