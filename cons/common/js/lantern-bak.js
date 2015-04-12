;(function(){
$.fn.lant = function(id,opt){
	var l = new lantern(this,id,opt);
	return l.init(id);
}

var lantern = function(id,opt){
	console.info(id);
	lantern.init(id);
};

lantern.prototype = {
	
	version: 0.1,

	init: function(id){
		if(lantern.fn.check(id)){
			lantern.slide(id);
		}
	},

	check: function(id){
		var lan_img = $('#'+id+' div').children('img');
		if(lan_img.length == 0){
			console.warn('イメージがない');
			return false;
		}
		return true;
	},

	slide: function(id){
		console.info(id);
	}


};

lantern.init = lantern.fn.init;
lantern.t = 3000;
lantern.current = 1;

lantern.slide = function(id){
	lantern.interval = setInterval("lantern.fn.slide("+id+")" , lantern.t);
}
)();