from django.db import models
from django.contrib.auth import get_user_model

import datetime


# Create your models here.
class Project(models.Model):
    user = models.ForeignKey(
        get_user_model(), related_name="projects", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=100)
    description = models.TextField()
    start_date = models.DateField(default=datetime.date.today)
    end_date = models.DateField(null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    status = models.CharField(
        max_length=50,
        default=IN_PROGRESS,
        choices=[(IN_PROGRESS, "In Progress"), (COMPLETED, "Completed")],
    )

    def __str__(self):
        return str(self.id)


class Task(models.Model):
    project = models.ForeignKey(Project, related_name="tasks", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=400)

    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    status = models.CharField(
        max_length=50,
        default=IN_PROGRESS,
        choices=[(IN_PROGRESS, "In Progress"), (COMPLETED, "Completed")],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)
