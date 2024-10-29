from rest_framework import viewsets
from .models import Record
from .serializers import RecordSerializer

class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer

# Ce fichier contient les vues pour l'application. Les vues sont utilisées pour gérer les requêtes HTTP et générer des réponses HTTP.
