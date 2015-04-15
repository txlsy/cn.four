var lantern = function (id) {
	lantern.len = $("."+id).children("li").length;
	lantern.cur = 2;
	var i = setInterval(function(){tinkle(id)},1000);
}

function tinkle(id) {
	$('.'+id).children('li:eq(' + lantern.cur + ')').removeClass('top');
	$('.'+id).children('li').addClass('below');
	lantern.cur = (lantern.cur+1)%lantern.len;
	console.info(lantern.cur);
	$('.'+id).children('li:eq(' + lantern.cur + ')').addClass('top');
}
