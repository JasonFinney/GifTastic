var characters = ["Gandolf"];
console.log(characters);

function renderButtons() {
    $("#character-buttons").empty();
    for (let i = 0; i < characters.length; i++) {
        var a = $("<button>");
        a.addClass("Char");
        a.attr("data-name", characters[i]);
        a.text(characters[i]);
        $("#character-buttons").append(a);
    };
    console.log(characters);
};

$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var newChara = $("#character-input").val().trim();
    characters.push(newChara);
    renderButtons();
});

$(document).on("click", ".Char", function () {
    var person = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=E6l29rRW8AXqvmiMJtjpbLGf8Vo9x7n9";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(results);
            for (let u = 0; u < 10; u++) {
                var gifDiv = $("<div class='character-gif'>");
                var rating = results[u].rating;
                var p = $("<p>").text("Rating: " + rating);
                var characterImage = $("<img>");
                characterImage.attr("src", results[u].images.fixed_height.url);
                characterImage.attr("alt", "Powered by Giphy");
                characterImage.attr("data-still", results[u].images.fixed_height_still.url);
                characterImage.attr("data-animate", results[u].images.fixed_height.url);
                characterImage.attr("data-state", "still");
                characterImage.attr("id", u);
                gifDiv.append(p);
                gifDiv.append(characterImage);
                $("#characters-and-ratings").prepend(gifDiv);
            };
            $("#9").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#8").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#7").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#6").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#5").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#4").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#3").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#2").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#1").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });
            $("#0").on("click", function () {
                console.log("OUCH!");
                var state = $(this).attr("data-state");
                var stillImgsrc = $(this).attr("data-still");
                var animateImgsrc = $(this).attr("data-animate");
                if (state === "still") {
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", animateImgsrc);
                } else {
                    $(this).attr("data-state", "still");
                    $(this).attr("src", stillImgsrc);
                };
            });

        });
});


renderButtons();
