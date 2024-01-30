from django.contrib import admin
from .models import Project, Task

# Register your models here.


class TaskInline(admin.TabularInline):
    model = Task
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "status", "created_at")

    inlines = [TaskInline]

    class Meta:
        model = Project


admin.site.register(Project, ProjectAdmin)
