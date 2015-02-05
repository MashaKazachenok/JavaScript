
var A, B, C;
var action = "+";

function getValue() {
    var res = document.getElementById("okno").value - 0;

    if (!isNaN(res)) {
        return res;
    }

    alert("В элементе " + id + " не численное значение!!!");
}


function setValue(znash) {
  document.getElementById("okno").value = znash;

}

function PutNum(val) {
    var Zn = getValue();
    setValue((Zn.toString() + val) - 0);

 }   

function plus() {
    A = getValue();
    setValue(0);
    action = "+";
}

function sub() {
    A = getValue();
    setValue(0);
    action = "-";
}

function mult() {
    A = getValue();
    setValue(0);
    action = "*";
}

function div() {
    A = getValue();
    setValue(0);
    action = "/";
}

function clr() {
    setValue(0);
}

function otr() {
    setValue(getValue() * -1);
}


function calculate() {
    B = getValue();

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

   setValue(C);
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