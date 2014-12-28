$(document).ready(function () {

    var q1 = 2;
    var q2 = 3;
    var q3 = 2;
    var q4 = 2;
    var qTotal = 0;
    var bSearch = "Beer";
    var beer1 = "";
    var beer2 = "";
    var beer3 = "";

    $("#q1").on("change", function () {
        q1 = parseInt(this.value, 10);
        return q1;
    });

    $("#q2").on("change", function () {
        q2 = parseInt(this.value, 10);
        return q2;
    });

    $("#q3").on("change", function () {
        q3 = parseInt(this.value, 10);
        return q3;
    });

    $("#q4").on("change", function () {
        q4 = parseInt(this.value, 10);
        return q4;
    });

    $("#beersubmit").on("click", function () {

        qTotal = (q1 + q2 + q3 + q4);

        if (q3 === 4 && q1 === 4) {
            qTotal = 18;
        }

        switch (qTotal) {
            case 0:
                bSearch = "Lambic";
                break;
            case 1:
            case 2:
                bSearch = "Blonde+Ale";
                break;
            case 3:
                bSearch = "American+Lager";
                break;
            case 4:
            case 5:
                bSearch = "Pilsner";
                break;
            case 6:
                bSearch = "Hefeweizen";
                break;
            case 7:
                bSearch = "Pale+Ale";
                break;
            case 8:
                bSearch = "IPA";
                break;
            case 9:
                bSearch = "Tripel";
                break;
            case 10:
                bSearch = "Amber+Ale";
                break;
            case 11:
                bSearch = "Oktoberfest";
                break;
            case 12:
                bSearch = "Dubbel";
                break;
            case 13:
                bSearch = "Brown+Ale";
                break;
            case 14:
                bSearch = "Porter";
                break;
            case 15:
                bSearch = "Sweet+Stout";
                break;
            case 16:
                bSearch = "Weizenbock";
                break;
            case 17:
            case 18:
                bSearch = "Imperial+Stout";
                break;
            default:
                console.log("Something went wrong :-(");
        }
        
        $.ajax({
            url: "https://api.untappd.com/v4/search/beer/method_name?client_id=F91B6AFFAF98FED2BCDE569D9687A8F4C4B2DC34&client_secret=1FC3B2A4CEF8D80BE17E6FB720A9DD12AAD9AD81&q=" + bSearch + "&sort=count",
            dataType: 'json'
        })
            .error(function (result) {
                $("#error").show(300);
                $("#questions").hide(300);
            })
            .done(function (result) {

                beer1 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];

                do {
                    beer1 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];
                } while (beer1.beer.beer_name.length !== 0 && beer1.beer.beer_description.length < 30 && beer1.beer.beer_label !== "http://d1c8v1qci5en44.cloudfront.net/site/assets/images/temp/badge-beer-default.png");

                beer2 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];

                do {
                    beer2 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];
                } while (beer2.beer.beer_name.length !== 0 && beer2.beer.beer_description.length < 30 && beer2.beer.beer_label !== "http://d1c8v1qci5en44.cloudfront.net/site/assets/images/temp/badge-beer-default.png" || beer2 === beer1);

                beer3 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];

                do {
                    beer3 = result.response.beers.items[Math.floor(Math.random() * result.response.beers.items.length)];
                } while (beer3.beer.beer_name.length !== 0 && beer3.beer.beer_description.length < 30 && beer3.beer.beer_label !== "http://d1c8v1qci5en44.cloudfront.net/site/assets/images/temp/badge-beer-default.png" || beer3 === beer1 || beer3 === beer2);

                $("#mainbeer").empty();
                $("#beer2").empty();
                $("#beer3").empty();

                $("#mainbeer").append($("<h4>" + beer1.beer.beer_name + " by <a id='beer1link'>" + beer1.brewery.brewery_name +" </a></h4> <img id='beer1pic'> <p>" + beer1.beer.beer_description + "</p>"));
                $("#beer1pic").attr('src', beer1.beer.beer_label);
                $("#beer1link").attr('href', beer1.brewery.contact.url);

                $("#beer2").append($("<h4>" + beer2.beer.beer_name + " by <a id='beer2link'>" + beer2.brewery.brewery_name + "</a></h4> <img id='beer2pic'> <p>" + beer2.beer.beer_description + "</p>"));
                $("#beer2pic").attr('src', beer2.beer.beer_label);
                $("#beer2link").attr('href', beer2.brewery.contact.url);

                $("#beer3").append($("<h4>" + beer3.beer.beer_name + " by <a id='beer3link'>" + beer3.brewery.brewery_name + "</a></h4> <img id='beer3pic'> <p>" + beer3.beer.beer_description + "</p>"));
                $("#beer3pic").attr('src', beer3.beer.beer_label);
                $("#beer3link").attr('href', beer3.brewery.contact.url);

                $("#recs").show(300);
                $("#questions").hide(300);
                window.scrollTo(0,0);
            });
    });

    $("#continue").on("click", function () {
        $("#recs").hide(300);
        $("#questions").show(300);
        window.scrollTo(0,0);
    });

    $("#recs").hide();
    $("#error").hide();
 
    $('.styled').customSelect();

});