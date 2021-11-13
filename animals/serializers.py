from rest_framework import serializers

from .models import Animal

class AnimalSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Animal
        fields = '__all__'
        
