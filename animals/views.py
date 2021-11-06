from django.shortcuts import get_object_or_404
from rest_framework import generics

from .models import Animal

# Views

class AnimalListAPIView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()

class AnimalDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()


