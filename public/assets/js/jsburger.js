import { response } from "express";

$(function() {

    //Get request to Read data
    $("").on("click",(event) => {
      //console logs the clicked target for debugging purposes.
      console.log(event.target)

  
      $.ajax("/", {
        type: "GET",
      }).then(
        function(response) {
          console.log(response);
          // Reload the page to get the updated list
          // location.reload();
        }
      );
    });


    //Post request to Create data
    $("").on("click",(event) => {
      //console logs the clicked target for debugging purposes.
      console.log(event.target)

      //object to be sent for the create call. 
      const obj = {
        name: 'test_name',
        otherData: 'test other data'
      };
      // Send the PUT request.
      $.ajax("/api/add", {
        type: "POST",
        data: obj
      }).then(
        function(response) {
          console.log(response);
          // Reload the page to get the updated list
          //  location.reload();
        }
      );
    });


    //Post request to Update data
    $("").on("click",(event) => {
      //console logs the clicked target for debugging purposes.
      console.log(event.target)

  
      const obj = {
        name: 'test_name',
        otherData: 'test other data'
      };

      // Send the PUT request.
      $.ajax("/api/update", {
        type: "POST",
        data: obj
      }).then(
        function(response) {
          console.log(response);
          // Reload the page to get the updated list
          //location.reload();
        }
      );
    });

    //Delete request to Delete data
    $("").on("click",(event) => {
      //console logs the clicked target for debugging purposes.
      console.log(event.target)

  
      const obj = {
        name: 'test_name',
        otherData: 'test other data'
      };

      // Send the Delete request.
      $.ajax("/api/delete", {
        type: "DELETE",
        data: obj
      }).then(
        function(response) {
          console.log(response);
          // Reload the page to get the updated list
          //location.reload();
        }
      );
    });
  });
  