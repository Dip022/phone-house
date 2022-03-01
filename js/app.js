//load phones api
const loadPhones = () => {
  const searchPhone = document.getElementById("search-phone").value;
  const searchText = searchPhone.toLowerCase();
  //   search input clear
  document.getElementById("search-phone").value = "";
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};
// display phones
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  // product cound
  const productCound = phones.length;
  // Total product list
  document.getElementById(
    "productList"
  ).innerText = `Total product list:- ${productCound}`;
  //   display phones clear
  phoneContainer.textContent = "";
  // search input validation
  if (phones == 0) {
    document.getElementById("productList").style.display = "none";
    document.getElementById("error-message").style.display = "block";
  } else {
    phones.forEach((phone) => {
      document.getElementById("error-message").style.display = "none";
      document.getElementById("productList").style.display = "block";
      const div = document.createElement("div");
      div.classList.add("col-12", "col-md-6", "col-lg-4");
      div.innerHTML = `
        <div class="card rounded">
            <div class="p-4">
              <img width="100%" src="${phone.image}" class="card-img-top" alt="" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
              <p>Brand:- ${phone.brand}</p>
              <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Learn more</button>
            </div>
        </div>
      `;
      phoneContainer.appendChild(div);
    });
  }
};
// phone info
const phoneDetails = (phoneId) => {
  const phoneInfo = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  fetch(phoneInfo)
    .then((res) => res.json())
    .then((data) => showPhoneInfo(data.data));
};

// show phone info
const showPhoneInfo = (showInfo) => {
  const loadInfo = document.getElementById("showPhoneInfo");
  //   phones info clear
  loadInfo.textContent = "";
  const div = document.createElement("div");
  div.classList.add("show-info");
  div.innerHTML = `
    <div class="p-4 text-center">
        <img src="${showInfo.image}" class="card-img-top " alt="..." />
    </div>
    <div>
      <p class="fw-bold">Release Date:- ${
        showInfo?.releaseDate ? showInfo.releaseDate : "No Relesed Date Found!"
      }</p>
      <hr/>
      <p class="fw-bold">Main Features:-</p>
      <p class="fw-bold">Chip Set: ${
        showInfo?.mainFeatures?.chipSet
          ? showInfo.mainFeatures.chipSet
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Display Size: ${
        showInfo?.mainFeatures?.displaySize
          ? showInfo.mainFeatures.displaySize
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Memory: ${
        showInfo?.mainFeatures?.memory
          ? showInfo.mainFeatures.memory
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Sensors: ${
        showInfo?.mainFeatures?.sensors
          ? showInfo.mainFeatures.sensors
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Storage: ${
        showInfo?.mainFeatures?.storage
          ? showInfo.mainFeatures.storage
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Sensors: ${
        showInfo?.mainFeatures?.sensors
          ? showInfo.mainFeatures.sensors
          : "No Relesed Date Found!"
      }</p>
      <hr/>
      <p class="fw-bold">Others:-</p>
      <p class="fw-bold">Bluetooth: ${
        showInfo?.others?.Bluetooth
          ? showInfo.others?.Bluetooth
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">GPS: ${
        showInfo?.others?.GPS ? showInfo.others.GPS : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">NFC: ${
        showInfo?.others?.NFC ? showInfo.others.NFC : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">Radio: ${
        showInfo?.others?.Radio
          ? showInfo.others.Radio
          : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">USB: ${
        showInfo?.others?.USB ? showInfo.others.USB : "No Relesed Date Found!"
      }</p>
      <p class="fw-bold">WLAN: ${
        showInfo?.others?.WLAN ? showInfo.others.WLAN : "No Relesed Date Found!"
      }</p>
    </div>
  `;
  loadInfo.appendChild(div);
};
