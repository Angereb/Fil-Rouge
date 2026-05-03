import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/seconnecter", "Connexion", "/pages/Utilisateurs/seconnecter.html", ["deconnecter"], "/js/Utilisateurs/seconnecter.js"),
    new Route("/sinscrire", "Inscription", "/pages/Utilisateurs/sinscrire.html", ["deconnecter"], "/js/Utilisateurs/sinscrire.js"),
    new Route("/compte", "Votre Compte", "/pages/Utilisateurs/compte.html", ["client", "admin"]),
    new Route("/modifPassword", "Modifier Mot de Passe", "/pages/Utilisateurs/modifpassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/AllResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/Resa.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";