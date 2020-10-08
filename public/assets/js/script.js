// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".change-devour").on("click", function(event) {
        console.log('clicked')
        var id = $(this).data("id");
        var eatenBurger = $(this).data("devoured");
    
        var ateBurger = {
          devoured: eatenBurger
        };
    
        // Send the PUT request.
        $.ajax("/burgers/create/" + id, {
          type: "PUT",
          data: ateBurger
        }).then(
          function() {
            console.log("changed burger to", eatenBurger);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
        };

        // Send the POST request.
        $.ajax("/burgers/create", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});
