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
  //   display phones clear
  phoneContainer.textContent = "";
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col-12", "col-md-6", "col-lg-4");
    div.innerHTML = `
        <div class="card rounded">
            <div class="p-4">
                <img width="100%" src="${phone.image}" class="card-img-top" alt="" />
            </div>
            <div class="card-body">
                <h5 class="card-title">${phone.brand} ${phone.phone_name}</h5>
                <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Learn more</button>
            </div>
        </div>
    `;
    phoneContainer.appendChild(div);
  });
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
  //   phone info clear
  loadInfo.textContent = "";
  const div = document.createElement("div");
  div.classList.add("show-info");
  div.innerHTML = `
    <div class="p-4 text-center">
        <img src="${showInfo.image}" class="card-img-top " alt="..." />
    </div>
    <p class="fw-bold">Brand: ${showInfo.brand}</p>
    <p class="fw-bold">Display Size: ${showInfo.mainFeatures.displaySize}</p>
    <p class="fw-bold">Memory: ${showInfo.mainFeatures.memory}</p>
    <p class="fw-bold">Brand: ${
      showInfo.releaseDate ? showInfo.releaseDate : "No Relesed Date Found!"
    }</p>
    
  `;
  loadInfo.appendChild(div);
};
