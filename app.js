let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

tg.MainButton.setText("Отправить");
tg.MainButton.show();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	let name = document.getElementById("user_name");
	let email = document.getElementById("user_mail");
	let password = document.getElementById("user_pass");
	data = {
		name: name,
		email:email,
		password:password
	}
	tg.sendData(JSON.stringify(data));
	tg.close()
});








