from django.urls import path,include
from .api import RegisteAPI,LoginAPI
from knox import views as knox_views

urlpatterns=[
    path('api/auth',include('knox.urls')),
    path('api/auth/register',RegisteAPI.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
]