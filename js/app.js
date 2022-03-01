//load phones api
const loadPhones = () => {
  const searchPhone = document.getElementById("search-phone").value;
  const searchText = searchPhone.toLowerCase();
  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((data) => console.log(data.data));
};
loadPhones();
