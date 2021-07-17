from django.urls import path,include
from .api import RegisteAPI,LoginAPI,UserAPI
from knox import views as knox_views

urlpatterns=[
    # post request
    # register url
    path('api/auth/register',RegisteAPI.as_view()),
    # post request
    # login url
    path('api/auth/login',LoginAPI.as_view()), 
    # get request
    # get current user, pass token in headers
    path('api/auth/user',UserAPI.as_view()), 
    # post request
    # logout url, pass token in headers
    path('api/auth/logout',knox_views.LogoutView.as_view()), 
]