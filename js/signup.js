// get id's of selectibles
const   cmaBtn      = document.getElementById("cma"),
        merchantBtn = document.getElementById("merchant"),
        customerBtn = document.getElementById("customer");

// get class of forms
const   cmaForm       =  document.querySelector(".cma-form"),
        merchantForm  = document.querySelector(".merchant-form"),
        customerForm  = document.querySelector(".customer-form");

cmaBtn.addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.classList.remove("active")
        merchantBtn.classList.add("active")
        customerBtn.classList.remove("active")
    }else{
        this.classList.add("active")
        merchantBtn.classList.remove("active")
        customerBtn.classList.remove("active")
    }

    if(cmaForm.classList.contains("existing")){
        cmaForm.classList.remove("existing")
        merchantForm.classList.add("existing")
        customerForm.classList.add("existing")
    } else {
        cmaForm.classList.add("existing")
        merchantForm.classList.remove("existing")
        customerForm.classList.add("existing")
    }
})

merchantBtn.addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.classList.remove("active")
        customerBtn.classList.add("active")
        cma.classList.remove("active")
    }else{
        this.classList.add("active")
        customerBtn.classList.remove("active")
        cma.classList.remove("active")
    }

    if(merchantForm.classList.contains("existing")){
        merchantForm.classList.remove("existing")
        customerForm.classList.add("existing")
        cmaForm.classList.add("existing")
    } else {
        merchantForm.classList.add("existing")
        cmaForm.classList.add("existing")
        customerForm.classList.remove("existing")
    }
})

customerBtn.addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.classList.remove("active")
        merchantBtn.classList.remove("active")
        cma.classList.add("active")
    }else{
        this.classList.add("active")
        merchantBtn.classList.remove("active")
        cma.classList.remove("active")
    }

    if(customerForm.classList.contains("existing")){
        customerForm.classList.remove("existing")
        merchantForm.classList.add("existing")
        cmaForm.classList.add("existing")
    } else {
        cmaForm.classList.remove("existing")
        merchantForm.classList.add("existing")
        customerForm.classList.add("existing")
    }
})