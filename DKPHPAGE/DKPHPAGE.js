




export const thongTinDangKy = {
    tgv:"",
	mgv:"",
	sdt:0,
	email:"",
	ph:"",
	slhs:0,
	nm:"",
	gm:"",
	gc:"",
}


let renderTable;

document.getElementById("thongTinGV").onchange = (e) => {

    thongTinDangKy.tgv = e.target.value;
}

document.getElementById("maGV").onchange = (e) => {
    thongTinDangKy.mgv = e.target.value;
}

document.getElementById("sdt").onchange = (e) => {
    thongTinDangKy.sdt = e.target.value;
}

document.getElementById("email").onchange = (e) => {
    thongTinDangKy.email = e.target.value;
}

document.getElementById("phongHoc").onchange = (e) => {
    thongTinDangKy.ph = e.target.value;
}

document.getElementById("soLuongHocSinh").onchange = (e) => {
    thongTinDangKy.slhs = e.target.value;
}

document.getElementById("ngayMuon").onchange = (e) => {
    thongTinDangKy.nm = e.target.value;
}

document.getElementById("gioMuon").onchange = (e) => {
    thongTinDangKy.gm = e.target.value;
}

document.getElementById("den").onchange = (e) => {
    thongTinDangKy.den = e.target.value;
}

document.getElementById("noteDkhp").onchange = (e) => {
    thongTinDangKy.gc = e.target.value;
}


// document.getElementById("dkButton").onclick = () =>{
//     const gioMuon = `${document.getElementById("gioMuon").value} - ${document.getElementById("den").value}`;
//     thongTinDangKy.gm = gioMuon;

//     //div Tong
//     const render = document.createElement('div')

//     // div THANH PHAN
//     const maDangKy = document.createElement('div')
//     maDangKy.innerHTML = '1';
//     const phong = document.createElement('div')
//     phong.innerHTML = '11';
//     const tenGV = document.createElement('div')
//     tenGV.innerHTML = 'Thảo Nhi';
//     const ngayMuon = document.createElement('div')
//     ngayMuon.innerHTML = '12/03/2024';
//     const thoiGianMuon = document.createElement('div')
//     thoiGianMuon.innerHTML = '13:30-16:30';

//     //div boc 2 nut chi tiet va huy
//     const wrapperButton = document.createElement('div')
    
//     // div boc nut chi tiet
//     const wrapperButtonChiTiet = document.createElement('div')
//     // div nut chi tiet
//     const containerButtonChiTiet = document.createElement('div')
//     // nut chi tiet
//     const buttonChiTiet = document.createElement('button');
//     buttonChiTiet.innerHTML='Chi Tiet'


//     // div boc nut huy
//     const wrapperButtonHuy = document.createElement('div')
    
//     // div nut huy
//     const containerButtonHuy = document.createElement('div')

//     // nut huy
//     const buttonHuy = document.createElement('button')
//     buttonHuy.innerHTML='Huy'
    

//     containerButtonChiTiet.appendChild(buttonChiTiet);
//     wrapperButtonChiTiet.appendChild(containerButtonChiTiet);

//     containerButtonHuy.appendChild(buttonHuy);
//     wrapperButtonHuy.appendChild(containerButtonHuy);
//     wrapperButton.appendChild(wrapperButtonHuy)



//     wrapperButton.appendChild(wrapperButtonChiTiet);


//     // bo tat ca div vao
//     render.appendChild(maDangKy);
//     render.appendChild(phong);
//     render.appendChild(tenGV);
//     render.appendChild(ngayMuon);
//     render.appendChild(thoiGianMuon);
//     render.appendChild(wrapperButton);

//     renderTable= render;
//     console.log(renderTable);
//     // window.location.href = '../PROJECT.html';

//     // document.getElementById('renderTable').appendChild(render);

//     // console.log(document.getElementById('renderTable'));
// }




