from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User
from django.contrib.auth.hashers import make_password


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





