var inputs = []

function getParagraph1() {
    for (var i = 1 ; i < 6 ; i++) {
        inputs.push(document.getElementById("para1_input_box_" +i).value);
    }
    full_para1 = inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = full_para1;
}

var inputs2 = []

function getParagraph2() {
    for (var j = 1 ; j < 6 ; j++) {
        inputs2.push(document.getElementById("para2_input_box_" +j).value);
    }
    full_para2 = inputs2.join(". ");
    document.getElementById("showParagraph2").innerHTML = full_para2;
}