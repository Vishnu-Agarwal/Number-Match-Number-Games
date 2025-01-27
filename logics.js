function box1() {
    v = document.getElementById('b1').value;
    b = document.getElementById('b2').value;
    if (b == ' ') {
        document.getElementById('b2').value = v;
        document.getElementById('b1').value = ' '
    }
    v = document.getElementById('b1').value;
    b = document.getElementById('b4').value;
    if (b == ' ') {
        document.getElementById('b4').value = v;
        document.getElementById('b1').value = ' '
    }
    win()
}
function box2() {
    v = document.getElementById('b2').value;
    b = document.getElementById('b1').value;
    if (b == ' ') {
        document.getElementById('b1').value = v;
        document.getElementById('b2').value = ' '
    }
    v = document.getElementById('b2').value;
    b = document.getElementById('b3').value;

    if (b == ' ') {
        document.getElementById('b3').value = v;
        document.getElementById('b2').value = ' '
    }
    v = document.getElementById('b2').value;
    b = document.getElementById('b5').value;

    if (b == ' ') {
        document.getElementById('b5').value = v;
        document.getElementById('b2').value = ' '
    }
    win()
}
function box3() {
    v = document.getElementById('b3').value;
    b = document.getElementById('b2').value;
    if (b == ' ') {
        document.getElementById('b2').value = v;
        document.getElementById('b3').value = ' '
    }
    v = document.getElementById('b3').value;
    b = document.getElementById('b6').value;
    if (b == ' ') {
        document.getElementById('b6').value = v;
        document.getElementById('b3').value = ' '
    }
    win()
}
function box4() {
    v = document.getElementById('b4').value;
    b = document.getElementById('b1').value;
    if (b == ' ') {
        document.getElementById('b1').value = v;
        document.getElementById('b4').value = ' '
    }
    v = document.getElementById('b4').value;
    b = document.getElementById('b5').value;
    if (b == ' ') {
        document.getElementById('b5').value = v;
        document.getElementById('b4').value = ' '
    }
    v = document.getElementById('b4').value;
    b = document.getElementById('b7').value;
    if (b == ' ') {
        document.getElementById('b7').value = v;
        document.getElementById('b4').value = ' '
    }
    win()
}
function box5() {
    v = document.getElementById('b5').value;
    b = document.getElementById('b2').value;
    if (b == ' ') {
        document.getElementById('b2').value = v;
        document.getElementById('b5').value = ' '
    }
    v = document.getElementById('b5').value;
    b = document.getElementById('b4').value;

    if (b == ' ') {
        document.getElementById('b4').value = v;
        document.getElementById('b5').value = ' '
    }
    v = document.getElementById('b5').value;
    b = document.getElementById('b6').value;

    if (b == ' ') {
        document.getElementById('b6').value = v;
        document.getElementById('b5').value = ' '
    }
    v = document.getElementById('b5').value;
    b = document.getElementById('b8').value;

    if (b == ' ') {
        document.getElementById('b8').value = v;
        document.getElementById('b5').value = ' '
    }
    win()
}
function box6() {
    v = document.getElementById('b6').value;
    b = document.getElementById('b3').value;
    if (b == ' ') {
        document.getElementById('b3').value = v;
        document.getElementById('b6').value = ' '
    }
    v = document.getElementById('b6').value;
    b = document.getElementById('b5').value;
    if (b == ' ') {
        document.getElementById('b5').value = v;
        document.getElementById('b6').value = ' '
    }
    v = document.getElementById('b6').value;
    b = document.getElementById('b9').value;
    if (b == ' ') {
        document.getElementById('b9').value = v;
        document.getElementById('b6').value = ' '
    }
    win()
}
function box7() {
    v = document.getElementById('b7').value;
    b = document.getElementById('b4').value;
    if (b == ' ') {
        document.getElementById('b4').value = v;
        document.getElementById('b7').value = ' '
    }
    v = document.getElementById('b7').value;
    b = document.getElementById('b8').value;
    if (b == ' ') {
        document.getElementById('b8').value = v;
        document.getElementById('b7').value = ' '
    }
    win()
}
function box8() {
    v = document.getElementById('b8').value;
    b = document.getElementById('b5').value;
    if (b == ' ') {
        document.getElementById('b5').value = v;
        document.getElementById('b8').value = ' '
    }
    v = document.getElementById('b8').value;
    b = document.getElementById('b7').value;

    if (b == ' ') {
        document.getElementById('b7').value = v;
        document.getElementById('b8').value = ' '
    }
    v = document.getElementById('b8').value;
    b = document.getElementById('b9').value;

    if (b == ' ') {
        document.getElementById('b9').value = v;
        document.getElementById('b8').value = ' '
    }
    win()
}
function box9() {
    v = document.getElementById('b9').value;
    b = document.getElementById('b8').value;
    if (b == ' ') {
        document.getElementById('b8').value = v;
        document.getElementById('b9').value = ' '
    }
    v = document.getElementById('b9').value;
    b = document.getElementById('b6').value;
    if (b == ' ') {
        document.getElementById('b6').value = v;
        document.getElementById('b9').value = ' '
    }
    win()
}
function win() {
    


    var a = document.getElementById('b1').value;
    var b = document.getElementById('b2').value;
    var c = document.getElementById('b3').value;
    var d = document.getElementById('b4').value;
    var e = document.getElementById('b5').value;
    var f = document.getElementById('b6').value;
    var g = document.getElementById('b7').value;
    var h = document.getElementById('b8').value;
    var i = document.getElementById('b9').value;
    if (a == '1' && b == '2' && c == '3' && d == '4' && e == '5' && f == '6' && g == '7' && h == '8' && i == ' ') {
        alert("win");
    }
}
function reset() {
    location.reload();
}
var   arr = [];
window.onload = function () {
    for(var i=1;i<10;i++)
        {
            var x=Math.floor(Math.random(1,9)*9+1)-1;
            if(arr.includes(x))
            {


                i--;
                continue;
            }
            else
            {
                arr[i-1]=x;
            }
        }
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == 0) {
            arr[i] = ' '
        }
    document.getElementsByClassName('btn')[i].value = arr[i];
    }
}