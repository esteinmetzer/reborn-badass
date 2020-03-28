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
console.log("ajax.js script is up and running!");
const ajax =
{


  getAllItems: ()=>
  {
    $.ajax("/", {
      type: "GET",
    }).then(
      function(response) {
        console.log(response);
      }
    );
  },

  getVolumeAllocation: (supplier_id)=>
  {
    $.ajax("/allocation/" + supplier_id, {
      type: "GET",
    }).then(
      function(response) {
        console.log(`getVolumeAlloctation returned: ${response}`);
        return response;
      }
    );
  },

  updateObj : (type, id, updatedAttribute, updatedAttributeVal)=>
  { 
    type = toLowerCase(type);
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

  createObj: (type, objToCreate)=>
  { 
    type = toLowerCase(type);
    if(type === "item" || type === "supplier")
    {
      $.ajax("/api/add/" + type, {
        type: "POST",
        data: objToCreate
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

  deleteObj: (type, objToDeleteId)=>
  {
    type = toLowerCase(type);
    if(type === "item" || type === "supplier")
    {
      $.ajax("/api/delete/" + type + "/" + objToDeleteId, {
        type: "DELETE",
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
  }
}

module.exports = ajax;