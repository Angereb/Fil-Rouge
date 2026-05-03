// on récupère les ID des éléments de connexion
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnConnecter = document.getElementById("btnconnecter");

btnConnecter.addEventListener("click", checkIdentifiants);

function checkIdentifiants(){
    //Ici il faut appeler l'API pour vérifier les Identifiants en attendant on fake les identifiants
    
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
        

        //Il faudra récupérer le vrai token
        const token = "fuhaidfb"
        setToken(token)

        //placer le token en cookie
        setCookie(RoleCookieName, "client", 7); //Ici on défini quelle role le cookie a et combien de jour il reste actif
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }

};