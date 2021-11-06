from django.shortcuts import get_object_or_404
from rest_framework import generics, serializers

from .models import Animal
from .serializers import AnimalSerializer

# Views

class AnimalListAPIView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

