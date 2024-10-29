from rest_framework import serializers
from .models import Record

class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ['id', 'text']

# Ce fichier contient les sérialiseurs pour l'application. Les sérialiseurs sont utilisés pour convertir les objets Django en JSON et vice versa.
