export function Calculate(num){
  
  var sum = 0;
  let mas = num.split("");

  for(let i = 0; i < mas.length; i++){
    mas[i] = +mas[i];
    sum += mas[i];
  }
  return sum;
}

export default Calculate;