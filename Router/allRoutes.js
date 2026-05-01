import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/seconnecter", "Connexion", "/pages/Utilisateurs/seconnecter.html"),
    new Route("/sinscrire", "Inscription", "/pages/Utilisateurs/sinscrire.html"),
    new Route("/compte", "Votre Compte", "/pages/Utilisateurs/compte.html"),
    new Route("/modifPassword", "Modifier Mot de Passe", "/pages/Utilisateurs/modifpassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/AllResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/Resa.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";