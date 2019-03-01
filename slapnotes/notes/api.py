from .models import Blogpost 
from .models import Tag
from .models import Post 
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from django import forms
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django_filters import rest_framework
from .serializers import (BlogpostSerializer, ContactEmailSerializer, PostSerializer,
        TagSerializer)

class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-created_at')
    filter_backends = (rest_framework.DjangoFilterBackend,)
    filter_fields = ('tags',)
    pagination_class = LimitOffsetPagination

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class ContactEmailAPI(generics.GenericAPIView):
    serializer_class = ContactEmailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        name = serializer.validated_data['name']
        email = serializer.validated_data['reply']
        message = serializer.validated_data['message']
        phone = serializer.validated_data['phone']
        zip_code = serializer.validated_data['zip_code']
        email_text = "You received a message from ***REMOVED***name***REMOVED*** at ***REMOVED***email***REMOVED***, with the phone number ***REMOVED***phone***REMOVED*** and the zip code ***REMOVED***zip_code***REMOVED***: ***REMOVED***message***REMOVED***".format(
                name=name, email=email, message=message, phone=phone, zip_code=zip_code)
        send_mail("Contact email from Slapnote", email_text, getattr(settings, 'DEFAULT_FROM_EMAIL'), [getattr(settings, 'DEFAULT_FROM_EMAIL')])
        return Response(serializer.data)
