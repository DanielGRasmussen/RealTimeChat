from django.urls import path
from django.contrib.auth.views import home, messages
 
 
urlpatterns = [
    path('', home),
    path('messages/', messages), 
]