var lantern = function (id) {
	lantern.sel = id;
	lantern.len = $("."+id).children("li").length;
	lantern.cur = 2;
	createArrow();
	var i = setInterval("tinkle()",3000);
}

function tinkle() {
	var id = lantern.sel;
	$('.'+id).children('li:eq(' + lantern.cur + ')').removeClass('top');
	$('.'+id).children('li').addClass('below');
	lantern.cur = (lantern.cur+1)%lantern.len;
	$('.'+id).children('li:eq(' + lantern.cur + ')').addClass('top');
}

function createArrow(){
	var id = lantern.sel;
	$('.'+id).append('<div class="left-arrow">&lt;</div>');
	$('.'+id).append('<div class="right-arrow">&gt;</div>');
}
