function moNgoac(){
    document.getElementById("nhapSo").value+="(";
}
function dongNgoac(){
    document.getElementById("nhapSo").value+=")";
}
function layDu(){
    document.getElementById("nhapSo").value+="%";
}
function lamMoi(){
    document.getElementById("nhapSo").value="";
}
function so0(){
    document.getElementById("nhapSo").value+="0";
}
function so1(){
    document.getElementById("nhapSo").value+="1";
}
function so2(){
    document.getElementById("nhapSo").value+="2";
}
function so3(){
    document.getElementById("nhapSo").value+="3";
}
function so4(){
    document.getElementById("nhapSo").value+="4";
}
function so5(){
    document.getElementById("nhapSo").value+="5";
}
function so6(){
    document.getElementById("nhapSo").value+="6";
}
function so7(){
    document.getElementById("nhapSo").value+="7";
}
function so8(){
    document.getElementById("nhapSo").value+="8";
}
function so9(){
    document.getElementById("nhapSo").value+="9";
}
function phepTru(){
    document.getElementById("nhapSo").value+="-";
}
function phepCong(){
    document.getElementById("nhapSo").value+="+";
}
function phepNhan(){
    document.getElementById("nhapSo").value+="*";
}
function phepChia(){
    document.getElementById("nhapSo").value+="/";
}
function cham(){
    document.getElementById("nhapSo").value+=".";
}

function mayTinhMoRong(){
    try {
        let bieuThuc = document.getElementById("nhapSo").value;
        let ketQua = eval(bieuThuc); // Tính toán biểu thức
        document.getElementById("nhapSo").value = ketQua; // Gán kết quả vào ô nhập
    } catch (error) {
        document.getElementById("nhapSo").value = "Lỗi!";
    }
}