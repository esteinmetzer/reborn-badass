import { response } from "express";
let testItem = 
{
  item_name: 'Test Name',
  description: 'This is a test item', 
  supplier_id: '123', 
  units_pllt: '33', 
  prj_units: '99',
  dataType : 'item'
}

let vendor = 
{
  supplier_name: '', 
  address: '',
  dataType : 'vendor'
}


let obj = 
{
  item:
  {
    item_name: '',
    description: '', 
    supplier_id: '', 
    units_pllt: '', 
    prj_units: '',
    dataType : 'item'
  },

vendor: 
  {
    supplier_name: '', 
    address: '',
    dataType : 'vendor'
  }
}


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
      const data = testItem;
      // Send the PUT request.
      $.ajax("/api/add/" + testItem.dataType , {
        type: "POST",
        data: data
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

  
      const data = 


      // Send the PUT request.
      $.ajax("/api/update"+ , {
        type: "PUT",
        data: data
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


  $.ajax("/", {
    type: "GET",
  }).then(
    function(response) {
      console.log(response);
      // Reload the page to get the updated list
      // location.reload();
    }
  );
  