$(document).ready(function(){

    //ID блока с ссылками #prime_nav
	$("#ykorOnFooter").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    $("#ykorOnHeader").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('input[name="name"]').focus(function(){
		var textContent = $('#translate').text();
		var name = $('#input-name').val();
		if (name.length > 2){
			$('#span-name').text('');
		}
		else {
			if(textContent=='EU'){
			$('#span-name').text('Нужно ввести символов: 2');
			} else {
				$('#span-name').text('Need to enter characters: 2');
			}
		}	
	});

	$('input[name="name"]').focusout(function(){
		$('#span-name').text('');
	});

	$('input[name="message"]').focus(function(){
		var textContent = $('#translate').text();
		var message = $('#input-message').val();
		if (message.length > 5){
			$('#span-name').text('');
		}
		else {
			if(textContent=='EU'){
			$('#span-message').text('Нужно ввести символов: 5');
			} else {
				$('#span-message').text('Need to enter characters: 5');
			}
		}
	});

	$('input[name="message"]').focusout(function(){
		$('#span-message').text('');
	});

	$('input[name="name"]').keyup(function(){
		var min = 2;
		var count = $('#input-name').val().length; // кол-во уже введенных символов
		var num = min - count; // кол-во символов, которое еще можно ввести
		var textContent = $('#translate').text();
		if(num > 0){
			if(textContent=='EU'){
				$('#span-name').text('Нужно ввести символов: ' + num);
			} else {
				$('#span-name').text('Need to enter characters: ' + num);
			}
		}else{
		$('#span-name').text('');
		}
	});

	$('input[name="message"]').keyup(function(){
		var min = 5;
		var count = $('#input-message').val().length; // кол-во уже введенных символов
		var num = min - count; // кол-во символов, которое еще можно ввести
		var textContent = $('#translate').text();
		if(num > 0){
			if(textContent=='EU'){
				$('#span-message').text('Нужно ввести символов: ' + num);
			} else {
				$('#span-message').text('Need to enter characters: ' + num);
			}
		}else{
		$('#span-message').text('');
		}
		checkParams();
		
	});
});

$('.popup__close').click(function() { // по клику на крестик
	$('#input-name').val('');
	$('#input-phone').val('');
	$('#input-message').val('');
	$('.popup__span_resualt').text('');
});

function checkParams() {
	var name = $('#input-name').val();
	var phone = $('#input-phone').val();
	var message = $('#input-message').val();
	if(name.length >= 2 && message.length >= 5 && phone.length != 0) {
		$('#send-mail').removeAttr('disabled');
		$('#span-button').text('')
	}	
	else {
		$('#send-mail').attr('disabled', 'disabled');
		$('#span-button').text('Заполните все поля')
	}	
}