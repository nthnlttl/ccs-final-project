from django.db import models

# Create your models here.

class Animal(models.Model):
    name = models.CharField(max_length=255, null=True)
    type = models.CharField(max_length=255)
    breed = models.CharField(max_length=255)
    size = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    color = models.CharField(max_length=255)
    coat = models.CharField(max_length=255, null=True)
    good_with_children = models.CharField(max_length=255)
    house_trained = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='animals/', null=True)
    health_issues = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name