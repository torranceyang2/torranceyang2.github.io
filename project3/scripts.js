function one() {
  var x = document.getElementById("one").value;
  var el = document.getElementById("one-output");
  el.textContent = 5 * x - 3 * (x ^ 2) + 13;
}

function two() {
  var x = document.getElementById("two-1").value;
  var y = document.getElementById("two-2").value;
  var z = document.getElementById("two-3").value;
  var el = document.getElementById("two-output");
  el.textContent = "Hello, " + x + " " + y + " " + z + "!";
}

function three() {
  var x = document.getElementById("three-1").value;
  var y = document.getElementById("three-2").value;
  var el = document.getElementById("three-output");
  if (x > y) {
    el.textContent = "bananas";
    el.style.color = "yellow";
  } else if (y > x) {
    el.textContent = "porcupine";
    el.style.color = "brown";
  } else {
    if (x < 0 && y < 0) {
      el.textContent = "red apples";
      el.style.color = "red";
    } else {
      el.textContent = "green apples";
      el.style.color = "green";
    }
  }
}

function four() {
  var x = document.getElementById("four").value;
  var count = 0;
  var firstIsOne = false;
  //Loop through characters of string
  for (var s of x) {
    if (isDigit(s)) {
      if (count === 0 && s === "1") {
        firstIsOne = true;
      }
      count++;
    }
  }
  var el = document.getElementById("four-output");
  if (count === 10 || (count === 11 && firstIsOne)) {
    el.textContent = "valid";
    el.style.color = "green";
  } else {
    el.textContent = "not valid";
    el.style.color = "red";
  }
}

function five() {
  var x = document.getElementById("five").value;
  var el = document.getElementById("five-output");
  el.textContent = x.split(",")[2];
}

function isDigit(n) {
  return Boolean(
    [true, true, true, true, true, true, true, true, true, true][n]
  );
}
