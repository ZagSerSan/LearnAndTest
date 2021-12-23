$(function() {
	/*
	var hotel = {
	
		name: 'Tula',
		rooms: 40,
		booked: 25,
		gym: true,
		pool: false,
		roomTypes: ['one', 'two', 'three'],

		checkAvailability: function () {
			return this.rooms - this.booked;
		}
	}*/

	// доступ к тексту
	let text_bold =	$(".text_bold");
	let text_inline = $(".text_inline");
	let text_cursive = $(".text_cursive");

	let content = $(".content");

	// функционал кнопок
	let btn_bold = $(".button_bold").click(function() {
		btn_bold.toggleClass('active');
		text_bold.toggleClass('active');
	});
	let btn_inline = $(".button_inline").click(function() {
		btn_inline.toggleClass('active');
		text_inline.toggleClass('active');
	});
	let btn_cursive = $(".button_cursive").click(function() {
		btn_cursive.toggleClass('active');
		text_cursive.toggleClass('active');
	});
	let show_content = $(".show_content").click(function() {
		show_content.toggleClass('active');
		content.toggleClass('hide');
	});

});


