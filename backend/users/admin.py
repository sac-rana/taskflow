from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Profile


class ProfileInline(admin.TabularInline):
    model = Profile


class UserAdmin(BaseUserAdmin):
    list_display = ("email", "last_login", "date_joined", "is_active", "is_superuser")
    readonly_fields = ("date_joined", "last_login")
    ordering = ("-date_joined",)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    inlines = [ProfileInline]


admin.site.register(User, UserAdmin)
