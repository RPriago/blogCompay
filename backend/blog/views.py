from django.shortcuts import render
from .models import Blog
from django.shortcuts import get_object_or_404

def blog_detail(request, id):
    blog = get_object_or_404(Blog, id=id)
    data = {
        "id": blog.id,
        "title": blog.title,
        "content": blog.content,
        "author": blog.author.username,
        "created_at": blog.created_at,
    }
    return JsonResponse(data)