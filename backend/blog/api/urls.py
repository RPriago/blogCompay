from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet

blog_router = DefaultRouter()
blog_router.register(r'blog', BlogViewSet)
