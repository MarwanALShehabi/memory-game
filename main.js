document.querySelector(".control-button span").onclick = function (){

    let yourName = prompt("what is your name")

    if(yourName == null || yourName == ''){

        document.querySelector(".name span").innerHTML="undifaind"

    }else{

        document.querySelector(".name span").innerHTML = yourName;

    }

    document.querySelector(".control-button").remove()

}

let duration = 1000

let blockContainer  = document.querySelector(".memory-game-block");

let blocks = Array.from(blockContainer.children);

let orderReng = [...Array(blocks.length).keys()]

// let orderReng = Array.from(Array(blocks.length).keys());
    // console.log(orderReng)
    shuffle(orderReng)
    // console.log(orderReng)
    
blocks.forEach((block , index) => {

    block.style.order = orderReng[index]

    block.addEventListener('click' , function(){

        flipBlock(block)

    })

})

function flipBlock(selectedBlock) {

    selectedBlock.classList.add("is-flipped");

    let allFlippedBlock =blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))

    if(allFlippedBlock.length===2){

        stopClicking();

        checkMatchedBlockes(allFlippedBlock[0], allFlippedBlock[1]);

    }

}

function stopClicking(){

    blockContainer.classList.add("no-clicking")

    setTimeout(()=>{

        blockContainer.classList.remove("no-clicking");

    },duration)

}

function checkMatchedBlockes(firstBlock,secondBlock){

    let triesElement = document.querySelector('.tries span')

    if(firstBlock.dataset.technology === secondBlock.dataset.technology ){

        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

        firstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')

    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 ;
        setTimeout(() => {
                    firstBlock.classList.remove("is-flipped");
                    secondBlock.classList.remove("is-flipped");
        }, duration);
    }

}

function shuffle(array){

    let current = array.length ,
        temp,
        random;

    while(current>0){

        random = Math.floor(Math.random()*current)

        current--;

        temp = array[current]

        array[current]=array[random]
        
        array[random]=temp
    }

    return array;

}