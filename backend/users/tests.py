from django.test import TestCase
from .models import User, Profile


# Create your tests here.
class UserModelTestCase(TestCase):
    def setUp(self):
        user = User.objects.create_user(
            email="abc_test@gmail.com",
            password="abc123",
        )
        Profile.objects.create(
            user=user,
            name="abc",
            phone="1234567890",
        )
        User.objects.create_superuser(
            email="abc_superuser_test@gmail.com",
            password="abc123",
        )

    def test_user_model(self):
        user = User.objects.get(email="abc_test@gmail.com")
        self.assertEqual(user.email, "abc_test@gmail.com")
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)
        self.assertTrue(user.is_active)
        self.assertEqual(user.profile.name, "abc")
        admin = User.objects.get(email="abc_superuser_test@gmail.com")
        self.assertEqual(admin.email, "abc_superuser_test@gmail.com")
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)
        self.assertTrue(admin.is_active)
