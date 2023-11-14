from .models import User, Profile
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["name", "phone"]


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ["email", "profile"]


class RegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)

    def save(self, request):
        try:
            return User.objects.create_user(
                self.validated_data.get("email"), self.validated_data.get("password")
            )
        except:
            raise serializers.ValidationError({"email": "Email already exists"})
