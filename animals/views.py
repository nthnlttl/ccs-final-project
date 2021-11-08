from django.shortcuts import get_object_or_404
from rest_framework import generics, serializers

from .models import Animal
from .serializers import AnimalSerializer

# Views

class AnimalListAPIView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class AnimalDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

