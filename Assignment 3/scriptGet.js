function setVisibility(x, y){
    document.getElementById(x).style.display = y;
}
function getData(param) {
    const name = document.getElementById("nama");
    const role = document.getElementById("role");
    const availability = document.getElementById("availability");
    const age = document.getElementById("age");
    const lokasi = document.getElementById("lokasi");
    const years = document.getElementById("yearsexperience");
    const email = document.getElementById("email");
  
    document.getElementById("dataNama").innerText = name.value;
    document.getElementById("dataRole").innerText = role.value;
    document.getElementById("dataAvailability").innerText = availability.value;
    document.getElementById("dataUsia").innerText = age.value;
    document.getElementById("dataLokasi").innerText = lokasi.value;
    document.getElementById("dataPengalaman").innerText = years.value;
    document.getElementById("dataEmail").innerText = email.value;
  
    param.prefentDefault();
  }