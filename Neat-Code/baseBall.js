var calPoints = function(operations) {
  let opsAsNums = []

  for(let i = 0; i < operations.length; i++){

      if(Number(operations[i])){
          opsAsNums.push(Number(operations[i]))
      }  else if (operations[i] === '+'){
          opsAsNums.push(opsAsNums[opsAsNums.length - 1] + opsAsNums[opsAsNums.length - 2])
      } else if (operations[i] === 'D') {
          opsAsNums.push(opsAsNums[opsAsNums.length - 1] *2)
      } else if (operations[i] === 'C'){
          opsAsNums.pop()
      }
  }

  let x = 0

  opsAsNums.forEach((num)=>{
      x += num;
  })
  return x;
};