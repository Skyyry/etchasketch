const container = document.querySelector('#container');

let gridCount = 256;



for (let i = 0; i < gridCount; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "blue";
    })

    square.addEventListener("mouseout", function() {
        square.style.backgroundColor = "blue";
    })
}



function userPrompt() {
     prompt("Enter grid size")
}

document.getElementById('setgrid').addEventListener('click', function() {
    gridCount = userPrompt();
});
