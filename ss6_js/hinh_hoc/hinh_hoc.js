document.getElementById("hinh").addEventListener("change", function () {
    let choose = this.value;
    let hinhChuNhat = document.getElementById("hinhChuNhat");
    let hinhVuong = document.getElementById("hinhVuong");

    hinhChuNhat.classList.add("hidden");
    hinhVuong.classList.add("hidden");

    switch (choose) {
        case "chuNhat":
            hinhChuNhat.classList.remove("hidden");
            break;
        case "vuong":
            hinhVuong.classList.remove("hidden");
            break;
    }
});

function hinhhoc() {
    let choose = document.getElementById("hinh").value;
    switch (choose) {
        case "chuNhat":
            let chieuDai = +document.getElementById("chieuDai").value;
            let chieuRong = +document.getElementById("chieuRong").value;
            let pHinhchunnhat = (chieuDai + chieuRong) * 2;
            let sHinhchunnhat = chieuDai * chieuRong;
            document.getElementById("p").innerHTML = ("Chu vi HCN: " + pHinhchunnhat);
            document.getElementById("s").innerHTML = ("Dien tich HCN: " + sHinhchunnhat);
            break;


        case "vuong":
            let c = +document.getElementById("canh").value;
            let pHinhvuong = c * 4;
            let sHinhvuong = c * c;
            document.getElementById("p").innerHTML = ("Chu vi HV: " + pHinhvuong);
            document.getElementById("s").innerHTML = ("Dien tich HV: " + sHinhvuong);
            break;

        default:
            document.getElementById("p").innerHTML=("");
            document.getElementById("s").innerHTML=("");
            break;
    }
}