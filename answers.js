// 1
$(document).ready(function() {
  $("#msg").html("<p>jQuery Hello World</p>");
});

$(document).ready(function() {
  $("#newdiv").click(function() {
    alert("Hello world!");
  });
});

// 2

$(document).ready(function() {
  $("p").on({
    mouseenter: function() {
      $(this).css("color", "red");
    }
  });
});

// 3

$(document).ready(function() {
  $("button").click(function() {
    $(this).text(
      $(this).text() == "Order by Alphabet"
        ? "Order by Category"
        : "Order by Alphabet"
    );
  });
});

// 4
$(document).ready(function() {
  $("button").click(function() {
    $("#test").hide();
  });
});

$(document).ready(function() {
  $("button").click(function() {
    $(".test").hide();
  });
});

$(document).ready(function() {
  $("button").click(function() {
    $("p").hide();
  });
});

$(document).ready(function() {
  $("button").click(function() {
    $("[href]").hide();
  });
});

// 5
$(document).ready(function() {
  console.log("ready!");
});

// 6
$("p").click(function() {
  // do something
});

// 7

$("p").dblclick(function() {
  // do something
});

// 8

$("#p1").mouseenter(function() {
  // do something
});

// 9

$("#p1").mouseleave(function() {
  // do something
});

// 10

$("#p1").keypress(function() {
  // do something
});

// 11

$("#p1").keydown(function() {
  // do something
});

// 12

$("#p1").keyup(function() {
  // do something
});

// 13

$("#p1").submit(function() {
  // do something
});

// 14

$("#p1").scroll(function() {
  // do something
});

// 15

$("#hide").click(function() {
  $("p").hide();
});

$("#show").click(function() {
  $("p").show();
});

// 16

$("#flip").click(function() {
  $("#panel").slideDown();
});

$("#flip").click(function() {
  $("#panel").slideUp();
});

// 17

$("button").click(function() {
  $.ajax({
    url: "demo_test.txt",
    success: function(result) {
      $("#div1").html(result);
    }
  });
});

// 18

$("button").click(function() {
  $.ajax({
    url: "demo_test.txt",
    success: function(result) {
      $("#div1").html(result);
    },
    type: "POST"
  });
});

// 19

$("button").click(function() {
  $("#div").load("randomstring.txt", function(responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") alert("content loaded");
    if (statusTxt == "error") alert("Error");
  });
});

// 20

jQuery.get("file.txt", function(data) {
  alert(data);
  $("#div").html(data.replace("n", ""));
});
