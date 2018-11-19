$.getJSON("json/stock.json", function(shoes) {
    loadCards(shoes);
});

function loadCards(shoes) {
    var list = $("<ul />", { class: "flex-container" });

    shoes.forEach(shoe => {
        if (!shoe.new) {
            var listItem = $("<li>",  { class: "flex-item"      });
            var divCard =  $("<div>", { class: "card"           });
            var link =     $("<a>",   { href:  shoe.url         });
            var divInfo =  $("<div>", { class: "container"      });
            var h4Title =  $("<h4>",  { text:  shoe.brand       });
            var p4Info =   $("<p>",   { text:  shoe.previewText });
            var imgSrc =   $("<img>", {
                src: shoe.preview,
                alt: shoe.preview,
                width: "100%"
            });

            divInfo.append(h4Title, p4Info);
            link.append(imgSrc, divInfo);
            divCard.append(link);
            listItem.append(divCard);
            list.append(listItem);
        }
    });
    $("#stock").append(list);
}
