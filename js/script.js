const closeFooter = document.querySelector('.footer');
const closeHeader = document.querySelector('.header');
const mapaSelect = document.getElementById('mapa');
const mapaSelect2 = document.getElementById('mapa2');
const mapClose = document.querySelector('.closeMap');
const popupEdit = document.querySelector('.popup');
const popupOpen = document.querySelector('#OP');
const popupOpen2 = document.querySelector('#OP2');
const popupClose = document.querySelector('.popup__close');

document.querySelector("#mapa").onclick = function() {
    document.querySelector("#html").classList.add("map_enlarged");
    document.querySelector("#body").classList.add("map_enlarged");
    document.querySelector("#map").classList.add("map_enlarged");   
}

document.querySelector("#mapa2").onclick = function() {
    document.querySelector("#html").classList.add("map_enlarged");
    document.querySelector("#body").classList.add("map_enlarged");
    document.querySelector("#map").classList.add("map_enlarged");   
}

document.querySelector(".closeMap").onclick = function() {
    document.querySelector("#html").classList.remove("map_enlarged");
    document.querySelector("#body").classList.remove("map_enlarged");
    document.querySelector("#map").classList.remove("map_enlarged");
}

function closeHeaderFooter(closeH) {
    closeH.classList.add('close_footer_header'); 
}

function openCloseMap(openMP) {
    openMP.classList.add('closeMap_active');
}

function removeAllModify(removeMF) {
    removeMF.classList.remove('close_footer_header');
    removeMF.classList.remove('closeMap_active');
}

function openPopup(popup) {
    popup.classList.add('popup_active');
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
}

mapaSelect.addEventListener('click', () => closeHeaderFooter(closeHeader));
mapaSelect2.addEventListener('click', () => closeHeaderFooter(closeHeader));
mapaSelect.addEventListener('click', () => closeHeaderFooter(closeFooter));
mapaSelect2.addEventListener('click', () => closeHeaderFooter(closeFooter));
mapaSelect.addEventListener('click', () => openCloseMap(mapClose));
mapaSelect2.addEventListener('click', () => openCloseMap(mapClose));

mapClose.addEventListener('click', () => removeAllModify(closeHeader));
mapClose.addEventListener('click', () => removeAllModify(closeFooter));
mapClose.addEventListener('click', () => removeAllModify(mapClose));

popupOpen.addEventListener('click', () => openPopup(popupEdit));
popupOpen2.addEventListener('click', () => openPopup(popupEdit));
popupClose.addEventListener('click', () => closePopup(popupEdit));