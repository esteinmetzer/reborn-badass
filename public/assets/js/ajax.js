

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
console.log("ajax.js script is up and running!");
const ajax =
{
  getAllItems: (cb)=>
  {
    $.ajax("/getall", {
      type: "GET",
    }).then(
      function(response) {
        response = JSON.parse(response);
        const items = response.items;
        const suppliers = response.supplier;
        const curItemID = response.currentItemId;
        console.log("ajax" +curItemID);
        const curSupId = response.currentSupplierId;
        cb(items, suppliers, curItemID, curSupId );
      }
    );
  },

  getVolumeAllocation: (cb)=>
  {
    $.ajax("/api/allocation", {
      type: "GET",
    }).then(
      function(response) {
        console.log(`getVolumeAlloctation returned: ${response}`);
        cb(response);
      }
    );
  },

  updateObj : (type, id, updatedAttribute, updatedAttributeVal)=>
  { 
    type = type.toLowerCase();
    objToUpdate = 
    {
      updatedAttribute, 
      updatedAttributeVal
    }
    if(type === "item" || type === "supplier")
    {
      $.ajax("/api/update/" + type, {
        type: "PUT",
        data: objToUpdate
      }).then(
        function(response) {
          console.log(`getVolumeAlloctation returned: ${response}`);
          return response;
        }
      );
    }else
    {
      console.log('error: please submit a valid type "item" or "supplier"');
    }
  },

  createObj: (type, objToCreate, cb)=>
  { 
    type = type.toLowerCase();
    if(type === "item" || type === "supplier")
    {
      $.ajax("/api/add/" + type, {
        type: "POST",
        data: objToCreate
      }).then(
        function(response) {
          console.log(`${type} has been created`);
          cb(response);
        }
      );
    }else
    {
      console.log('error: please submit a valid type "item" or "supplier"');
    }
  },

  deleteObj: (type, objToDeleteId, cb)=>
  {
    type = type.toLowerCase();
    if(type === "item" || type === "supplier")
    {
      $.ajax("/api/delete/" + type + "/" + objToDeleteId, {
        type: "DELETE",
      }).then(
        function(response) {
          cb(response);
        }
      );
    }else
    {
      console.log('error: please submit a valid type "item" or "supplier"');
    }
  },

  loadPage: (htmlFileName)=>
  {
    $.ajax("/" + htmlFileName, {
        type: "GET",
      }).then(
        function(response) {

        }
      );  
  },
  setCurrentIds: (supId, itemId, cb)=>
    {
        const obj = 
        {
            supId,
            itemId
        } 
        $.ajax("/currentIds", {
            type: "POST",
            data: obj
          }).then(
            function(response) {
              console.log(`currentIds have been updated`);
              cb(response);
            }
          ); 
    },

    getSome: (type, cb)=>
    {
        $.ajax("/api/some/" + type, {
            type: "GET",
            data: obj
          }).then(
            function(response) {
              cb(response);
            }
          ); 
    },


}

