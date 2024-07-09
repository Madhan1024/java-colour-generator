
const colorContainer = document.getElementById('colorContainer');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomColor() {
    const red = getRandomInt(256);    
    const green = getRandomInt(256);  
    const blue = getRandomInt(256);   
    return `rgb(${red}, ${green}, ${blue})`;
}

function setBackgroundColor(color) {
    colorContainer.style.backgroundColor = color;
}

colorContainer.addEventListener('click', function() {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
});
