//!Add numbers in array
const numbersArr = [];
console.log(numbersArr);

function pushNumber() {
  var adNumber = document.getElementById('adNumber').value;

  if (adNumber == '' || adNumber == null) {
    alert('insert number');
    return false;
  }
  let res = adNumber.split(' ').map(Number);
  console.log(res);

  numbersArr.push(...res);
 
  var numbVal = '';

  for (i = 0; i < numbersArr.length; i++) {
    numbVal = numbVal + numbersArr[i] + '<br>';
  }

  document.getElementById('numbers').innerHTML = numbVal;

  console.log(numbersArr);
}

function showmodal() {
  findTheIndex();
  $('.ui.modal').modal('show');
}

const findTheIndex = () => {
  if (!numbersArr || numbersArr.length < 3) {
    return -1;
  }

  let left = 0;
  let right = numbersArr.length - 1;
  let leftSum = numbersArr[0];
  let rightSum = numbersArr[right];

  left += 1;
  right -= 1;

  while (left < right) {
    if (leftSum < rightSum) {
      leftSum += numbersArr[left];
      left += 1;
    } else {
      rightSum += numbersArr[right];
      right -= 1;
    }
  }

  if (leftSum == rightSum) {
    document.getElementById('showNumber').innerHTML = left;

    return left;
  }

  return -1;
};
