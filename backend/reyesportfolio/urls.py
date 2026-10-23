
from django.urls import path
from .views import (
    ProjectListView,
    SkillListView,
    ContactCreateView,
)

urlpatterns = [
    path('projects/', ProjectListView.as_view(), name='project-list'),
    path('skills/', SkillListView.as_view(), name='skill-list'),
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
]
