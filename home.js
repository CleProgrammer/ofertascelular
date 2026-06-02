function showCategory(categoryId) {

    const lists = document.querySelectorAll('.product-list');

    lists.forEach(list => {
    list.classList.remove('active');
    });

    document.getElementById(categoryId).classList.add('active');
}

function copyPix() {

    const pix = "ofertascelularoficial@gmail.com";

    navigator.clipboard.writeText(pix);

    const message = document.getElementById("copy-message");

    message.style.display = "inline";

    setTimeout(() => {
    message.style.display = "none";
    }, 2000);
}

function searchProducts() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const products = document.querySelectorAll(".product-item");

  products.forEach(product => {

    const title = product
      .querySelector("h3")
      .innerText
      .toLowerCase();

    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });

}