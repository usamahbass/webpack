import filterSearch from "../config/filter";
import preLoader from "../config/load";
import tabsPanel from "../config/tabs";
import Context from "../config/context";

function main() {
  const baseUrl = "https://indonesia-covid-19.mathdro.id";
  const baseUrl2 = "https://covid19.mathdro.id";

  let countryList = "Indonesia";

  let textError = document.querySelector("#textError");

  const getData = (keyword = "indonesia") => {
    fetch(`${baseUrl2}/api/countries/${keyword}`)
      .then((res) => res.json())
      .then((responseJson) => {
        renderData(responseJson);
      })

      .catch(() => {
        showError(keyword);
      });
  };

  const getDataWorld = () => {
    fetch(`${baseUrl2}/api`)
      .then((res) => {
        return res.json();
      })
      .then((responseJson) => {
        renderDataaWorld(responseJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataProv = () => {
    fetch(`${baseUrl}/api/provinsi`)
      .then((res) => {
        return res.json();
      })
      .then((responseJson) => {
        renderDataProv(responseJson.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getDataWisma = () => {
    fetch(`${baseUrl}/api/wisma-atlet`)
      .then((res) => {
        return res.json();
      })
      .then((responseJson) => {
        renderDataWisma(responseJson.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const renderData = (data) => {
    const listData = document.querySelector("#listData");
    const jumlahKasus =
      data.confirmed.value + data.recovered.value + data.deaths.value;

    listData.innerHTML = ``;
    listData.innerHTML += `
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div
              class="card card-body ui-light ui-dark h-100 justify-content-center"
            >
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Positif</p>
                <h2 class="font-weight-bold mb-0">${data.confirmed.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>
      
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div
              class="card card-body ui-light ui-dark h-100 justify-content-center"
            >
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Sembuh</p>
                <h2 class="font-weight-bold mb-0">${data.recovered.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>
      
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div class="card card-body ui-light ui-dark h-100 justify-content-center">
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Meninggal</p>
                <h2 class="font-weight-bold mb-0">${data.deaths.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
          <div class="card card-body ui-light ui-dark h-100 justify-content-center">
            <div class="d-flex flex-column text-dimgray">
              <p class="text-uppercase mb-0">${countryList}</p>
              <h2 class="font-weight-bold mb-0">${jumlahKasus}</h2>
              <p class="text-uppercase mb-0">Jumlah Kasus</p>
            </div>
          </div>
        </div>
            `;
  };

  const renderDataaWorld = (data) => {
    const listWorld = document.querySelector("#listDunia");
    const jumlahKasus =
      data.confirmed.value + data.recovered.value + data.deaths.value;

    listWorld.innerHTML = ``;
    listWorld.innerHTML += `
           
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div
              class="card card-body ui-light h-100 justify-content-center"
            >
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Positif</p>
                <h2 class="font-weight-bold mb-0">${data.confirmed.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>
      
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div
              class="card card-body ui-light h-100 justify-content-center"
            >
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Sembuh</p>
                <h2 class="font-weight-bold mb-0">${data.recovered.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>
      
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
            <div class="card card-body ui-light h-100 justify-content-center">
              <div class="d-flex flex-column text-dimgray">
                <p class="text-uppercase mb-0">Meninggal</p>
                <h2 class="font-weight-bold mb-0">${data.deaths.value}</h2>
                <p class="text-uppercase mb-0">Orang</p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-5">
          <div class="card card-body ui-light h-100 justify-content-center">
            <div class="d-flex flex-column text-dimgray">
              <p class="text-uppercase mb-0">Dunia</p>
              <h2 class="font-weight-bold mb-0">${jumlahKasus}</h2>
              <p class="text-uppercase mb-0">Jumlah Kasus</p>
            </div>
          </div>
        </div>
        
        <figure class="mb-5">
        <img src=${data.image} class="img-fluid" />
      </figure>
            `;
  };

  /*
      get Data per Provinsi
  */

  const renderDataProv = (provinsi) => {
    const tableList = document.querySelector("#tableList");
    tableList.innerHTML = "";

    provinsi.forEach((prov) => {
      tableList.innerHTML += `
      <tr>
      <th scope="row">${prov.provinsi}</th>
      <td>${prov.kasusPosi}</td>
      <td>${prov.kasusSemb}</td>
      <td>${prov.kasusMeni}</td>
    </tr>
   
      `;
    });
  };

  /*
      get Data Harian
  */

  const renderDataWisma = (wisma) => {
    const listWisma = document.querySelector("#listWisma");
    const wismaLk = {
      total: wisma.igd_l + wisma.ranap_l,
      igd: wisma.igd_l,
      igd_odp: wisma.igd_odp_l,
      igd_pdp: wisma.igd_pdp_l,
      igd_positif: wisma.igd_positif_l,
      ranap: wisma.ranap_l,
      ranap_odp: wisma.ranap_odp_l,
      ranap_pdp: wisma.ranap_pdp_l,
      ranap_positif: wisma.ranap_positif_l,
    };
    const wismaPr = {
      total: wisma.igd_p + wisma.ranap_p,
      igd: wisma.igd_p,
      igd_odp: wisma.igd_odp_p,
      igd_pdp: wisma.igd_pdp_p,
      igd_positif: wisma.igd_positif_p,
      ranap: wisma.ranap_p,
      ranap_odp: wisma.ranap_odp_p,
      ranap_pdp: wisma.ranap_pdp_p,
      ranap_positif: wisma.ranap_positif_p,
    };
    const totalWisma = {
      total: wismaLk.total + wismaPr.total,
      igd: wisma.igd,
      igd_odp: wisma.igd_odp,
      igd_pdp: wisma.igd_pdp,
      igd_positif: wisma.igd_positif,
      ranap: wisma.ranap,
      ranap_odp: wisma.ranap_odp,
      ranap_pdp: wisma.ranap_pdp,
      ranap_positif: wisma.ranap_positif,
    };

    listWisma.innerHTML = ``;
    listWisma.innerHTML += `

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-5">
            <div
              class="card ui-light"
            >
            <div class="card-header mx-auto">
            <i class="fa fa-hospital-alt fa-3x"></i>
           </div>
              <div class="card-body text-uppercase">
                <p>
                  total
                  <span class="float-right font-weight-bold">${totalWisma.total}</span>
                </p>
                <p>
                  igd
                  <span class="float-right font-weight-bold">${totalWisma.igd}</span>
                </p>
                <p>
                  igd (odp)
                  <span class="float-right font-weight-bold">${totalWisma.igd_odp}</span>
                </p>
                <p>
                  igd (pdp)
                  <span class="float-right font-weight-bold">${totalWisma.igd_pdp}</span>
                </p>
                <p>
                  igd (positif)
                  <span class="float-right font-weight-bold">${totalWisma.igd_positif}</span>
                </p>
                <p>
                  ranap
                  <span class="float-right font-weight-bold">${totalWisma.ranap}</span>
                </p>
                <p>
                  ranap (odp)
                  <span class="float-right font-weight-bold">${totalWisma.ranap_odp}</span>
                </p>
                <p>
                  ranap (pdp)
                  <span class="float-right font-weight-bold">${totalWisma.ranap_pdp}</span>
                </p>
                <p>
                  ranap (positif)
                  <span class="float-right font-weight-bold">${totalWisma.ranap_positif}</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-5">
            <div
              class="card ui-light"
            >
             <div class="card-header mx-auto">
              <i class="fa fa-male fa-3x"></i>
             </div>
             <div class="card-body text-uppercase">
             <p>
               Total
               <span class="float-right font-weight-bold">${wismaLk.total}</span>
             </p>
             <p>
             igd
             <span class="float-right font-weight-bold">${wismaLk.igd}</span>
           </p>
           <p>
             igd (odp)
             <span class="float-right font-weight-bold">${wismaLk.igd_odp}</span>
           </p>
           <p>
             igd (pdp)
             <span class="float-right font-weight-bold">${wismaLk.igd_pdp}</span>
           </p>
           <p>
             igd (positif)
             <span class="float-right font-weight-bold">${wismaLk.igd_positif}</span>
           </p>
           <p>
             ranap
             <span class="float-right font-weight-bold">${wismaLk.ranap}</span>
           </p>
           <p>
             ranap (odp)
             <span class="float-right font-weight-bold">${wismaLk.ranap_odp}</span>
           </p>
           <p>
             ranap (pdp)
             <span class="float-right font-weight-bold">${wismaLk.ranap_pdp}</span>
           </p>
           <p>
             ranap (positif)
             <span class="float-right font-weight-bold">${wismaLk.ranap_positif}</span>
           </p>
           </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-5">
            <div
              class="card ui-light"
            >
            <div class="card-header mx-auto">
            <i class="fa fa-female fa-3x"></i>
           </div>
              <div class="card-body text-uppercase">
                <p>
                  Total
                  <span class="float-right font-weight-bold">${wismaPr.total}</span>
                </p>
                <p>
                igd
                <span class="float-right font-weight-bold">${wismaPr.igd}</span>
              </p>
              <p>
                igd (odp)
                <span class="float-right font-weight-bold">${wismaPr.igd_odp}</span>
              </p>
              <p>
                igd (pdp)
                <span class="float-right font-weight-bold">${wismaPr.igd_pdp}</span>
              </p>
              <p>
                igd (positif)
                <span class="float-right font-weight-bold">${wismaPr.igd_positif}</span>
              </p>
              <p>
                ranap
                <span class="float-right font-weight-bold">${wismaPr.ranap}</span>
              </p>
              <p>
                ranap (odp)
                <span class="float-right font-weight-bold">${wismaPr.ranap_odp}</span>
              </p>
              <p>
                ranap (pdp)
                <span class="float-right font-weight-bold">${wismaPr.ranap_pdp}</span>
              </p>
              <p>
                ranap (positif)
                <span class="float-right font-weight-bold">${wismaPr.ranap_positif}</span>
              </p>
              </div>
            </div>
          </div>

            `;
  };

  const showError = (err) => {
    textError.innerHTML += `
      <p class="text-center mb-5">Galat, ${err} tidak ditemukan ! 
      </p>
      `;
  };

  const searchCountry = () => {
    const searchElement = document.querySelector("#searchElement");
    const clearElement = document.querySelector(".bg-ui");

    searchElement.addEventListener("change", (e) => {
      const timesElement = document.getElementById("timesElement");
      const spinnerElement = document.getElementById("spinnerElement");

      e.preventDefault();

      setTimeout(() => {
        getData(e.target.value);
        spinnerElement.style.display = "none";
        timesElement.style.display = "block";
      }, 1000);

      timesElement.style.display = "none";
      spinnerElement.style.display = "block";

      countryList = e.target.value;
    });

    searchElement.addEventListener("keyup", (e) => {
      // menunculkan clearElement

      if (e.target.value.length > 0) {
        clearElement.classList.add("active");
        textError.innerHTML = "";
      } else {
        clearElement.classList.remove("active");
        textError.innerHTML = "";
      }

      // menghapus isi Search

      clearElement.addEventListener("click", () => {
        e.target.value = "";
        textError.innerHTML = "";
        clearElement.classList.remove("active");
      });
    });
  };

  const getYear = () => {
    const yearElement = document.querySelector(".tahun");
    const date = new Date();
    const year = date.getFullYear();
    yearElement.innerText = year;
  };

  getData();
  getDataWorld();
  getDataProv();
  getDataWisma();
  filterSearch();
  preLoader();
  tabsPanel();
  searchCountry();
  getYear();
  Context();

  window.addEventListener("offline", () => {
    alert("kamu sedang offline");
  });
}

export default main;
