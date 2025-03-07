document.getElementById("hinh").addEventListener("change", function () {
    let choose = this.value;
    let rtg = document.getElementById("rectangle");
    let square = document.getElementById("square");

    rtg.classList.add("hidden");
    square.classList.add("hidden");

    switch (choose) {
        case "chu_nhat":
            rtg.classList.remove("hidden");
            break;
        case "vuong":
            square.classList.remove("hidden");
            break;
    }
});

function hinhhoc() {
    let choose = document.getElementById("hinh").value;
    switch (choose) {
        case "chu_nhat":
            let cd = +document.getElementById("cd").value;
            let cr = +document.getElementById("cr").value;
            let p_hcn = (cd + cr) * 2;
            let s_hcn = cd * cr;
            document.getElementById("cv").innerHTML = ("Chu vi HCN: " + p_hcn);
            document.getElementById("s").innerHTML = ("Dien tich HCN: " + s_hcn);
            break;


        case "vuong":
            let c = +document.getElementById("c").value;
            let p_hv = c * 4;
            let s_hv = c * c;
            document.getElementById("cv").innerHTML = ("Chu vi HV: " + p_hv);
            document.getElementById("s").innerHTML = ("Dien tich HV: " + s_hv);
            break;

        default:
            document.getElementById("cv").innerHTML=("");
            document.getElementById("s").innerHTML=("");
            break;
    }
}