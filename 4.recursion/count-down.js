function countDown(num) {
  //Base condition
  if (num <= 0) {
    console.log("All Done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
