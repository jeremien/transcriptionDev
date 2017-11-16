# DDR contexte

## Noyau du dispositif

On crée une nouvelle session ou chapitre que l'on renseigne avec un titre, la date est générée automatiquement. Le chapitre sera ensuite archivé à la fin de la transcription, son état sera gélé avec la possiblité de le rééditer ultérieurement et de le cloner.

Une fois le chapitre initialisé, on peut ajouter des notes qui constituront le flux principal avec des métadonnées (nom de l'intervenant, sujet, mot-clefs), un timecode est enregistré avec les notes.

Les notes peuvent être ajoutées et commentées par le public, les commentaires sont enregistrés dans le flux et associés aux notes correspondantes. 

L'accès à l'édition des chapitres, des notes, des commentaires et des métadonnées est accessible uniquement par l'administrateur.
L'accès public au dispositif ne concerne que l'écriture des notes et des commentaires.

## Modèle des données

Les chapitres, les notes et les commentaires sont développés sur un modèle de donnée unique qui est ensuite modulé en fonction de son application. Les notes et commentaires ont deux types : texte et image. 
Le texte sera édité en texte brut enrichi par un balisage léger (markdown).
Toutes les données seront accessibles en format json depuis une url pour le prototypage avec d'autes langages.

## Développements futurs

Il est envisagé de proposer ensuite :
- des outils de dessin libre et de dessin vectoriel pour pouvoir ajouter des croquis et schémas.
- un outil d'annotation de flux audio et vidéo synchronisé avec les notes principales.
- une représentation cartographique des données avec la possibilité de les éditer
- un outil de publication pour des documents imprimés avec l'édition des styles CSS, la disposition des élements dans la page, la gestion du chemin de fer.
