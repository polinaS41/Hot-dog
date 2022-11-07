function helper() {
	alert(' skype:helper \n telegam:@helper \n tel:8995345235');
}
function peremen() {
	var sk="skype:helper";
	var tg="telegam:@helper ";
	var tl="tel:8995345235";
	alert(sk + '\n' + tg + '\n' +tl);
}
function calc() {
	var num = parseFloat(prompt('Введите первое число'));
	var num2 = parseFloat(prompt('Введите второе число'));
	var a =num+num2;
	var b  = num-num2 ;
	var c =  num*num2 ;
	var d = num/num2;
	alert('Сумма ' + num + '+' + num2 + '='+ a + '\n'
	 +'Разность ' + num + '-' + num2 + '=' + b + '\n'
	  + 'Произведение ' + num + '*' + num2 + '=' + c + '\n'
	   + 'Частное ' + num + '/' + num2 + '=' + d );
}
function stroka() {
	var text = prompt('Введите заметку');
	var l = text.length;
	alert('Длина текста = ' + l + '\n' 
	);
	var t = document.getElementById('whatsapp');
	t.style.opacity = "1";

}
function metodu() {
	var text = prompt('Введите текст ');
	alert(text.indexOf('13'));
	var big = text.toUpperCase();
	alert(big);
	var small = text.toLowerCase()
	alert(small);
	var zoom = text.replace('молоко','йогурт');
	alert(zoom);
}
function on_enter(){
	var enter = document.getElementById('site');
	enter.style.padding = "40px";
	enter.style.borderRadius = "25px";
	enter.style.border ="14px dotted red"  ;

}
function on_leave(){
	var leave = document.getElementById('site');
	leave.style.padding = "20px";
	leave.style.borderRadius = "0px";
	leave.style.border = "7px dotted  yellow ";
}

function change_style() {
	 b  = document.getElementById('zagolovok');
	if (window.getComputedStyle(b).color == "rgb(240, 230, 140)")
	{
		b.style.color = "pink";
	}
	else 
		b.style.color = "rgb(240, 230, 140)";

}
function star(k) {
	var ids = ["star_f1","star_f2","star_f3","star_f4","star_f5"];
	for(let i = 0; i < k ; i++ )
		{
			var b = ids[i];
			var a = document.getElementById(b)
			a.src = "star_1.png";
		}
}
function star2() {
	var ids = ["star_f1","star_f2","star_f3","star_f4","star_f5"];
	for(let i = 0; ids.length; i++  )
	{
		var b = ids[i];
		var a = document.getElementById(b);
		a.src = "star_2.png";
	}
}
function note() {
	var r = document.getElementById('modal');
	r.style.display ="block";
}

function closen() {
	var t = document.getElementById('modal');
	t.style.display ="none";
}





















