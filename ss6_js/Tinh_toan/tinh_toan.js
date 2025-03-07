function myFunction() {
    let num1 = +document.getElementById("so1").value;
    let num2 = +document.getElementById("so2").value;
    // if (document.getElementById("pheptinh").value === "+") {
    //     let tong = num1 + num2;
    //     document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + tong);
    // }
    // if (document.getElementById("pheptinh").value === "-") {
    //     let hieu = num1 - num2;
    //     document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + hieu);
    // }
    // if (document.getElementById("pheptinh").value === "*") {
    //     let tich = num1 * num2;
    //     document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + tich);
    // }
    // if (document.getElementById("pheptinh").value === "/") {
    //     let thuong = num1 / num2;
    //     document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + thuong);
    // }


    let pheptinh = document.getElementById("pheptinh").value;
    switch (pheptinh) {
        case "+":
            let tong = num1 + num2;
            document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + tong);
            break;
        case "-":
            let hieu = num1 - num2;
            document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + hieu);
            break;
        case "*":
            let tich = num1 * num2;
            document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + tich);
            break;
        case "/":
            let thuong = num1 / num2;
            document.getElementById("result").innerHTML = ("<b>Kết quả:</b>" + thuong);
            break;
        case "default":
            document.getElementById("result").innerHTML = ("<b>Không có giá trị nào được nhập</b>");
            break;

    }
}