
let items;
let suppliers;
let currentSupplierId;
let currentItemId;


ajax.getAllItems((i, s, iId, sId)=>
{
  currentSupplierId = sId;
  currentItemId = iId;
  console.log("item id: " +currentItemId);
  console.log("supplier id: " +currentSupplierId);
  items = i;
  suppliers = s
  console.log(i);
  console.log(s);
  s.forEach(e =>
    {
      $("#supplerList").prepend(`<option value = "${e.supplier_id}">${e.supplier_name}</option>`);
    });
});

$("#supplerList").change((obj)=>
{
  $("#itemList").empty();
  currentSupplierId = obj.target.value;
  console.log(currentSupplierId);
  
  if(obj.target.value === 'Add New')
  {
    location.replace("addSupplier");
  }else if(!(isNaN(parseInt(obj.target.value))))
  {
    $("#itemList").append(`<option>Select Item</option>`);
    items.forEach(e=>
      {
        if(e.supplier_id == obj.target.value)
        {
          $("#itemList").prepend(`<option value = "${e.item_id}">${e.item_name}</option>`);
        }
      });
  }
});


$("#itemAction").change((obj)=>
{
  if(currentItemId == -1 && currentSupplierId == -1)
  {
    $("#hint").text("Please select a supplier and an item first");
    $("#hint").attr("class", "hint");
    return;
  }
  
  switch (obj.target.value) {
    case 'Add':
      ajax.setCurrentIds(currentSupplierId, currentItemId, ()=>
      {
        location.replace('addItem');
      });
      break;
    case 'Update':
      if(currentItemId == -1)
      {
        $("#hint").text("Please select a supplier and an item first");
        $("#hint").attr("class", "hint");
      }else
      {
        ajax.setCurrentIds(currentSupplierId, currentItemId, ()=>
        { 
          location.replace('updateItem');
        });
      }
      break;
    case 'Delete':
      if(currentItemId === undefined)
      {
        break;
      }else
      {
        ajax.deleteObj('item', currentItemId);
        location.reload();
      }
      break;
    case 'View Allocation':
      ajax.setCurrentIds(currentSupplierId, currentItemId, ()=>
      {
        location.replace('allocationpage');
      });

      break;
  
    default:
      break;
  }
});

$("#itemList").change((obj)=>
{
  currentItemId = obj.target.value;
  console.log(currentItemId);
  ajax.setCurrentIds(currentSupplierId, currentItemId,()=>
  {
    console.log("ids updated");
  }
  );
})

$("form").click((obj)=>
{
  obj.preventDefault();
  if(isNaN(parseInt(obj.target.value)))
  {
    switch (obj.target.id) {
      case 'add-item':
        addItem();
        break;
      case 'add-supplier':
        addSupplier();
      break;
      case 'reset':
        location.replace('/');
        break;
      case 'update-item':
        ajax.deleteObj("item", currentItemId, ()=>
        {
          addItem();
        });
        break;
      default:
        console.log(obj.target.id)
        break;
    }
  }else 
  {

  }

});


function addItem()
{
 const objToCreate =
 {
   item_name: $("#item_name").val(),
   description: $("#description").val(),
   supplier_id: currentSupplierId,
   units_pllt: $("#units_pllt").val(),
   prj_units: $("#prj_units").val()
 }

 console.log(objToCreate);
 if(checkForUndefined(objToCreate))
 {
   return;
 }else
 {
  ajax.createObj("item",objToCreate, ()=>
  {
   console.log ("item created");
   location.replace("/");
  });
 }
}

function addSupplier()
{
  const objToCreate = 
  {
    supplier_name: $("#supplier-name").val(),
    address: $("#supplier-address").val()
  }
  if(checkForUndefined(objToCreate))
  {
    return;
  }else
  {
    ajax.createObj("supplier",objToCreate, ()=>
    {
      location.replace('/');
    });
  }
}

function checkForUndefined(obj)
{
  let b = false;
  Object.values(obj).forEach(e => 
  {
    if(e == undefined || e === "") 
    {
      console.log("an undefined variable");
      b = true;
      return;
    }
  })
  console.log(b);
  return b;
}

function appendVolAllocation()
{
  ajax.getSome('supplier',(res)=>
  {
    console.log(res[0]);
    $("#allocation-loc").append(res[0].supplier_name);
  });
  ajax.getVolumeAllocation((res)=>
  {
    $("#vol-allocation").append(res);
  });
}
