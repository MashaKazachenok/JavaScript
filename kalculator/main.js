

var A, B, C;
var action = " ";

function getValue(id) {
    var res = document.getElementById(id).value - 0;

    if (!isNaN(res)) {
        return res;
    }

    alert("В элементе " + id + " не численное значение!!!");
}

function setValue(znash) {
    document.getElementById("okno").value = 0;
   
}

function PutNum(val) {
    document.getElementById("okno").value = document.getElementById("okno").value + val) - 0;

}

function plus() {
    A = getValue("okno");
    setValue("okno");
    action = "+";
}

function sub() {
    A = getValue("okno");
    setValue("okno");
    action = "-";
}

function mult() {
    A = getValue("okno");
    setValue("okno");
    action = "*";
}

function div() {
    A = getValue("okno");
    setValue("okno");
    action = "/";
}

function clr() {
    setValue("okno");
}

function otr() {
    document.getElementById("okno").value = document.getElementById("okno").value * -1;
}


function calculate() {
    B = getValue("okno");

    switch (action) {
        case "+":
            C = A + B;
            break;
        case "-":
            C = A - B;
            break;
        case "*":
            C = A * B;
            break;
        case "/":
            if (B == 0) {
                alert("Нельзя делить на ноль!");
            } else {
                C = A / B;
            }
            break;
    }

   document.getElementById("okno").value = C;
}

window.onload = function () {

    for (var i = 0; i < 10; i++) {
        (function (val) {
            document.getElementById("but_" + val).onclick = function () {
                PutNum(val);
            }
        })(i);
    }

    document.getElementById("plus").addEventListener("click", plus);
    document.getElementById("calculate").addEventListener("click", calculate);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("mult").addEventListener("click", mult);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("clr").addEventListener("click", clr);
    document.getElementById("otr").addEventListener("click", otr);
}