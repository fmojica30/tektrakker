from base.models import Grade
from rest_framework import viewsets, permissions
from .serializers import GradeSerializer

#Grade viewset
class GradeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    
    serializer_class = GradeSerializer
    
    
        