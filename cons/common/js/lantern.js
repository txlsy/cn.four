var lantern = function (id) {
	lantern.sel = id;
	lantern.len = $("."+id).children("li").length;
	lantern.cur = 2;
	var i = setInterval("tinkle()",1000);
}

function tinkle() {
	var id = lantern.sel;
	$('.'+id).children('li:eq(' + lantern.cur + ')').removeClass('top');
	$('.'+id).children('li').addClass('below');
	lantern.cur = (lantern.cur+1)%lantern.len;
	$('.'+id).children('li:eq(' + lantern.cur + ')').addClass('top');
}
