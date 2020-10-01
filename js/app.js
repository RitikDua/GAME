var p1 = 0,
    p2 = 0,
    count1 = 0,
    turn = 0;
if (turn == 0) {
    $(".countp1").addClass("countp1");
}
var pn1 = prompt("Enter Player 1 name");
var pn2 = prompt("Enter Player 2 name");
$(document).ready(function() {
    $("#pn1").text(pn1);
    $("#pn2").text(pn2);
    $("#slide").hide();
    $("#right").click(function() {
        $("#ball").animate({ left: '+=36px' });
        count1 += 1;
        $(".countp1").val(count1);
        check();
    });
    $("#bottom").click(function() {
        $("#ball").animate({ top: '+=36px' });
        count1 += 1;
        $(".countp1").val(count1);
        check();
    });
    $("#up").click(function() {
        $("#ball").animate({ top: '-=36px' });
        count1 += 1;
        $(".countp1").val(count1);
        check();
    });
    $("#left").click(function() {
        $("#ball").animate({ left: '-=36px' });
        count1 += 1;
        $(".countp1").val(count1);
        check();
    });
    $("#reset").click(function() {
        x = 0;
        y = 0;
        count1 = 0;
        turn = 0;
        //p1=0;
        //p2=0;
        $("#ball").animate({
            left: '3px' //right:'+=760px'
        });
        $("#ball").animate({
            top: '3px'
        });
        alert("Reset Successful!");
        $("#p2").removeClass("countp1");
        $("#p1").addClass("countp1");
        $("#display").val("PLAYER 1");
        $("#slide").hide();
        $("#p1").val("0");
        $("#p2").val("0");
    });

    function check() {
        if (turn == 0) {
            if ($("#ball").css("left") >= '950px' && $("#ball").css("top") >= '530px') {
                alert(pn2 + " turn");
                $("#p1").val(count1);
                $("#p1").removeClass("countp1");
                $("#p1").removeClass("countp1");
                $("#p2").addClass("countp1");
                $("#display").val("PLAYER 2");
                turn = 1;
                count1 = 0;
                $("#ball").animate({ left: '3px' }, "slow");
                $("#ball").animate({ top: '3px' }, "slow");
                //alert("win");}
                if ($("#ball").css("left") == '3px') player2();
            }
        } else {
            if ($("#ball").css("left") >= '950px' && $("#ball").css("top") >= '530px') {
                var score1 = $("#p1").val();
                var score2 = $("#p2").val();
                if (score1 < score2) $("#display").text(pn1 + " is winner");
                else if (score1 == score2) $("#display").text("DRAW!");
                else $("#display").text(pn2 + "is winner");
                $("#slide").slideDown("slow");
            }
        }
    }
});