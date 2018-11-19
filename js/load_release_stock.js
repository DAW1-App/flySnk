$.getJSON("json/stock.json", function(shoes) {
    loadCards(shoes);
});

function loadCards(shoes) {

    var swapDetailColor = true;
    var list = $("<ul />", { class: "flex-container" });

    shoes.forEach(shoe => {

        if (shoe.new) {

            var divImg =    $("<div>", { class: "mdl-card__title mdl-card--expand"});
            var imgSrc =    $("<img>", {
                src: shoe.preview,
                alt: shoe.preview,
                width: "100%"
            });

            divImg.append(imgSrc);


            var brand =       $("<p>");
            var strong =      $("<strong>", { text:  shoe.brand + " " + shoe.previewText });
            var divText =     $("<div>",    { class: "mdl-card__supporting-text"         });
            var releaseDate = $("<p>",      { text:  "Release date: " + shoe.release     });
            var price =       $("<p>",      { text:  "Price: " + shoe.price              });
            var color =       $("<p>",      { text:  "Color: " + shoe.color              });

            brand.append(strong);
            divText.append(brand, releaseDate, price, color);


            var divDetails = $("<div>", { class: "mdl-card__actions mdl-card--border" });
            var link =       $("<a>",   { 
                href:  shoe.url == null ? "#" : shoe.url,
                class: "mdl-button mdl-js-button mdl-js-ripple-effect",
                class: "mdl-button mdl-js-button mdl-js-ripple-effect",
                text: "Details"
            });
            link.addClass(swapDetailColor ? "mdl-button--accent" : "mdl-button--colored");
            swapDetailColor = !swapDetailColor;

            divDetails.append(link);

            
            var divCard = $("<div>", { class: "mdl-card mdl-shadow--2dp demo-card-square" });
            divCard.append(divImg, divText, divDetails);
            $("#stock").append(divCard);

        }
    });
}