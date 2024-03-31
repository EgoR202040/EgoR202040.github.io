let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Отправить");
tg.MainButton.show();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	let name = document.getElementById("user_name").value;
	let email = document.getElementById("user_mail").value;
	let password = document.getElementById("user_pass").value;
	data = {
		name: name,
		email:email,
		password:password
	}
	tg.sendData(JSON.stringify(data));
	tg.close()
});

$('.error-page').hide(0);

$('.login-button , .no-access').click(function(){
  $('.login').slideUp(500);
  $('.error-page').slideDown(1000);
});

$('.try-again').click(function(){
  $('.error-page').hide(0);
  $('.login').slideDown(1000);
});






