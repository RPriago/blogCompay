from django.db import models

class Blog(models.Model):
    tittle = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(null=True, blank=True)
    image2 = models.ImageField(null=True, blank=True)

def __str__(self):
    return self.tittle