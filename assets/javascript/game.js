$(document).ready(function () {
    var targetNum = Math.floor(Math.random() * 101 + 20);
    var bcValue = Math.floor(Math.random() * 12 + 1);
    var dcValue = Math.floor(Math.random() * 12 + 1);
    var pcValue = Math.floor(Math.random() * 12 + 1);
    var rcValue = Math.floor(Math.random() * 12 + 1);
    var wins = 0;
    var losses = 0;
    var total = 0;
    $("#blue").attr("value", bcValue)
    $("#dark").attr("value", dcValue)
    $("#purple").attr("value", pcValue);
    $("#red").attr("value", rcValue);
    $("#targetNum").text(targetNum);
    $("#winNum").text(wins);
    $("#lossNum").text(losses);
    $("#total").text(total)

    function reset() {
        targetNum = Math.floor(Math.random() * 111 + 20);
        bcValue = Math.floor(Math.random() * 12 + 1);
        dcValue = Math.floor(Math.random() * 12 + 1);
        pcValue = Math.floor(Math.random() * 12 + 1);
        rcValue = Math.floor(Math.random() * 12 + 1);
        total = 0;
        $("#blue").attr("value", bcValue)
        $("#dark").attr("value", dcValue)
        $("#purple").attr("value", pcValue);
        $("#red").attr("value", rcValue);
        $("#targetNum").text(targetNum);
        $("#total").text(total)
    }
    $(".crystal").on("click", function () {
        total = parseInt($(this).attr("value")) + parseInt(total)
        $("#total").text(total)

        if (parseInt(total) > parseInt(targetNum)) {
            reset()
            losses = losses + 1
            $("#lossNum").text(losses);
        }
        if (parseInt(total) === parseInt(targetNum)) {
            reset()
            wins = wins + 1
            $("#winNum").text(wins)
        }
    })
});
