let saveButton;

function setup() {
    createCanvas(800, 600);
    saveButton = createButton("save to JSON");
    saveButton.position(300,300);
    saveButton.mousePressed(startSaving());
}

function startSaving() {
console.log("JSON saved");
}

function draw() {
    background(220);
    circle(200,200,200);
    fill(200,100,30);
    circle(100,100, 100);
}
