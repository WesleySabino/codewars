function addBinary(a,b) {
  var midArr = []
  var number = a + b
  var convertedNumber = ''
  
  while(number > 1){
      midArr.push(number % 2)
      number = Math.floor(number / 2)
  }
  midArr.push(number)
  
  midArr.forEach(element => {
      convertedNumber = element + convertedNumber
  })
  return convertedNumber
}
