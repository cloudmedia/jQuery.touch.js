$.fn.touch = function (callback) {

    $.touch = {
        action: "",
        move: false,
        event: false
    }

    return this.on("click", function (e) {
            if (!$.touch.event) {
                $.touch.action = "click";
                let callbackReal = callback.bind(this);
                callbackReal(this, e);
            }
            $.touch.event = false;
        })
        .on("touchend", function (e) {
            $(this).blur();
            $.touch.event = true;
            if ($.touch.move) {
                $.touch.move = false;
                return;
            } else {
                $.touch.action = "touch";
                let callbackReal = callback.bind(this);
                callbackReal(this, e);
            }
        })
        .on("touchmove", function () {
            $.touch.move = true;
        });
}