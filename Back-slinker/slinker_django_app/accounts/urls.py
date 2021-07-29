from django.urls import path,include
from .api import RegisteAPI,LoginAPI,UserAPI,FacebookAPI,GoogleAPI
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
    path('api/auth/logout',knox_views.LogoutAllView.as_view()), 
    # post request
    # get facebook from react app and pass it as "auth_token" 
    path('api/auth/facebook',FacebookAPI.as_view()), 
    # google login url
    path('api/auth/google',GoogleAPI.as_view()), 
]