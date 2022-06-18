(function () {
    'use strict'
  
    var requiredFields = document.querySelectorAll('[required]');
    requiredFields.forEach(function(field){
        var requiredStrong = document.createElement("strong");
        requiredStrong.innerText = "*";
        requiredStrong.className = "required";
        var fieldLabel = field.parentElement.querySelector("label");
        fieldLabel.append(requiredStrong);
    })

    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()