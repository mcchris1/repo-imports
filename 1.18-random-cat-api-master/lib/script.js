const randButton = document.querySelector(".randomButton");
const form = document.querySelector("form");
let baseURL = "https://api.thecatapi.com/v1/images/search";

randButton.addEventListener("click", getRandomImage);

function getRandomImage() {
  fetch(baseURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const randomCatImgTag = document.querySelector(".randomCatImage");
      randomCatImgTag.src = data[0].url;
    });
}

form.addEventListener("submit", fetchCategoryCat);

function fetchCategoryCat(e) {
  e.preventDefault();

  let { categoryID } = e.target.elements;

  fetch(`${baseURL}?category_ids=${categoryID.value}`, {
    headers: {
      "x-api-key":
        "live_BOeksrpOvpAG2RbcdpkV0ztSwkLgY6uc3K5bsxRl7GEm7NrsbRTH98gfwTYMO8P8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let categoryCatImgTag = document.querySelector(".categoryCatImage");
      categoryCatImgTag.src = data[0].url;
    });
}

/*(async function getRandomImage2() {
    let data = await axios(baseURL)
    const randomCatImgTag = document.querySelector(".randomCatImage");
    randomCatImgTag.src = res.data[0].url;
}*/