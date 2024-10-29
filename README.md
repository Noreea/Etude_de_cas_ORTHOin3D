# Etude_de_cas_ORTHOin3D
Bonjour Thierry,
comme prévu j'ai pu mettre en place un serveur local Django et l'interfacer avec un frontend en React. L'utilisateur peut créer, lire et modifier des enregistrements constitués d'un ID et d'un texte. J'ai utilisé les "state" React, une API REST dans Django, et une base de données.

### **1. Cloner le Dépôt**

```bash
# l'URL SSH :
git clone git@github.com:Noreea/ORTHOiN3D_etude_de_cas_norea.git

# l'URL HTTPS :
git clone https://github.com/Noreea/Etude_de_cas_ORTHOin3D

# Effectuer les migrations (Se rend dans le fichier backend_django et effectuer) : 
python3 manage.py migrate

# Lancer le server (dans le fichier backend_django) :
python3 manage.py runserver

# Lancer le front React ( Se rendre dans le fichier frontend ) :
npm install
npm start

