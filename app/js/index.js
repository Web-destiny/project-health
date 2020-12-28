let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}



var modal1 = document.getElementById("my_modal1");
 var btn1 = document.getElementById("btn_modal_window1");
 var span1 = document.getElementsByClassName("close_modal_window1")[0];

 btn1.onclick = function () {
    modal1.style.display = "block"; // КЛИК ПО КНОПКЕ С ОПИСАНИЕМ РЕЦЕПТА
 }

 span1.onclick = function () {
    modal1.style.display = "none"; // КЛИК ПО КРЕСТИКУ
 }

 window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}




var modal2 = document.getElementById("my_modal2");
 var btn2 = document.getElementById("btn_modal_window2");
 var span2 = document.getElementsByClassName("close_modal_window2")[0];

 btn2.onclick = function () {
    modal2.style.display = "block";
 }

 span2.onclick = function () {
    modal2.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


var modal3 = document.getElementById("my_modal3");
 var btn3 = document.getElementById("btn_modal_window3");
 var span3 = document.getElementsByClassName("close_modal_window3")[0];

 btn3.onclick = function () {
    modal3.style.display = "block";
 }

 span3.onclick = function () {
    modal3.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}



var modal4 = document.getElementById("my_modal4");
 var btn4 = document.getElementById("btn_modal_window4");
 var span4 = document.getElementsByClassName("close_modal_window4")[0];

 btn4.onclick = function () {
    modal4.style.display = "block";
 }

 span4.onclick = function () {
    modal4.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}



var modal5 = document.getElementById("my_modal5");
 var btn5 = document.getElementById("btn_modal_window5");
 var span5 = document.getElementsByClassName("close_modal_window5")[0];

 btn5.onclick = function () {
    modal5.style.display = "block";
 }

 span5.onclick = function () {
    modal5.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}



var modal6 = document.getElementById("my_modal6");
 var btn6 = document.getElementById("btn_modal_window6");
 var span6 = document.getElementsByClassName("close_modal_window6")[0];

 btn6.onclick = function () {
    modal6.style.display = "block";
 }

 span6.onclick = function () {
    modal6.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}


var modal7 = document.getElementById("my_modal7");
 var btn7 = document.getElementById("btn_modal_window7");
 var span7 = document.getElementsByClassName("close_modal_window7")[0];

 btn7.onclick = function () {
    modal7.style.display = "block";
 }

 span7.onclick = function () {
    modal7.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}


var modal8 = document.getElementById("my_modal8");
 var btn8 = document.getElementById("btn_modal_window8");
 var span8 = document.getElementsByClassName("close_modal_window8")[0];

 btn8.onclick = function () {
    modal8.style.display = "block";
 }

 span8.onclick = function () {
    modal8.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
}

var modal9 = document.getElementById("my_modal9");
 var btn9 = document.getElementById("btn_modal_window9");
 var span9 = document.getElementsByClassName("close_modal_window9")[0];

 btn9.onclick = function () {
    modal9.style.display = "block";
 }

 span9.onclick = function () {
    modal9.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
}


var modal10 = document.getElementById("my_modal10");
 var btn10 = document.getElementById("btn_modal_window10");
 var span10 = document.getElementsByClassName("close_modal_window10")[0];

 btn10.onclick = function () {
    modal10.style.display = "block";
 }

 span10.onclick = function () {
    modal10.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
}

var modal11 = document.getElementById("my_modal11");
 var btn11 = document.getElementById("btn_modal_window11");
 var span11 = document.getElementsByClassName("close_modal_window11")[0];

 btn11.onclick = function () {
    modal11.style.display = "block";
 }

 span11.onclick = function () {
    modal11.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
}

var modal12 = document.getElementById("my_modal12");
 var btn12 = document.getElementById("btn_modal_window12");
 var span12 = document.getElementsByClassName("close_modal_window12")[0];

 btn12.onclick = function () {
    modal12.style.display = "block";
 }

 span12.onclick = function () {
    modal12.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal12) {
        modal12.style.display = "none";
    }
}


var modal13 = document.getElementById("my_modal13");
 var btn13 = document.getElementById("btn_modal_window13");
 var span13 = document.getElementsByClassName("close_modal_window13")[0];

 btn13.onclick = function () {
    modal13.style.display = "block";
 }

 span13.onclick = function () {
    modal13.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal13) {
        modal13.style.display = "none";
    }
}

var modal14 = document.getElementById("my_modal14");
 var btn14 = document.getElementById("btn_modal_window14");
 var span14 = document.getElementsByClassName("close_modal_window14")[0];

 btn14.onclick = function () {
    modal14.style.display = "block";
 }

 span14.onclick = function () {
    modal14.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal14) {
        modal14.style.display = "none";
    }
}

var modal15 = document.getElementById("my_modal15");
 var btn15 = document.getElementById("btn_modal_window15");
 var span15 = document.getElementsByClassName("close_modal_window15")[0];

 btn15.onclick = function () {
    modal15.style.display = "block";
 }

 span15.onclick = function () {
    modal15.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal15) {
        modal15.style.display = "none";
    }
}


var modal16 = document.getElementById("my_modal16");
 var btn16 = document.getElementById("btn_modal_window16");
 var span16 = document.getElementsByClassName("close_modal_window16")[0];

 btn16.onclick = function () {
    modal16.style.display = "block";
 }

 span16.onclick = function () {
    modal16.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal16) {
        modal16.style.display = "none";
    }
}



