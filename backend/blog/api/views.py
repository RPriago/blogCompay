from rest_framework.viewsets import ModelViewSet
from ..models import Blog
from .serializers import BlogSerializers

class BlogViewSet(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializers

