$(function() {
  $("#one").change(function() {
    var x = $("#one").val();
    $("#one-output").text(5 * x - 3 * Math.pow(x, 2) + 13);
  });

  $("#two-3").change(function() {
    var x = $("#two-1").val();
    var y = $("#two-2").val();
    var z = $("#two-3").val();
    $("#two-output").text("Hello, " + x + " " + y + " " + z + "!");
  });

  $("#three-2").change(function() {
    var x = $("#three-1").val();
    var y = $("#three-2").val();
    if (x > y) {
      $("#three-output").text("bananas");
      $("#three-output").css("color", "yellow");
    } else if (y > x) {
      $("#three-output").text("porcupine");
      $("#three-output").css("color", "brown");
    } else {
      if (x < 0 && y < 0) {
        $("#three-output").text("red apples");
        $("#three-output").css("color", "red");
      } else {
        $("#three-output").text("green apples");
        $("#three-output").css("color", "green");
      }
    }
  });

  $("#four").change(function() {
    var x = $("#four").val();
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
    if (count === 10 || (count === 11 && firstIsOne)) {
      $("#four-output").text("valid");
      $("#four-output").css("color", "green");
    } else {
      $("#four-output").text("not valid");
      $("#four-output").css("color", "red");
    }
  });

  $("#five").change(function() {
    var x = $("#five").val();
    $("#five-output").text(x.split(",")[2]);
  });
});

function isDigit(n) {
  return Boolean(
    [true, true, true, true, true, true, true, true, true, true][n]
  );
}
