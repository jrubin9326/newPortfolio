$(".smooth").on("click", function() {
  $.smoothScroll({
    scrollElement: $("body"),
    scrollTarget: "#" + this.id
  });

  return false;
});

$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
});

function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html("");

  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

$(document).ready(function() {
  var speed = 150;
  var delay = $(".landingPage-text").text().length * speed + speed;
  typeEffect($(".landingPage-text"), speed);
  setTimeout(function() {
    $(".info").css("display", "inline-block");
    typeEffect($(".info"), speed);
  }, delay);
});
