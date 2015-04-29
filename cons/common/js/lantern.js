var lantern = function (id) {
	lantern.sel = id;
	init();
}

function init(){
	var id = lantern.sel;
	lantern.len = $("."+id).children("li").length;
	lantern.cur = 0;
	createArrow();
	bindJump();
	$('.'+id).children('li:eq(' + lantern.cur + ')').addClass('top');
	lantern.intv = setInterval("twinkle()",3000);
}

function twinkle(){
	kaeri();
	setCurrent(1);
	kaeri();
}

function setCurrent(change){
	change %= lantern.len;
	change += lantern.len;
	change %= lantern.len;
	lantern.cur = (lantern.cur+change)%lantern.len;
}

function kaeri() {
	var id = lantern.sel;
	$('.'+id).children('li:eq(' + lantern.cur + ')').toggleClass('top');
}

function createArrow(){
	var id = lantern.sel;
	$('.'+id).append('<div class="left-arrow">&lt;</div>');
	$('.'+id).append('<div class="right-arrow">&gt;</div>');
}

function bindJump(){
	$('.left-arrow').click(function(){
		jump(-1);
	});
	$('.right-arrow').click(function(){
		jump(1);
	});
}

function jump(muke){
	window.clearInterval(lantern.intv);
	kaeri();
	setCurrent(muke);
	kaeri();
	lantern.intv = setInterval("twinkle()",3000);
}
