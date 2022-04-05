# villeurbannemeetinghelper

## Comment utiliser ?

1. Installer le plugin sur Chrome
2. Visiter le lien https://rdv.villeurbanne.fr/eAppointment/element/jsp/appointment.jsp# 
3. Le calendrier devrait s'ouvrir plusieurs fois


## Comment ça marche ?
On essaie de sélectionner une date disponible dans le mois courant. 
Si une date est trouvée, on envoie un signal au serveur qui va le propager au front. 
  Un message en rouge s'affichera
Sinon 
  On retire tout. La date n'est plus disponible.
