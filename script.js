// Variables
var indexNumber = 0;

// Misc
const pageNumber = document.getElementById('pageNumber');
const versionDisplay = document.getElementById('versionDisplay');

// Upload & Bookmark Objects
const uploadButton = document.getElementById('uploadButton');
const bookmarksButton = document.getElementById('bookmarksButton');

// Chevrons
const leftChevron = document.getElementById('leftChevron');
const rightChevron = document.getElementById('rightChevron');

// First Element
const firstItem_object = document.getElementById('firstItem_object');
const firstItem_icon = document.getElementById('firstItem_icon');
const firstItem_name = document.getElementById('firstItem_name');
const firstItem_url = document.getElementById('firstItem_url');

// Second Element
const secondItem_object = document.getElementById('secondItem_object');
const secondItem_icon = document.getElementById('secondItem_icon');
const secondItem_name = document.getElementById('secondItem_name');
const secondItem_url = document.getElementById('secondItem_url');

// Third Element
const thirdItem_object = document.getElementById('thirdItem_object');
const thirdItem_icon = document.getElementById('thirdItem_icon');
const thirdItem_name = document.getElementById('thirdItem_name');
const thirdItem_url = document.getElementById('thirdItem_url');

// Fourth Element
const fourthItem_object = document.getElementById('fourthItem_object');
const fourthItem_icon = document.getElementById('fourthItem_icon');
const fourthItem_name = document.getElementById('fourthItem_name');
const fourthItem_url = document.getElementById('fourthItem_url');

// Fifth Element
const fifthItem_object = document.getElementById('fifthItem_object');
const fifthItem_icon = document.getElementById('fifthItem_icon');
const fifthItem_name = document.getElementById('fifthItem_name');
const fifthItem_url = document.getElementById('fifthItem_url');

// Render Element
function renderItem(item, index){

    if (item == 1){
        firstItem_object.style.backgroundColor = serverData.data[index].color_hex;
        firstItem_icon.src = serverData.data[index].icon_path;
        firstItem_name.innerText = serverData.data[index].name;
        firstItem_url.innerText = serverData.data[index].url;
    } else if (item == 2){
        secondItem_object.style.backgroundColor = serverData.data[index].color_hex;
        secondItem_icon.src = serverData.data[index].icon_path;
        secondItem_name.innerText = serverData.data[index].name;
        secondItem_url.innerText = serverData.data[index].url;
    } else if (item == 3){
        thirdItem_object.style.backgroundColor = serverData.data[index].color_hex;
        thirdItem_icon.src = serverData.data[index].icon_path;
        thirdItem_name.innerText = serverData.data[index].name;
        thirdItem_url.innerText = serverData.data[index].url;
    } else if (item == 4){
        fourthItem_object.style.backgroundColor = serverData.data[index].color_hex;
        fourthItem_icon.src = serverData.data[index].icon_path;
        fourthItem_name.innerText = serverData.data[index].name;
        fourthItem_url.innerText = serverData.data[index].url;
    } else if (item == 5){
        fifthItem_object.style.backgroundColor = serverData.data[index].color_hex;
        fifthItem_icon.src = serverData.data[index].icon_path;
        fifthItem_name.innerText = serverData.data[index].name;
        fifthItem_url.innerText = serverData.data[index].url;
    }
    console.log(`Loaded ${serverData.data[index].name} on List Element ${item}`);

}

// Render List (First Page, When Page Is Loaded)
window.onload = () => {

    // Render Version
    versionDisplay.innerHTML = `This project was created by Rhet0rical. All assets are open sourced on GitHub. Visit the repository <a href = 'https://github.com/TheRhet0rical/LinkDB'>Here</a>. <br> Client: v.${serverData.website_version}, Server: v.${serverData.server_version}.`;

    renderItem(1, 0);
    renderItem(2, 1);
    renderItem(3, 2);
    renderItem(4, 3);
    renderItem(5, 4);

}

// Item Events
function openPage(url){
    console.log(`Redirecting To ${url}`);

    try {
        window.open(url);
    } catch (error) {
        window.alert(`Failed To Redirect User To URL: ${error}`);
    }
}

firstItem_object.addEventListener('click', function(){

    openPage(firstItem_url.innerText);

})

secondItem_object.addEventListener('click', function(){

    openPage(secondItem_url.innerText);

})

thirdItem_object.addEventListener('click', function(){

    openPage(thirdItem_url.innerText);

})

fourthItem_object.addEventListener('click', function(){

    openPage(fourthItem_url.innerText);

})

fifthItem_object.addEventListener('click', function(){

    openPage(fifthItem_url.innerText);

})

// Chevrons
leftChevron.addEventListener('click', function(){

    const dataLength = serverData.data.length;
    let dataLengthMultiplier = 5;

    if (indexNumber <= 0){
        console.error('Cannot rollback to an index that doesn\'t exist');
    } else {

        indexNumber--;
        console.log(`Rolled Back To Index: ${indexNumber}`);
        
    }

})

rightChevron.addEventListener('click', function(){



})