from django.urls import path, include

app_name = 'avi_v1'

urlpatterns = [
    path('accounts/', include('accounts.urls', namespace='accounts')),
]