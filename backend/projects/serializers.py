from .models import Project, Task

from rest_framework import serializers


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["id", "title", "description", "status", "created_at"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "end_date",
            "start_date",
            "status",
            "created_at",
        ]
