module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  
  newArr = []
  i= 1
  for (element of matrix) {
    i = i + 1    
    if ((i % 2) !== 0) {
      newArr.push(element.reverse())
    }else {
      newArr.push(element)
    }
  }
  return(newArr.flat())
}