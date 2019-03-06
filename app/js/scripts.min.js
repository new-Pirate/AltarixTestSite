/* Slider */

$(document).ready(function () {

    var slidesItem = $(".b-sliderItem");
    for (var i = 0; i < slidesItem.length; i++) {
        slidesItem[i].style.left = i * 534 + 'px';
    }

    var slider = $(".b-slider__content");
    var coord = 0;

    $("#leftArrow").click(function () {
        left();
    });

    $("#rightArrow").click(function () {
        right();
    });

    function right() {
        if (screen.width > 1260) {
            if (coord >= -534) {
                coord -= 534;
            } else {
                coord = 0;
            }
            slider.css('left', +coord + 'px');
        } else {
            if (coord >= -1068) {
                coord -= 534;
            } else {
                coord = 0;
            }
            slider.css('left', +coord + 'px');
        }
    }

    function left() {
        if (screen.width > 1260) {
            if (coord <= -534) {
                coord += 534;
            } else {
                coord = -1068;
            }
            slider.css('left', +coord + 'px');
        } else {
            if (coord <= -534) {
                coord += 534;
            } else {
                coord = -1602;
            }
            slider.css('left', +coord + 'px');
        }
    }


    /* Popup */

    function PopUpShow() {
        $("#popup").fadeIn(500).show();
    }

    function PopUpHide() {
        $("#popup").hide();
    }

    $("#formButton").click(function () {
        PopUpShow();
    });

    $("#closePopup, #sendButton").click(function () {
        PopUpHide();
        return false;
    });

    /* ScrollUp */

    $(function () {
        $('#scrollUp').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 1000);
        });
    });
});