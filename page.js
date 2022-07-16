function percentage_1() {
  let percent = document.getElementById("percent").value;
  let num = document.getElementById("num").value;
  document.getElementById("value1").value = (num / 100) * percent;

  let percentage = +document.querySelector("#value1").value;
  if (percentage >= 90) {
    document.querySelector("#result").innerHTML = "Excellent: Grade A";
    document.write("Excellent: Grade A");
  } else if (percentage >= 80 && percentage < 90) {
    document.querySelector("#result").innerHTML = "brilient: Grade A1";
  } else if (percentage < 80 && percentage >= 70) {
    document.querySelector("#result").innerHTML = "good: Grade B";
  } else if (percentage < 70 && percentage >= 60) {
    document.querySelector("#result").innerHTML = "fair: Grade c";
  } else if (percentage < 60 && percentage >= 50) {
    document.querySelector("#result").innerHTML = " bed progress: Grade D";
  } else if (percentage < 50 && percentage >= 40) {
    document.querySelector("result").innerHTML = "fail: Grade F";
  } else {
    System.out.println("Failed!");
  }
}
