from django.contrib import admin
from django.urls import path, include
from blog import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.api.urls')),
    path('blogs/<int:id>/', views.blog_detail, name='blog_detail'),
]
