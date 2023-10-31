const num1Input = document.querySelector("#num-1");
const num2Input = document.querySelector("#num-2");
const result = document.querySelector("#result");
const button = document.querySelector(".bt.margin-input")
const optionDom = document.querySelectorAll(`input[type="radio"]`)
const thongbaoDom = document.querySelector("#thong-bao");
let checkNum1 = false;
let checkNum2 = false;
// ------------------INIT---------------
num1Input.value = "";
num2Input.value = "";
result.value = "";


let number1 = "*", number2 = "*";
let option = "0";

for (let i = 0; i < optionDom.length; i++) {
    optionDom[i].checked = false;
}

// -----------------TO DO--------------------


for (let i = 0; i < optionDom.length; i++) {
    optionDom[i].addEventListener("change", (e) => {
        option = e.target.value;
    })
}


num1Input.addEventListener("input", (e) => {
    number1 = e.target.value;

})
num1Input.addEventListener("blur", (e) => {

    console.log(number1);
    if (isNaN(number1) || number1 == "") {
        thongbaoDom.innerHTML = `<p style = "color: red">Giá trị nhập ở ô <i>Số thứ nhất</i> không phải là số</p>`;
        checkNum1 = false;
    }
    else {
        thongbaoDom.innerHTML = "";
        checkNum1 = true;
    }
})


num2Input.addEventListener("input", (e) => {
    number2 = e.target.value;
})
num2Input.addEventListener("blur", (e) => {
    if (isNaN(number2) || number2 == "") {
        thongbaoDom.innerHTML = `<p style = "color: red">Giá trị nhập ở ô <i>Số thứ hai</i> không phải là số</p>`;
        checkNum2 = false;
    }
    else {
        thongbaoDom.innerHTML = "";
        checkNum2 = true;
    }
})


button.addEventListener("click", (e) => {

    if (checkNum1 && checkNum2) {
        thongbaoDom.innerHTML = "";

        let sum;
        switch (option) {
            case "0":
                thongbaoDom.innerHTML = `<p style = "color: red">Vui lòng bạn chọn phép tính</p>`;
                break;
            case "1":
                sum = Number(number1) + Number(number2);
                break;
            case "2":
                sum = Number(number1) - Number(number2);
                break;
            case "3":
                sum = Number(number1) * Number(number2);
                break;
            case "4":
                sum = Number(number1) / Number(number2);
                break;

        }
        if (option != "0") {
            result.value = `${sum}`;
            thongbaoDom.innerHTML = `<p style = "color: green">Dữ liệu hợp lệ</p>`;
        }
    }
    else {
        thongbaoDom.innerHTML = `<p style = "color: red">Dữ liệu bạn cung cấp không hợp lệ!</p>`;
    }

})
