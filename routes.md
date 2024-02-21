| route                  | Verbe  | Front | Back | Description                                                 | status |
| ---------------------- | ------ | ----- | ---- | ----------------------------------------------------------- | ------ |
| /visiteurs             | post   | non   | oui  | enregister un user                                          | ok     |
| /visiteurs             | patch  | non   | oui  | mettre à jour les informations de user sans le mot de passe | ok     |
| /users/update-password | patch  | non   | oui  | mettre à jour le mot de passe                               | ok     |
| /login                 | post   | non   | oui  | verifier si user existe et recup de token                   | ok     |
| /me                    | get    | non   | oui  | get les informations de user avec un token                  | ok     |
| /logout                | get    | non   | oui  | deconnecter le user en modifiant la date d'exp de token     | ok     |
| /users                 | delete | non   | oui  | suppression du compte                                       |

use cases:

En utilisateur, on peut avoir :

des travleurs: visiteur | voyageur
administrateur

| En tant que ... | J'ai besoin de ...                                                                   | Afin de ...                                         | Sprint |
| --------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------- | ------ | --- | --- |
| visiteur        | consulter la page d'acceuil                                                          | visualiser le contenue                              | 1      |
| visiteur        | consulter la liste des voyages disponibles                                           | prendre une idée sur voyages disponibles            | 1      |
| visiteur        | avoir accés à la page d'inscription                                                  | pouvoir s'incrire                                   | 1      |
| visiteur        | avoir accés à la page de connexion                                                   | pouvoir se connecter                                | 1      |
| visiteur        | avoir accés à s'insrire à newsletter                                                 | recevoir les nouvelles de site                      | 1      |
| voyageur        | avoir accés à la page profil                                                         | afficher mon profil                                 | 2      |
| voyageur        | de me déconnecter                                                                    | quitter l'espace client                             | 2      |
| voyageur        | modifier mes informations                                                            | -----------------------------                       | 2      |
| voyageur        | supprimer mon compte                                                                 | -----------------------------                       | 2      |
| voyageur        | pouvoir mettre à jour ou récup son mot de passe de connexion                         |                                                     | 2      |
| voyageur        | choisir un voyage à une date proposé et lieu d'embarquement                          | planifier mes vacances                              | 2      |
| voyageur        | faire une réservation du voyage                                                      |                                                     | 2      |
| voyageur        | effectuer le paiement en ligne pour confirmer ma réservation                         | ----------------------                              | 2      |
| voyageur        | annuler ma réservation                                                               | prevenir tout imprevue                              | 2      |     | 2   |
| voyageur        | pouvoir modifier ma réservation existante                                            | reactifier en cas d'erreur                          |
| voyageur        | etre informer du nombre du place restantes pour chaque voyage                        | reagir en cas de rupture des places                 | 2      |
| voyageur        | afficher le prix total de voyage                                                     | pouvoir payer                                       |
| voyageur        | voir l'historique et la réservation en cours                                         |
| voyageur        | avoir plusieurs options de paiement(cartes de crédit, PayPal)                        |
| voyageur        | Pouvoir contacter le service client via un formulaire en ligne                       |
| voyageur        | Recevoir un message de confirmation de ma réservation                                |
| voyageur        | Pouvoir lire les CGU du site                                                         |
| voyageur        | Pouvoir jouer à un quiz                                                              | tester ses connaissances sur le lieu de destination |
| administrateur  | pouvoir ajouter/modifier/supprimer un voyage                                         |
| administrateur  | pouvoir voir la liste des utilisateurs enregistrés                                   |
| administrateur  | gérer/ supprimer des comptes                                                         |
| administrateur  | pouvoir configurer les options de paiement acceptées sur le site                     |
| administrateur  | gérer les paramètres de facturation, et résoudre les problèmes liés aux transactions |
| administrateur  | pouvoir voir la liste des réservations par chaque voyageur                           |
