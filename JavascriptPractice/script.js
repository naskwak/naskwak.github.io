
// console.log($("h1").text());

let diceNum = 1;
let diceType = 6;
let diceMod = 0;
let diceRoll = `${diceNum}D${diceType}`;
calculateRoll();
// $("#diceRoll").text(diceRoll);

function calculateRoll(){
    let totalMax = diceNum * diceType + parseInt(diceMod);
    let totalMin = parseInt(diceNum) + parseInt(diceMod);
    
    let rollMessage = `
        
            <li>
                ${diceRoll}, (${totalMin}-${totalMax}): \n 
            </li>
        `;

    let totalRoll = 0;
    
    for (let i = 0; i < diceNum; i++){
        // let max = diceType + parseInt(diceMod);
        // let min = diceNum + parseInt(diceMod);
        let roll = Math.round(Math.random() * (diceType-1) + 1);
        if ($(diceMod) !== 0){
            let rollModded = roll + parseInt(diceMod);
            rollMessage+=`
                <li> 
                    ${roll}(${rollModded}) \n
                </li>`;
            totalRoll+=rollModded;
        }else{
            rollMessage += `
                <li>
                    ${roll} \n
                </li>
                `;
            totalRoll+=roll;
        }
        
    }
    rollMessage += `<span style="color:red;">= ${totalRoll}</span> `;

    $("#diceRoll").html(`${diceRoll}<br>= <span style="color:red;">${totalRoll}</span> <br>`);
    
    
    $("#rollLogs").prepend(`<ul class="log">${rollMessage}</ul><hr>`);
    // <li class="line">
    //         <span style="color:red;">= ${totalRoll}</span> 
    //     </li></ui>`
}

// Event Listeners
$(document).ready(function(){
    $("#diceNum").on('change', function() {
        diceNum = $("#diceNum").val();
        checkForMod();
    });
    $("#diceType").on('change', function() {
        diceType = $("#diceType").val();
        checkForMod();
    });
    $("#diceMod").on('change', function() {
        diceMod = $("#diceMod").val();
        checkForMod();
        
    });
})

// Determines whether to display Modifier
function checkForMod(){
    if (diceMod == 0 ){
            diceRoll = `${diceNum}D${diceType}`;
            $("#diceRoll").text(diceRoll);
        }else{
            diceRoll = `${diceNum}D${diceType} + ${diceMod}`;
            $("#diceRoll").text(diceRoll);
        }
}

