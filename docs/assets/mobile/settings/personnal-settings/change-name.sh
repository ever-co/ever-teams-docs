#!/bin/bash

# Spécifiez le dossier dans lequel vous souhaitez effectuer le parcours
folder="."

# Vérifie si le dossier existe
if [ -d "$folder" ]; then

    # Se déplace dans le dossier spécifié
    cd "$folder"

    # Parcours tous les fichiers du dossier
    for filename in *; do
        # Vérifie si le fichier existe et n'est pas un dossier
        if [ -f "$filename" ]; then
            
            # Récupère le nouveau nom de fichier en remplaçant les répétitions de `-` par un seul `-`
            new_filename=$(echo "$filename" | sed 's/-\{2,\}/-/g')
            
            # Remplace le caractère `&` par `and` dans le nouveau nom de fichier
            new_filename=$(echo "$new_filename" | sed 's/&/and/g')
            
            # Remplace les parenthèses par `-`
            new_filename=$(echo "$new_filename" | sed 's/[()]//g')
            
            # Met le nom de fichier en minuscules
            new_filename=$(echo "$new_filename" | tr '[:upper:]' '[:lower:]')
            
            # Vérifie si le nouveau nom de fichier est différent de l'ancien nom
            if [ "$filename" != "$new_filename" ]; then
                # Renomme le fichier
                mv "$filename" "$new_filename"
            fi
        fi
    done

else
    echo "Le dossier spécifié n'existe pas."
fi