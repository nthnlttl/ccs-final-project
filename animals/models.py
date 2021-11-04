from django.db import models

# Create your models here.

class Animal(models.Model):
    type = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    age = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    