document.addEventListener('DOMContentLoaded', function () {
    var findFormRegister = window.document.getElementById("register");
    if (findFormRegister) {
        contentLoaded()
    } else {
        console.log(123123)
        // chrome.runtime.sendMessage({type:"refresh"});
    }
});

function contentLoaded() {
    console.log("DOMContentLoaded");
    var d = new Date();
    var n = d.getTime();
    console.log("Start load at: " + n);

    var inputList = window.document.querySelectorAll('input');
    for (var i=0; i<inputList.length;i++){
        if (inputList[i].placeholder === 'your name') {
            inputList[i].value = 'HO ANH QUAN'
        }

        if (inputList[i].placeholder === 'email') {
            inputList[i].value = 'skyvip1805@gmail.com'
        }

        if (inputList[i].placeholder === 'mobile phone') {
            inputList[i].value = '09092881775'
        }
    }

    var radioLocation = window.document.getElementById('area_fukuoka');
    if (radioLocation) {
        radioLocation.checked = true
    }

    var checkBoxAgree = window.document.getElementById('agree');
    if (checkBoxAgree) {
        checkBoxAgree.checked = true
    }

    window.onkeydown = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;
        console.log("KEY: " + key);
        switch (key) {
            case 13:
                var btnCommit = window.document.getElementsByName("commit");
                console.log(btnCommit)
                if (btnCommit && btnCommit[0].value == 'Continue') {
                    setTimeout(() => {
                        btnCommit[0].click()
                    }, 50)
                }
                break;
            case 17:
            case 82:
                break;
            case undefined:
            	break;
                var inputList = window.document.querySelectorAll('input');
                var detectedFill = 1
                for (var i=0; i<inputList.length;i++){
                    if (inputList[i].placeholder === 'email' && inputList[i].value !== '') {
                        console.log('email')
                        detectedFill = detectedFill + 1
                    }
                }
                console.log(detectedFill)
                if (detectedFill > 1) {
                    var btnCommit = window.document.getElementsByName("commit");
                    if (btnCommit && btnCommit[0].value == 'Continue') {
                        setTimeout(() => {
                            btnCommit[0].click()
                        }, 50)
                    }
                }
            default:
                break;
        }
    }
}

function onElementFocused(e)
{
    if (e && e.target)
        document.activeElement = e.target == document ? null : e.target;
}