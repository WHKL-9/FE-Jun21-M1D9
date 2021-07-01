

//to generate bingo board on click
const generateBingoBoard = function () {
    let numberContainerNode = document.getElementById("number-container")
    //to generate 76 cells
    for (let cell = 1;cell<=76; cell++){
        //to create a new cell in this format: <div class="cell"></div>
        let newCellNode = document.createElement("div") //<div></div>
        newCellNode.classList.add("cell")//<div class="cell"></div>
        newCellNode.innerText = randomNumberGenerator(1,77)

        //append the newly created node in the parent's container
        numberContainerNode.appendChild(newCellNode)
    }
    let aldreadyGeneratedNumbers = document.getElementsByClassName("cell").innerText
    //highlight the same number 
    const highlightSameNumber = function(){
        for (let number of aldreadyGeneratedNumbers){
            while(aldreadyGeneratedNumbers.includes(number)){
                number.classList.remove("cell")
                number.classList.add("highlightedCell")
            }   

        }   
    }
    highlightSameNumber()

}

//to generate random number between 1-76
const randomNumberGenerator = function(minNumber, maxNumber){
    minNumber = Math.floor(minNumber)
    maxNumber = Math.floor(maxNumber)
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber); //The maximum is exclusive and the minimum is inclusive
}






