// PRELOADER
var loader = document.getElementById("loading");
function preLoader() {
    loader.style.display = "none";
}


// ADD ADDITIONAL COMMANDS
var addBtn = document.getElementById('btn');
addBtn.addEventListener('click', () => {
    console.log('addBtn');
    document.getElementById("additional").style.display = "block";
    document.getElementById("moreAdditional").style.display = "block";
});