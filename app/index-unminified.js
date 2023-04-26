"use strict";

$(document).ready(function () {
  function disableButtons() {
    $(":button").attr("disabled", "disabled");
  }
  function enableButtons() {
    $(":button").removeAttr("disabled");
  }
  //code for main carousel
  $("#rightArrow").on('click', function () {
    disableButtons();
    $(".carouselMainActive").animate({
      right: "+=940"
    }, 700, function () {
      $(".carouselMainActive").removeClass("carouselMainActive").addClass("carouselMainWaiting").css("right", "0px");
      $(".carouselMainPassive").removeClass("carouselMainPassive").prependTo(".mainCarouselWrapper").hide().show(700).addClass("carouselMainActive");
      $(".carouselMainWaiting").removeClass("carouselMainWaiting").addClass("carouselMainPassive");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  $("#leftArrow").on('click', function () {
    disableButtons();
    $(".carouselMainActive").animate({
      left: "+=940"
    }, 700, function () {
      $(".carouselMainActive").removeClass("carouselMainActive").addClass("carouselMainWaiting").css("left", "0px");
      $(".carouselMainPassive").removeClass("carouselMainPassive").prependTo(".mainCarouselWrapper").hide().show(700).addClass("carouselMainActive");
      $(".carouselMainWaiting").removeClass("carouselMainWaiting").addClass("carouselMainPassive");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });

  //code for medium carousel
  $("#newsCarouselButtonLeft").on("click", function () {
    disableButtons();
    $(".currentElementsPassive").toggle();
    $(".currentElementsActive").animate({
      left: "+=620px"
    }, 500, function () {
      $(".currentElementsActive").removeClass("currentElementsActive").addClass("currentElementsWaiting").toggle().toggle(1000).css("left", "0px");
      $(".currentElementsPassive").toggle(300).addClass("currentElementsActive").removeClass("currentElementsPassive");
      $(".currentElementsWaiting").removeClass("currentElementsWaiting").addClass("currentElementsPassive").prependTo("carouselElementsM");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  $("#newsCarouselButtonRight").on("click", function () {
    disableButtons();
    $(".currentElementsPassive").toggle();
    $(".currentElementsActive").animate({
      left: "-=620px"
    }, 500, function () {
      $(".currentElementsActive").removeClass("currentElementsActive").addClass("currentElementsWaiting").toggle().toggle(1000).css("left", "0px");
      $(".currentElementsPassive").toggle(300).addClass("currentElementsActive").removeClass("currentElementsPassive");
      $(".currentElementsWaiting").removeClass("currentElementsWaiting").addClass("currentElementsPassive").prependTo("carouselElementsM");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });

  //code for small carousel editorials
  $("#editorialsButtonLeft").on("click", function () {
    disableButtons();
    $(".passiveElementEditorials").toggle();
    $(".activeElementEditorials").animate({
      left: "+=700px"
    }, 300, function () {
      $(".activeElementEditorials").removeClass("activeElementEditorials").addClass("waitingElementEditorials").toggle().toggle(1000).css("left", "0px");
      $(".passiveElementEditorials").toggle(300).addClass("activeElementEditorials").removeClass("passiveElementEditorials");
      $(".waitingElementEditorials").removeClass("waitingElementEditorials").addClass("passiveElementEditorials").prependTo("carouselElementsS");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  $("#editorialsButtonRight").on("click", function () {
    disableButtons();
    $(".passiveElementEditorials").toggle();
    $(".activeElementEditorials").animate({
      left: "-=700px"
    }, 300, function () {
      $(".activeElementEditorials").removeClass("activeElementEditorials").addClass("waitingElementEditorials").toggle().toggle(1000).css("left", "0px");
      $(".passiveElementEditorials").toggle(300).addClass("activeElementEditorials").removeClass("passiveElementEditorials");
      $(".waitingElementEditorials").removeClass("waitingElementEditorials").addClass("passiveElementEditorials").prependTo("carouselElementsS");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  //code for small carousel local news
  $("#localNewsButtonLeft").on("click", function () {
    disableButtons();
    $(".passiveElementLocalNews").toggle();
    $(".activeElementLocalNews").animate({
      left: "+=700px"
    }, 300, function () {
      $(".activeElementLocalNews").removeClass("activeElementLocalNews").addClass("waitingElementLocalNews").toggle().toggle(1000).css("left", "0px");
      $(".passiveElementLocalNews").toggle(300).addClass("activeElementLocalNews").removeClass("passiveElementLocalNews");
      $(".waitingElementLocalNews").removeClass("waitingElementLocalNews").addClass("passiveElementLocalNews").prependTo("localNews");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  $("#localNewsButtonRight").on("click", function () {
    disableButtons();
    $(".passiveElementLocalNews").toggle();
    $(".activeElementLocalNews").animate({
      left: "-=700px"
    }, 300, function () {
      $(".activeElementLocalNews").removeClass("activeElementLocalNews").addClass("waitingElementLocalNews").toggle().toggle(1000).css("left", "0px");
      $(".passiveElementLocalNews").toggle(300).addClass("activeElementLocalNews").removeClass("passiveElementLocalNews");
      $(".waitingElementLocalNews").removeClass("waitingElementLocalNews").addClass("passiveElementLocalNews").prependTo("localNews");
      setTimeout(function () {
        enableButtons();
      }, 600);
    });
  });
  //code for large carousel
  $("#x-button").on("click", function () {
    $(".imageActivated").toggle();
    $(".imageInFocus").appendTo(".imageCarousel");
    $("#x-button").hide();
  });
  $("#carouselShow").on("click", function () {
    $(".imageInFocus").appendTo(".imageActivated");
    $(".imageActivated").fadeIn();
    $("#x-button").show();
  });
  $("#imageCarouselButtonLeft").on("click", function () {
    disableButtons();
    $(".galleryElement").first().appendTo("#imagesGallery");
    $(".imageInFocus").replaceWith($(".galleryElement").first().clone().removeClass("galleryElement").addClass("imageInFocus"));
    setTimeout(function () {
      enableButtons();
    }, 300);
  });
  $("#imageCarouselButtonRight").on("click", function () {
    disableButtons();
    $(".imageInFocus").replaceWith($(".galleryElement").last().clone().removeClass("galleryElement").addClass("imageInFocus"));
    $(".galleryElement").last().prependTo("#imagesGallery");
    setTimeout(function () {
      enableButtons();
    }, 300);
  });
  $(".galleryElement").on("click", function () {
    $(this).addClass("slidedTo");
    $(".slidedTo ~ div").prependTo("#imagesGallery");
    $(this).prependTo("#imagesGallery");
    $(".imageInFocus").replaceWith($(".galleryElement").first().clone().removeClass("galleryElement").addClass("imageInFocus"));
  });
});
