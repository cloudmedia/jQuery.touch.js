$.fn.touch = function (callback) {
    var touch = false;
    $(this).on("click", function (e) {
        if (!touch) {
            let callbackReal = callback.bind(this);
            callbackReal(this, e);
        } else {
            touch = true;
        }
        touch = false;
    });
    $(this).on("touchend", function (e) {
        $(this).blur();
        if (typeof e.touches != typeof undefined) {
            e.preventDefault();
            touch = true;
            if ($("#touchMove").val() == 'moved') {
                $("#touchMove").val('');
                return false;
            } else {
                let callbackReal = callback.bind(this);
                callbackReal(this, e);
            }
        }
    });
    $(this).on("touchmove", function (e) {
        $("#touchMove").val('moved');
    });
}