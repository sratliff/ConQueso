$(document).ready(function () {
    // api key
    //519f9322dea203f092b234d5b93a1b27
    $("#getZomatoData").on("click", function () {
        $.ajax({
            method: "GET",
            crossDomain: true,
            url: "https://developers.zomato.com/api/v2.1/cities?q=Cincinnati",
            dataType: "json",
            async: true,
            headers: {
                "user-key": "519f9322dea203f092b234d5b93a1b27"
            },
            success: function (data) {
                console.log("Data: " + data.location_suggestions[0].id);
            },
            error: function (x, y, z) {
                console.log(x + ' ' + y + ' ' + z);
            }
        });
    });
});