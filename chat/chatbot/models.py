from django.db import models
from django.contrib import admin
from django.utils import timezone
import uuid


class Request(models.Model):
    id = models.CharField(max_length=400, default=uuid.uuid4, primary_key=True)
    request = models.CharField(max_length=400)
    response = models.CharField(max_length=400)
    sender = models.CharField(max_length=120)
    sender_id = models.IntegerField()

    def _str_(self):
        return self.text


class User(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    name = models.CharField(max_length=400)

    def _str_(self):
        return self.name


# class Response(models.Model):
#     text = models.CharField(max_length=400)
#     sender = models.CharField(max_length=120)

#     def _str_(self):
#         return self.text
