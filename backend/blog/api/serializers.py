from rest_framework import serializers
from ..models import Blog

class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id', 'tittle', 'body', 'image', 'image2')

