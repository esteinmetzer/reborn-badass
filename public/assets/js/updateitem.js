ajax.getSome("item",(res)=>
{   obj = res[0];
    console.log(res[0]);
    $("#item_name").val(obj.item_name);
    $("#description").val(obj.description);
    $("#units_pllt").val(obj.units_pllt);
    $("#prj_units").val(obj.prj_units);

    setSupplier(obj.supplier_id);
});

function setSupplier(id)
{
    suppliers.forEach(e => {
        if(e.supplier_id === id)
        {
            console.log("prepend " + e.supplier_name);
            $("#supplerListUpdate").append(`<option value = "${e.supplier_id}">${e.supplier_name}</option>`);
            return;
        }
    });
    suppliers.forEach(e => {
        if(!(e.supplier_id === id))
        {
            console.log("prepend " + e.supplier_name);
            $("#supplerListUpdate").append(`<option value = "${e.supplier_id}">${e.supplier_name}</option>`);
        }
    });

    $("#supplerListUpdate").append(`<option>Add New</option>`);
}
