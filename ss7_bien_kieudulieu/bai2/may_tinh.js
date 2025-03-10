function tinhTong(){
    let so1 = +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let tong = so1+so2;
    document.getElementById("ketQua").innerText=(`Kết quả: ${tong}`)
}
function tinhHieu(){
    let so1 = +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let  hieu = so1-so2;
    document.getElementById("ketQua").innerText=(`Kết quả: ${hieu}`)
}
function tinhTich(){
    let so1 = +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let tich = so1*so2;
    document.getElementById("ketQua").innerText=(`Kết quả: ${tich}`)
}
function tinhThuong(){
    let so1 = +document.getElementById("so1").value;
    let so2= +document.getElementById("so2").value;
    let thuong = so1/so2;
    document.getElementById("ketQua").innerText=(`Kết quả: ${thuong}`)
}