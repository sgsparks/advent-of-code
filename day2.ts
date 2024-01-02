import * as fs from 'fs';

let day2 = ()=>{
  let inputAsString: string = fs.readFileSync('day2input.txt').toString()
  let inputAsArray: Array<string> = inputAsString.split("\n");

  type Game = {
    id: number;
    green: number;
    red: number;
    blue: number;
};

  const separators = /[;:]/;

  let sumOfIds: number = 0;

  inputAsArray.map((item: string) => {
    let splitInput: Array<string> = item.split(separators)
    console.log(splitInput)
    splitInput.map((roundAsString: string, index2: number) =>{
      let roundIsPlayable = true
      let round: Game = {
        id: 0,
        green: 13,
        red: 12,
        blue: 14
      }

      const roundAsArray = roundAsString.split(',')
      roundAsArray.map((roundItem)=>{
        const roundItemNumber: number = Number(roundItem.split(" ")[1])

        if(roundItem.includes('Game')){
        const roundId: number =  Number(roundItem.slice(5, roundItem.length))
        round.id = roundId
        }

        if(roundItem.includes('red') && roundItemNumber > round.red){
          roundIsPlayable = false
        }
        if(roundItem.includes('blue') && roundItemNumber > round.blue){
          roundIsPlayable = false
        }
        if(roundItem.includes('green') && roundItemNumber > round.green){
          roundIsPlayable = false
        }

      })
      if(roundIsPlayable === true){
        // console.log(roundIsPlayable)
        sumOfIds += round.id
      }

    })
  })



  // console.log(sumOfIds)
};

day2()

