
$(document).ready(function() {
    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "1px");
    $(".intro").css("font-size", "18px");

    $("#changeGreeting").click(function() {
        $("#headline").text("Welcome to My Portfolio!");
        $("#headline").css("color", "green");
    });

    $("#lightTheme").click(function() {
        $("body").removeClass("dark");
    });

    $("#darkTheme").click(function() {
        $("body").addClass("dark");
    });

    $("#hide").click(function() {
        $("#status, #funFacts").hide();
    });

    $("#show").click(function() {
        $("#status, #funFacts").show();
    });

    $("#toggle").click(function() {
        $("#status, #funFacts").toggle();
    });

    $("#fadeIn").click(function() {
        $(".galleryImage").fadeIn(500);
    });

    $("#fadeOut").click(function() {
        $(".galleryImage").fadeOut(500);
    });

    $("#fadeToggle").click(function() {
        $(".galleryImage").fadeToggle(500);
    });

    $(".accordion h3").click(function() {
        let panel = $(this).next(".panel");

        if (panel.is(":visible")) {
            panel.slideUp(300);
        } else {
            panel.slideDown(300);
        }
    });

    $("#addSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }

        $("#skillsList").append($("<li>").text(skill));
        $("#skillInput").val("");
    });

    $("#prependSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }

        $("#skillsList").prepend($("<li>").text(skill));
        $("#skillInput").val("");
    });

    $("#removeSkill").click(function() {
        $("#skillsList li:last").remove();
    });

    let changed = false;

    $("#changeLink").click(function() {
        if (!changed) {
            $("#socialLink")
                .attr("href", "https://www.linkedin.com/")
                .text("LinkedIn");
        } else {
            $("#socialLink")
                .attr("href", "https://github.com/ayaaan676")
                .text("GitHub");
        }

        changed = !changed;
    });

    $("#nameInput, #emailInput").on("input", function() {
        let name = $("#nameInput").val();
        let email = $("#emailInput").val();

        $("#output").text("Name: " + name + " | Email: " + email);
    });

    let animated = false;

    $("#animateSkills").click(function() {
        $(".fill").each(function() {
            let targetWidth = $(this).attr("data-width");

            $(this).stop().animate({
                width: animated ? "0%" : targetWidth
            }, 1000);
        });

        animated = !animated;
    });
});