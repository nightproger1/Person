$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val('');
			$('#form').trigger('reset');
			$('.popup__span_resualt').text('успешно отправлено');
		});
		return false;
	});
});
// Закрыть попап «спасибо»
$('.popup__close').click(function() { // по клику на крестик
	$('.popup__span_resualt').text('');
});
// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-99-99");
});