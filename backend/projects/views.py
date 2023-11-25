from django.shortcuts import render
from .models import Project, Task
from .serializers import ProjectSerializer

from rest_framework import viewsets, permissions, mixins


# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)
