(function (global, factory) {
    factory(global);
}(window, function (global) {
    var zlju = {};

    zlju.padLeading = function (input, width, char) {
        char = char || "0";
        input = input + "";
        return input.length >= width ? input : new Array(width - input.length + 1).join(char) + input;
    };

    global.zlju = zlju;
}));