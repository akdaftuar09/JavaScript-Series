const form = document.querySelector('form')
form.addEventListener('submit', function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')
if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = `Please Enter a Valid Height`;
}
else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `Please Enter a Valid Weight`;
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if(bmi < 18.6){
    results.innerHTML = `BMI is ${bmi} - Under Weight`
  }
  if(18.6 <= bmi <= 24.9){
    results.innerHTML = `BMI is ${bmi} - Normal`
  }
  if(bmi > 24.9){
    results.innerHTML = `BMI is ${bmi} - Overweight`
  }
}
})