



async function updateImg() {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    let img = document.querySelector("img");
    img.src = data[0].url;
    
}
updateImg();

document.addEventListener("click", updateImg);