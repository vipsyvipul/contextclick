$(document).ready(function() {

    var cors_url = "https://cors-anywhere.herokuapp.com/";

    $("a[data-ctxt='true']").hover(function() {

        var hover_url = $(this).attr('href');
        var ctxt_url = cors_url + hover_url;

        //Prepend https://cors-anywhere.herokuapp.com/ to avoid CORS errors
        $.get(ctxt_url, function(data) {

            var ctxt_title = $(data).filter("meta[property='og:title']").attr("content");
            var ctxt_description = $(data).filter("meta[property='og:description']").attr("content");
            var ctxt_image_url = $(data).filter("meta[property='og:image']").attr("content");

            ctxtCardGen(ctxt_image_url, ctxt_title, ctxt_description);
        });
    });

    function ctxtCardGen(ctxt_image_url, ctxt_title, ctxt_description) {
        isUrlValid(ctxt_image_url);
        if (isUrlValid(ctxt_image_url)) {

            $("#ctxt-card").append("<img src=\"" + ctxt_image_url + "\">");
        }

        if (ctxt_title != undefined) {
            $("#ctxt-card").append("<p class=\"ctxt-title\">" + ctxt_title + "</p>");
        }

        if (ctxt_description != undefined) {
            $("#ctxt-card").append("<p class=\"ctxt-description\">" + ctxt_description + "</p>");
        }

        console.log(ctxt_title);
        console.log(ctxt_description);
        console.log(ctxt_image_url);
    }

    function isUrlValid(url) {

        var exp = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

        var match = exp.test(url);

        if (match != 'true') {
            console.log(match);
        }
    }

});