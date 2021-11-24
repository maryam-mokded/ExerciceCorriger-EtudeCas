
         function checkEmail(email) {
             var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
         }
         function validate() {
             var email = document.getElementById("email").value;
         
             if (checkEmail(email)) {
                document.getElementById("error").innerHTML=" Votre commande est valide .. ";
                               
             } else {
                document.getElementById("error").innerHTML=("Adresse e-mail non valide");
             }
             return false;
         }
         