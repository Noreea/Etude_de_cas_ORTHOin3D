from django.db import models

class Record(models.Model):
    text = models.TextField()

def __str__(self):
    if self.text:
        return self.text[:50]
    else:
        return "No text"

# Ce fichier contient le modèle de données de l'application. Il définit les classes Python qui correspondent aux tables de la base de données.
