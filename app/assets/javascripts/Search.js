        //
        //
        // var busqueda = GetURLParameter('search');
        //
        //
        // $.getJSON("json/stock.json", function(shoes) {
        //         zapatillas = shoes.filter(shoe => shoe.model !== null && shoe.model.toLowerCase().includes(busqueda.toLowerCase()));
        //         loadCards(zapatillas);
        // });
        //
        // function loadCards(zapatillas) {
        //
        //     if (zapatillas.length != 0)  {
        //
        //         var list = $("<ul />", { class: "flex-container" });
        //
        //         zapatillas.forEach(zapatilla => {
        //             if (!zapatilla.new) {
        //                 var listItem = $("<li>",  { class: "flex-item"      });
        //                 var divCard =  $("<div>", { class: "card"           });
        //                 var link =     $("<a>",   { href:  zapatilla.url         });
        //                 var divInfo =  $("<div>", { class: "container"      });
        //                 var h4Title =  $("<h4>",  { text:  zapatilla.brand       });
        //                 var p4Info =   $("<p>",   { text:  zapatilla.previewText });
        //                 var imgSrc =   $("<img>", {
        //                     src: zapatilla.preview,
        //                     alt: zapatilla.preview,
        //                     width: "100%"
        //                 });
        //
        //                 divInfo.append(h4Title, p4Info);
        //                 link.append(imgSrc, divInfo);
        //                 divCard.append(link);
        //                 listItem.append(divCard);
        //                 list.append(listItem);
        //             }
        //         });
        //         $("#stock").append(list);
        //     } else {
        //         var error =  $("<h4>",  {
        //             text:  "Whoops, We've lost those in translation",
        //             class: "error"
        //         });
        //         $("#stock").append(error);
        //     }
        //
        // }
        //
        // function GetURLParameter(sParam) {
        //         var sPageURL = window.location.search.substring(1);
        //         var sURLVariables = sPageURL.split("&");
        //         for (var i = 0; i < sURLVariables.length; i++) {
        //           var sParameterName = sURLVariables[i].split("=");
        //           if (sParameterName[0] == sParam) return sParameterName[1];
        //         }
        // }
        // // $('#nav-search').submit(function(){
        // //         loadCards(zapatillas);
        // //         var url = "/search.html?"
        // //         url.searchParams.append('text', document.getElementById("search-input").value);
        // //         console.log(url);
        // //         return false;
        // //         debugger;
        // //         //window.location.href = url;
        // //         //return true;
        // // })
        //
        // // $('#search-input').blur(function(){
        //
        // // }
        //
        // // $('#search-input').keyup({
        // //         source: function (request, response){
        // //                 $.ajax({
        // //                         url: "../json/stock.json",
        // //                         type: "JSON",
        // //                         dataType: "json",
        // //                         data: {Prefix: request.term},
        // //                         success: function(data){
        // //                                 response($.map(data, function(item){
        // //                                         return{modelo: item.model};
        // //                                 }))
        // //                         }
        // //                 })
        // //                 debugger;
        // //         }
        // // });
        //
