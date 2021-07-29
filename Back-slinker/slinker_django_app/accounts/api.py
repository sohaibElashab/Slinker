from django.contrib.auth.models import User
from rest_framework import generics,permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer,RegisterSerializer,LoginSerializer,FacebookSerializer,GoogleSerializer

# register api
class RegisteAPI(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })

# login api
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user)[1]
        })


# get user api
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

# facebook api
class FacebookAPI(generics.GenericAPIView):

    serializer_class = FacebookSerializer

    def post(self, request):
        """
        POST with "auth_token"
        Send an access token as from facebook to get user information
        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = ((serializer.validated_data)['auth_token'])
        
        
        if user==False:
            return Response({
                "error":"Email already exists"
            })
        elif user[1]=="register":
            return Response({
            "type":user[1],
            "user": UserSerializer(user[0],context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user[0])[1]
            })
            
        elif user[1]=="login":
            return Response({
                "type":user[1],
                "user":UserSerializer(user[0],context=self.get_serializer_context()).data,
                "token":AuthToken.objects.create(user[0])[1]
                })
        else:
            return Response({"error":user})
     
# google api
class GoogleAPI(generics.GenericAPIView):

    serializer_class = GoogleSerializer

    def post(self, request):
        """
        POST with "auth_token"
        Send an idtoken as from google to get user information
        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = ((serializer.validated_data)['auth_token'])
        
        if user==False:
            return Response({
                "error":"Email already exists"
            })
        elif user[1]=="register":
            return Response({
            "type":user[1],
            "user": UserSerializer(user[0],context=self.get_serializer_context()).data,
            "token":AuthToken.objects.create(user[0])[1]
            })
            
        elif user[1]=="login":
            return Response({
                "type":user[1],
                "user":UserSerializer(user[0],context=self.get_serializer_context()).data,
                "token":AuthToken.objects.create(user[0])[1]
                })
        else:
            return Response({"error":user})
     