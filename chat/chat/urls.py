from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from chatbot import views
from chatbot.views import ChatView
from chatbot.views import UserView                       # add this


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/<str:name>/', views.getbyname),
    path('user/<str:name>/', views.getuserbyname),
    path('id/<str:obj_id>/', views.getbyid),
    path('api/', ChatView.as_view()),
    path('user/', UserView.as_view()),
    path('api/<str:object_id>/', views.getbyid),
    path('userdelete/', views.UsersDelete),
    path('requestdelete/', views.RequestsDelete)
]
