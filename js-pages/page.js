function copyPix() {

    const pix = "ofertascelularoficial@gmail.com";

    navigator.clipboard.writeText(pix);

    const message = document.getElementById("copy-message");

    message.style.display = "inline";

    setTimeout(() => {
    message.style.display = "none";
    }, 2000);
}