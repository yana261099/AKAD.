$(document).ready(function() {

	$("header div.text").hide(); // скрываем выпадающее меню
	$("header #menu").hover(
		function(){
			$("header div.text").stop().show(600); /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
		},
		function() {
			$("header div.text").stop().hide(600);
		}
	);

	// let w_frame = $("#contact_us > div > div:first-child").height();
	// $("#contact_us iframe").width(w_frame);
});