let tg = window.Telegram.WebApp;
tg.expand()

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#2cab37'

let submit = document.getElementById('submit')

submit.addEventListener("click",function(){
    tg.close();
})