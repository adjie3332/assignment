document.getElementById("getData").addEventListener("click", async () => {
    const input = document.getElementById("search").value;
    const options = {
        method : "GET", headers: {
            'X-RapidAPI-Key': '97519429admshaf3add7ca1b657ep18e343jsne92cde99fa23',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        },
    }; 

    const response = await fetch(`https://covid-193.p.rapidapi.com/history?country=${input}`, options);
    const getJson = await response.json();

    if (getJson.results !=0) {
        const data = getJson.response[0];
        document.getElementById("activeCases").innerText = data.cases.active;
        document.getElementById("newCases").innerText = data.cases.new;
        document.getElementById("recoveredCases").innerText = data.cases.recovered;
        document.getElementById("totalCases").innerText = data.cases.total;
        document.getElementById("totalDeaths").innerText = data.deaths.total;
        document.getElementById("totalTests").innerText = data.tests.total;
    }
    else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-info",
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            icon: "error",
            iconColor: "#dc3545",
            title: "Data Tidak Ditemukan!",
            text: "Pastikan sudah memasukkan nama negara dengan benar",
            background: "cyan",
            color: "black",
        });
        document.getElementById("activeCases").innerText = 0;
        document.getElementById("newCases").innerText = 0;
        document.getElementById("recoveredCasesr").innerText = 0;
        document.getElementById("totalCases").innerText = 0;
        document.getElementById("totalDeaths").innerText = 0;
        document.getElementById("totalTests").innerText = 0; 
    }
});