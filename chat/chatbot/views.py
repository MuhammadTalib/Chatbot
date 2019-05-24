from django.shortcuts import render
from rest_framework import viewsets
from .serializer import RequestSerializer
from .serializer import UserSerializer
from time import gmtime, strftime
from .models import Request
from .models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status
from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
import requests


class ChatView(APIView):

    def get(self, request):
        request = Request.objects.all()
        serializer = RequestSerializer(request, many=True)
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return Response({'chats': serializer.data, 'user': user_serializer.data})

    def post(self, request):

        message = request.data

        url = 'https://api.dialogflow.com/v1/query?v=20150910&contexts=smalltalk&lang=en&query=' + \
            message['request']+'&sessionId=12345&timezone=America/New_York'
        Headers = {
            'Authorization': 'Bearer 14cb40553f924b9db58b8744f1bae8f5',
        }
        r = requests.get(url, headers=Headers)
        print("The response", r.json()['result']['fulfillment']['speech'])

        showtime = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        print(showtime)
        serializer = RequestSerializer(data={
                                             "request": message['request'],
                                             "response": r.json()['result']['fulfillment']['speech'],
                                             "sender": request.data['sender'],
                                             "sender_id": request.data['sender_id']
                                             })
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def getObject(request, object_id):
    obj = get_object_or_404(Request, id=object_id)
    serializer = RequestSerializer(obj)
    return JsonResponse(status=404, data=serializer.data)


def getbyname(request, name):

    print(name)
    request = Request.objects.all().filter(sender=name)
    serializer = RequestSerializer(request, many=True)
    users = User.objects.all()
    user_serializer = UserSerializer(users, many=True)
    return JsonResponse(data={'chats': serializer.data, 'user': user_serializer.data})

def getuserbyname(request, name):
    users = User.objects.all().filter(name=name)
    user_serializer = UserSerializer(users, many=True)
    return JsonResponse(data={'user': user_serializer.data})

def getbyid(request, obj_id):
    request = Request.objects.all().filter(sender_id=obj_id)
    serializer = RequestSerializer(request, many=True)
    users = User.objects.all()
    user_serializer = UserSerializer(users, many=True)
    return JsonResponse(data={'chats': serializer.data, 'user': user_serializer.data})


def postUser(request):

    message = request.data
    serializer = UserSerializer(data={"id": request.data['id'],
                                      "name": message['name']})
    if serializer.is_valid():
        serializer.save()
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def RequestsDelete(request):
    object = Request.objects.all()
    object.delete()
    return HttpResponse("Requests Deleted!")

def UsersDelete(request):
    object = User.objects.all()
    object.delete()
    return HttpResponse("Deleted!")

class UserView(APIView):

    def get(self, request):
        request = Request.objects.all()
        serializer = RequestSerializer(request, many=True)
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return Response({'chats': serializer.data, 'user': user_serializer.data})

    def post(self, request):

        message = request.data
        serializer = UserSerializer(data={"id": request.data['id'],
                                          "name": message['name']})
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
