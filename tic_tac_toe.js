var options = ["X", "O"];
var selectedOption = 0;
var currentPlayer = options[selectedOption];
function handlerclick (no) {
    var currentBox = document.getElementById("b" + no).innerText;
    if (currentBox == "") {
        currentPlayer = options[(selectedOption++) % 2];
        console.log(currentPlayer);
        document.getElementById("b" + no).innerText = currentPlayer;
    }
}

function ref() {
    location.reload();
    document.getElementById('b1').value == '';
    document.getElementById("b2").value == '';
    document.getElementById("b3").value == '';
    document.getElementById("b4").value == '';
    document.getElementById("b5").value == '';
    document.getElementById("b6").value == '';
    document.getElementById("b7").value == '';
    document.getElementById("b8").value == '';
    document.getElementById("b9").value == '';

}