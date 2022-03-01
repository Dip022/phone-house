//load phones api
const loadPhones = () => {
  const searchPhone = document.getElementById("search-phone").value;
  const searchText = searchPhone.toLowerCase();
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => displayPhones(data.data));
};
// display phones
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
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
    .then((data) => console.log(data));
};
