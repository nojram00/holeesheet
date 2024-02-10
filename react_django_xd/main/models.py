from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    slug = models.CharField(max_length=12)
    post_title = models.CharField(max_length=20)
    post_body = models.TextField(max_length=225)
    user_post = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.slug

class UserProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField('/src/assets/img/profiles')
