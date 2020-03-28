
function setSupplier()
{
    ajax.getAllItems((i,s,iId,sId)=>
    {
         const sup = s;
         const id = sId;
        $("#supplerList").empty();
         sup.forEach(e => {
             console.log(e.supplier_id + id)
            if(e.supplier_id == id)
            {
                console.log("prepend " + e.supplier_name);
                $("#supplerList").prepend(`<option value = "${e.supplier_id}">${e.supplier_name}</option>`);
                return;
            }
        });
        sup.forEach(e => {
            console.log(e.supplier_id + id)
            if(!(e.supplier_id == id))
            {
                console.log("prepend " + e.supplier_name);
                $("#supplerList").append(`<option value = "${e.supplier_id}">${e.supplier_name}</option>`);
            }
        });
    
        $("#supplerList").append(`<option>Add New</option>`);
    });
}

setSupplier();
