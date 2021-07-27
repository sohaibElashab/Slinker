$(".pricing1 .onoffswitch-label").click(function() {
    $(".pricing1 .monthly, .pricing1 .yearly").toggle();
});

document.querySelectorAll(".__range-step").forEach(function(ctrl) {
    var el = ctrl.querySelector('input');
    var output = ctrl.querySelector('output');
    var newPoint, newPlace, offset;
    el.oninput = function() {
        // colorize step options
        ctrl.querySelectorAll("option").forEach(function(opt) {
            if (opt.value <= el.valueAsNumber)
                opt.style.backgroundColor = '#503E9D';
            else
                opt.style.backgroundColor = '#aaa';
        });
        // colorize before and after
        var valPercent = (el.valueAsNumber - parseInt(el.min)) / (parseInt(el.max) - parseInt(el.min));
        var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' +
            valPercent + ',  #503E9D), color-stop(' +
            valPercent + ', #aaa));';
        el.style = style;


        // Popup
        if ((' ' + ctrl.className + ' ').indexOf(' ' + '__range-step-popup' + ' ') > -1) {
            var selectedOpt = ctrl.querySelector('option[value="' + el.value + '"]');
            var jrb = document.getElementById('slider-thumb');
            output.innerText = selectedOpt.text;
            output.style.left = "50%";
            output.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth / 2) - output.offsetWidth / 2) + 'px';
            jrb.style.left = ((selectedOpt.offsetLeft + selectedOpt.offsetWidth / 2) - output.offsetWidth / 2) + 'px';

        }
    };
    el.oninput();
});


window.onresize = function() {
    document.querySelectorAll(".__range").forEach(function(ctrl) {
        var el = ctrl.querySelector('input');
        el.oninput();

    });
};

const thumbSize = 10
const range = document.querySelector('input[type=range]')
const tooltip = document.querySelector('.tooltip')

range.addEventListener('input', e => {
    const ratio = (range.value - range.min) / (range.max - range.min)
    range.style.left = `calc(${thumbSize / 10}px + ${ratio * 100} - ${ratio} * ${thumbSize}px)`
});