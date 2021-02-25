//
// function fillForm() {
//
// 	var inputList = window.document.querySelectorAll('input');
// 	for (var i=0; i<inputList.length;i++){
// 		if (inputList[i].placeholder === 'your name') {
// 			inputList[i].value = 'VO THAI DUONG'
// 		}
// 		if (inputList[i].placeholder === 'email') {
// 			inputList[i].value = 'vothaiduong1991@gmail.com'
// 		}
// 		if (inputList[i].placeholder === 'mobile phone' && !inputList[i].classList.contains('d-none')) {
// 			inputList[i].value = '09063972553'
// 		}
// 	}
//
// 	var classFormRadio = window.document.getElementsByClassName("form-radio")[0]
// 	console.log('dung class tim radio', classFormRadio)
// 	if (classFormRadio) {
// 		var listRadio = classFormRadio.querySelectorAll("input");
// 		console.log(listRadio)
// 		if (listRadio.length) {
// 			for (var i=0; i<listRadio.length;i++){
// 				if (listRadio[i].value === 'fukuoka') {
// 					console.log('fukuoka')
// 					listRadio[i].checked = true
// 				}
// 			}
// 		}
// 	}
//
// 	var checkBoxAgree = window.document.getElementById('agree');
// 	if (checkBoxAgree) {
// 		checkBoxAgree.checked = true
// 	}
//
// 	// var btnCommit = window.document.getElementsByName("commit");
// 	// console.log(btnCommit)
// 	// if (btnCommit) {
// 	// 	console.log(2222)
// 	// 	setTimeout(() => {
// 	// 		console.log(3333)
// 	// 		btnCommit[0].click()
// 	// 		console.log(44444)
// 	// 	}, 100)
// 	// }
// 	//
// 	// var button = window.document.getElementById("commit");
// 	// var myfunc = function(){
// 	// 	alert('click nhe')
// 	// }
// 	// button.addEventListener("click",myfunc);
// }
//
// chrome.runtime.sendMessage({
//     action: "eformFormFill",
//     source: fillForm()
// });