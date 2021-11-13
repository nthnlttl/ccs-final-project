from django.shortcuts import get_object_or_404
from rest_framework import generics, permissions

from .models import Animal
from .serializers import AnimalSerializer
from .permissions import IsOwnerOrReadOnly
# Views

class AnimalListAPIView(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer
    permissions_class = IsOwnerOrReadOnly

    def perform_create(self, serializer):
        serializer.save(name=self.request.user)

class AnimalDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

