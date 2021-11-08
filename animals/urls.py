from django.urls import path

from .views import AnimalDetailAPIView, AnimalListAPIView

urlpatterns = [
    path('<int:pk>/', AnimalDetailAPIView.as_view(), name='animal_detail'),
    path('', AnimalListAPIView.as_view(), name='animal_list'),
]