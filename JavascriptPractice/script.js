
// console.log($("h1").text());

let diceNum = 1;
let diceType = 6;
let diceMod = 0;
let diceRoll = `${diceNum}D${diceType}`;
// $("#diceRoll").text(diceRoll);
function calculateRoll(){
    let max = diceNum * diceType;
    let min = diceType;
    // let randomNum = Math.random() * ()-;
    $("#rollOutput").append(`${diceRoll}: (${diceNum}-${max}) `);

    let totalRoll = 0;
    for (let i = 0; i < diceNum; i++){
        
        let roll = Math.round(Math.random() * (diceType-1) + 1);
        $("#rollOutput").append(`${roll} \n`);
        totalRoll+=roll;
    }
    $("#rollOutput").append(`<br>`);
    // console.log("Dice Num:" + diceNum);
    // console.log("Dice Num:" + diceType);
    
    $("#rollOutput").append(`= <span style="color:red;">${totalRoll}</span> <br>`);
}
$(document).ready(function(){
    $("#diceNum").on('change', function() {
        diceNum = $("#diceNum").val();
        diceRoll = `${diceNum}D${diceType}`;
        $("#diceRoll").text(diceRoll);
    });
    $("#diceType").on('change', function() {
        diceType = $("#diceType").val();
        diceRoll = `${diceNum}D${diceType}`;
        $("#diceRoll").text(diceRoll);
    });
    $("#diceMod").on('change', function() {
        diceMod = $("#diceMod").val();
        diceRoll = `${diceNum}D${diceType}`;
        $("#diceRoll").text(diceRoll);
    });
})

// function updateNum(dNum){
//     diceNum = dNum;
//     diceRoll = `${diceNum}D${diceType}`;
//     $("#diceRoll").text(diceRoll);
//     console.log(`Dice Roll: ${diceRoll}`);
// }
// function updateType(dType){
//     diceType = dType;
//     diceRoll = `${diceNum}D${diceType}`;
//     $("#diceRoll").text(diceRoll);
//     console.log(`Dice Roll: ${diceRoll}`);

//     // $("#typeIndex").text(diceType);
//     // console.log(diceType);
    
//     // alert(diceType);
// }


