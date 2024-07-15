//  Qs1.WriteaJSprogramtodeletealloccurrencesofelement ‘num’ inagivenarray.
//  Example: ifarr=[1,2,3,4,5,6,2,3]&num=2
//  Resultshouldbearr=[1,3,4,5,6,3]
{
  let arr = [1, 2, 3, 4, 5, 2, 1, 3];
  let num = 2;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
//  Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.
//  Example: ifnumber=287152,count=6
{
  let number = 287152;
  let count = 0;
  while (number > 0) {
    count++;
    number = Math.floor(number / 10);
  }
  console.log(count);
}
//  Qs3.WriteaJSprogramtofindthesumofdigitsinanumber.
//  Example: ifnumber=287152,sum=25
{
  let number = 287152;
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  console.log(sum);
}
//  Qs4.Printthefactorialofanumbern.
//  [Factorialofanumbernistheproductofallpositiveintegerslessthanorequal toa
//  givenpositiveintegeranddenotedbythat integer.]
//  Example:
//  7!(factorialof7)=1x2x3x4x5x6x7=5040
//  5!(factorialof5)=1x2x3x4x5=120
//  3!(factorialof3)=1x2x3=6
//  0!Isalways1
{
  let number = 4;
  let factorial = 1;
  for (i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
}
//  Qs5.Findthelargestnumberinanarraywithonlypositivenumbers
{
  let arr = [1, 2, 3, 4, 5, 8];
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
