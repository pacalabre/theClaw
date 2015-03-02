var shuffle = function(m) {

		var rand, $rand;
		rand = Math.floor(Math.random() * m--)

		$('div > img:eq(' + m + ')').
			after($('div > img:eq(' + rand + ')')).
			insertBefore($('div > img:eq('+ rand + ')'))

	if(m) {
		setTimeout(shuffle, 100, m);

	}
	}

$(document).ready(function(){

	$('button').click(function(){
		shuffle($('div > img:eq').length);
		});

	$('button').mouseenter(function() {
		$('button').fadeTo('fast','.5');	
	})
	$('button').mouseleave(function(){
		$('button').fadeTo('fast','1');
	});
 });

