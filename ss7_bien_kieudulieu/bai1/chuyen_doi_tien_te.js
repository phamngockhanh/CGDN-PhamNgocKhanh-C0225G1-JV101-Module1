function chuyenDoiTienTe(){
    let soTien = +document.getElementById("soTien").value;
    let tuNuoc = document.getElementById("tuNuoc").value;
    let sangNuoc = document.getElementById("sangNuoc").value;
    let inRa =  document.getElementById('ketQua');
    if(tuNuoc==="vietNam" ){
        if(sangNuoc==="vietNam"){
            inRa.innerText=(`Kết quả là: ${soTien}`);
        }
        else if(sangNuoc==="my"){
        let ketQua=soTien/25280;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="lao"){
            let ketQua=soTien*0.85;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="campuchia"){
            let ketQua=soTien*0.16;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
    }
    if(tuNuoc==="my" ){
        if(sangNuoc==="vietNam"){
            let ketQua=soTien*25280;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="my"){
            inRa.innerText=(`Kết quả là: ${soTien}`);
        }
        else if(sangNuoc==="lao"){
            let ketQua=soTien*21655;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="campuchia"){
            let ketQua=soTien*8000;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
    }
    if(tuNuoc==="lao" ){
        if(sangNuoc==="vietNam"){
            let ketQua=soTien*1.18;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="my"){
            let ketQua=soTien/21655;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="lao"){
            inRa.innerText=(`Kết quả là: ${soTien}`);
        }
        else if(sangNuoc==="campuchia"){
            let ketQua=soTien*0.19;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
    }
    if(tuNuoc==="campuchia" ){
        if(sangNuoc==="vietNam"){
            let ketQua=soTien*6;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="my"){
            let ketQua=soTien/4000;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="lao"){
            let ketQua=soTien*5.4;
            inRa.innerText=(`Kết quả là: ${ketQua}`);
        }
        else if(sangNuoc==="campuchia"){
            inRa.innerText=(`Kết quả là: ${soTien}`);
        }
    }
}