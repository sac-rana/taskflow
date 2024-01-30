from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer

from rest_framework import viewsets, permissions


# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Project.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(
            project__user=self.request.user, project_id=self.kwargs["project_pk"]
        )

    def perform_create(self, serializer):
        serializer.save(project_id=self.kwargs["project_pk"])
