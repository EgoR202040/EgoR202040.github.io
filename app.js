let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
	document.getElementById('error').innerText = '';
	let name = document.getElementById('user_name').value;
	let mail = document.getElementById('user_mail').value;
	let password = document.getElementById('user_pass').value;

	if(name.length() < 5){
		document.getElementById('error').innerText = 'Ошибка в имени';
	}
	if(mail.length() < 5){
		document.getElementById('error').innerText = 'Ошибка в почте';
	}
	if(password.length() < 5){
		document.getElementById('error').innerText = 'Ошибка в пароле';
	}
	let data = {
		name: name,
		mail: mail,
		password: password
	}
	tg.sendData(JSON.stringify(data))
	tg.close()
});









