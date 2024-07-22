import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    getFirestore,
    setDoc,
    addDoc,
    doc,
    collection,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBCSkaFO0y7_SrXxj1c5FYKMfFo4Cix7Pw",
    authDomain: "dang-ky-phong-hoc.firebaseapp.com",
    projectId: "dang-ky-phong-hoc",
    storageBucket: "dang-ky-phong-hoc.appspot.com",
    messagingSenderId: "464331624222",
    appId: "1:464331624222:web:c5b179136354af2cb6430f"
};

const app = initializeApp(firebaseConfig);

let database = getFirestore(app);


const thongTinDangKy = {
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
    thongTinDangKy.slhs = Number(e.target.value);
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


document.getElementById("dkButton").onclick = () =>{
    const gioMuon = `${document.getElementById("gioMuon").value} - ${document.getElementById("den").value}`;
    thongTinDangKy.gm = gioMuon;
    console.log(thongTinDangKy);
    add();
    
    // window.location.href = '../PROJECT.html';


    // console.log(document.getElementById('renderTable'));
}



//add data with id
function add() {
    
    setDoc(doc(database, "danhSachDangKy","123"), {
        tgv:thongTinDangKy.tgv,
        mgv:thongTinDangKy.mgv,
        sdt:thongTinDangKy.sdt,
        email:thongTinDangKy.email,
        ph:thongTinDangKy.ph,
        slhs:thongTinDangKy.slhs,
        nm:thongTinDangKy.nm,
        gm:thongTinDangKy.gm,
        gc:thongTinDangKy.gc,
    });
    
  }


