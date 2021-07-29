from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from django.contrib.auth.hashers import make_password
from . import facebook,google
from rest_framework.exceptions import AuthenticationFailed

# user serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','website','notif','is_staff')

# register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','website','notif','password')
        extra_kwargs = {'password':{'write_only':True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        user = User.objects.create(**validated_data)
        return user

# login serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(**data)
        
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect credentials")


# facebook serializer

def facebook_register(email,id,provider,name):
    
    if User.objects.filter(email=email).exists():
        if User.objects.filter(email=email,auth_provider=provider).exists():
            # user = authenticate(username=email,password=Upass)
            user = User.objects.get(email=email,password=make_password(salt=id,password=id))
            if user:
                return [user,'login']
            else:
                return "Authentication fail"
        return False
    else: 
        user = User.objects.create(email=email,username=name,password=make_password(salt=id,password=id),website="",auth_provider=provider)
        return [user,"register"]

class FacebookSerializer(serializers.Serializer):
    """Handles serialization of facebook related data"""
    auth_token = serializers.CharField()

    def validate_auth_token(self, auth_token):
        user_data = facebook.Facebook.validate(auth_token)

        try:
            user_id = user_data['id']
            email = user_data['email']
            name = user_data['name']
            provider = 'facebook'
            return facebook_register(email,user_id,provider,name)
        except Exception as identifier:

            raise serializers.ValidationError(
                'The token is invalid or expired. Please try again.'
            )

# google serializer

class GoogleSerializer(serializers.Serializer):
    auth_token = serializers.CharField()

    def validate_auth_token(self, auth_token):
        user_data = google.Google.validate(auth_token)
        try:
            user_data['sub']
        except:
            raise serializers.ValidationError(
                'The token is invalid or expired. Please try again.'
            )

        if user_data['aud'] != "338514051366-2l7uuqka8l7fmbe9dhim3i476k8n6889.apps.googleusercontent.com":

            raise AuthenticationFailed('oops, who are you?')

        user_id = user_data['sub']
        email = user_data['email']
        name = user_data['name']
        provider = 'google'

        return facebook_register(email,user_id,provider,name)
