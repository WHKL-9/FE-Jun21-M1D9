

//to generate bingo board on click
const generateBingoBoard = function () {
    let numberContainerNode = document.getElementById("number-container")
    //to generate 76 cells
    for (let cell = 1;cell<=76; cell++){
        //to create a new cell in this format: <div class="cell"></div>
        let newCellNode = document.createElement("div") //<div></div>
        newCellNode.classList.add("cell")//<div class="cell"></div>
        newCellNode.innerText = cell

        //append the newly created node in the parent's container
        numberContainerNode.appendChild(newCellNode)
    }
    // let aldreadyGeneratedNumbers = document.querySelectorAll(".cell")
    // //highlight the same number 
    // const highlightSameNumber = function(){
    //     for (let cell of aldreadyGeneratedNumbers){
            


    //         while(aldreadyGeneratedNumbers.includes(cell.innerText)){
                //array cannot contain innerHTML

    //             cell.classList.remove("cell")
    //             cell.classList.add("highlightedCell")
    //         }   

    //     }   
    // }
    // highlightSameNumber()

}

//to generate random number between 1-76
// const randomNumberGenerator = function(minNumber, maxNumber){
//     minNumber = Math.floor(minNumber)
//     maxNumber = Math.floor(maxNumber)
//     return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber); //The maximum is exclusive and the minimum is inclusive
// }
//get random Button and highlight on the board if random number generated
//is equal to number on the board 
const randomBtn = document.getElementById('getRandom')
 
randomBtn.addEventListener('click', function(){
    //get random number
    const random = Math.floor(Math.random()*76)+1
    console.log(random)
    let aldreadyGeneratedNumbers = document.querySelectorAll(".cell")
    for (let cell of aldreadyGeneratedNumbers){
            if((parseInt(cell.innerText) ===random) && !cell.classList.contains("highlightedCell")){
                //we got to parse the text as integer! 
                cell.classList.add("highlightedCell")
            }
        }
})




