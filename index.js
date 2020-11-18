let b = document.getElementById("carogame");
let reset = document.getElementById("reset");
let arr = [];
let data = "";
for (let i = 0; i < 5; i++) {
    arr[i] = new Array(0, 0, 0, 0, 0);
}
b.innerHTML = draw();
function draw() {
    for (i = 0; i < 5; i++) {
        data += "<br>";
        for (j = 0; j < 5; j++) {
            data += arr[i][j] + "  ";
        }
    }
    return data;
}
///vong lap for ve bang

function changeValue() {
    //khoi tao hang
    let x = +prompt("X: ");

    //khoi tao cot
    let y = +prompt("Y: ");
    //data set ve rong va ve lai bang
    do{
        x = +prompt("X: ")
        y = +prompt("Y: ")
    }while(isNaN(x)|| isNaN(y)||x>4 || y>4)
    arr[x][y] = "Checked";
    console.log(arr);
    data = "";
    //duyet vong lap thay doi gia tri theo bien X va Y
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (j = 0; j < 5; j++) {
            data += arr[i][j] + "  ";
        }
    }
    b.innerHTML = data;
}
function resetValue() {
     arr = [];
     data = "";
    for (let i = 0; i < 5; i++) {
        arr[i] = new Array(0, 0, 0, 0, 0);
    }
    b.innerHTML = draw();
}
