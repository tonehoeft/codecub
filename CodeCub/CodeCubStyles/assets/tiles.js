$(document).ready(function() {
	var tiles = "showall";
	$("#projectselect").on("change", function() {
		tiles = this.value;
		if (tiles === "css") {
			$(".tile").hide();
			$(".css").show();
		} else if (tiles === "js") {
			$(".tile").hide();
			$(".js").show();
		} else {
			$(".tile").show();
		};
		console.log(tiles);
	});
});