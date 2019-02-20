// get the various clickables
var addButton = document.getElementById("add");
var editButton = document.getElementById("edit");

// get the two forms
var addForm = document.getElementById("new");
var editForm = document.getElementById("exist");

// add the click function
addButton.addEventListener("click", function(){
    if(this.classList.contains("active-staff")){
        this.classList.remove("active-staff")
        editButton.classList.add("active-staff")
    }else{
        this.classList.add("active-staff")
        editButton.classList.remove("active-staff")
    }

    if(addForm.classList.contains("existing")){
        addForm.classList.remove("existing")
        editForm.classList.add("existing")
    } else {
        addForm.classList.add("existing")
        editForm.classList.remove("existing")
    }
    
})

editButton.addEventListener("click", function(){
    if(this.classList.contains("active-staff")){
        this.classList.remove("active-staff")
        addButton.classList.add("active-staff")
    }else{
        this.classList.add("active-staff")
        addButton.classList.remove("active-staff")
    }

    if(editForm.classList.contains("existing")){
        editForm.classList.remove("existing")
        addForm.classList.add("existing")
    } else {
        editForm.classList.add("existing")
        addForm.classList.remove("existing")
    }
})
