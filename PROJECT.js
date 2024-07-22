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
// const dkphRef = collection(database, "dangKyPhongHoc");

// Get all data
async function getAllData() {
    const querySnapshot = await getDocs(collection(database, "danhSachDangKy"));
    var danhSachThongTinDangKy = [];
    await querySnapshot.forEach((doc) => {
        danhSachThongTinDangKy.push(doc.data());
    });
    console.log(danhSachThongTinDangKy);

    danhSachThongTinDangKy.forEach((item)=>{
        renderFunction(item);
    })

}
getAllData();








const dangKyButton = document.getElementById("dangKyButton");

dangKyButton.addEventListener("click", () => {
  window.location.href = "./DKPHPAGE/DKPHPAGE.html";
});

const renderTable = document.getElementById("renderTable");



const mangThongTinDangKy = [
  {
    tgv: "Hai",
    mgv: "22200212",
    sdt: "5767576",
    email: "minhhai",
    ph: "4A",
    slhs: 30,
    nm: "22/07/2024",
    gm: "3:00-5:00",
    gc: "hello world",
  },
  {
    tgv: "nguyen",
    mgv: "765756",
    sdt: "675676567",
    email: "theo",
    ph: "5B",
    slhs: 20,
    nm: "23/07/2024",
    gm: "7:00-8:00",
    gc: "dgggggg",
  },
  {
    tgv: "nguyen",
    mgv: "765756",
    sdt: "675676567",
    email: "theo",
    ph: "5B",
    slhs: 20,
    nm: "23/07/2024",
    gm: "7:00-8:00",
    gc: "dgggggg",
  },
];

const renderFunction = ({
    tgv,ph,nm,gm
}) => {
  //div Tong
  const render = document.createElement("div");
  render.setAttribute("class", "wrapper-render");
  // div THANH PHAN
  const maDangKy = document.createElement("div");
  maDangKy.setAttribute("class", "render-madk");
  maDangKy.innerHTML = "1";
  const phong = document.createElement("div");
  phong.setAttribute("class", "render-phong");
  phong.innerHTML = ph;
  const tenGV = document.createElement("div");
  tenGV.setAttribute("class", "render-ten");
  tenGV.innerHTML = tgv;
  const ngayMuon = document.createElement("div");
  ngayMuon.setAttribute("class", "render-ngay");
  ngayMuon.innerHTML = nm;
  const thoiGianMuon = document.createElement("div");
  thoiGianMuon.setAttribute("class", "render-thoi-gian");
  thoiGianMuon.innerHTML = gm;

  //div boc 2 nut chi tiet va huy
  const wrapperButton = document.createElement("div");
  wrapperButton.setAttribute("class", "render-wrapper-button");
  // div boc nut chi tiet
  const wrapperButtonChiTiet = document.createElement("div");
  wrapperButtonChiTiet.setAttribute("class", "wrapper-render-button-chiTiet");
  // div nut chi tiet
  const containerButtonChiTiet = document.createElement("div");
  containerButtonChiTiet.setAttribute("class", "render-button-chiTiet");
  // nut chi tiet
  const buttonChiTiet = document.createElement("button");
  buttonChiTiet.innerHTML = "Chi Tiet";

  // div boc nut huy
  const wrapperButtonHuy = document.createElement("div");
  wrapperButtonHuy.setAttribute("class", "wrapper-render-button-huy");
  // div nut huy
  const containerButtonHuy = document.createElement("div");
  containerButtonHuy.setAttribute("class", "render-button-huy");
  // nut huy
  const buttonHuy = document.createElement("button");
  buttonHuy.innerHTML = "Huy";

  containerButtonChiTiet.appendChild(buttonChiTiet);
  wrapperButtonChiTiet.appendChild(containerButtonChiTiet);

  containerButtonHuy.appendChild(buttonHuy);
  wrapperButtonHuy.appendChild(containerButtonHuy);
  wrapperButton.appendChild(wrapperButtonHuy);

  wrapperButton.appendChild(wrapperButtonChiTiet);

  // bo tat ca div vao
  render.appendChild(maDangKy);
  render.appendChild(phong);
  render.appendChild(tenGV);
  render.appendChild(ngayMuon);
  render.appendChild(thoiGianMuon);
  render.appendChild(wrapperButton);

  console.log(render);
  renderTable.appendChild(render);
};

// renderFunction(mangThongTinDangKy[0]);
// renderFunction(mangThongTinDangKy[1]);




// mangThongTinDangKy.forEach((item)=>{
//     renderFunction(item);
// })
