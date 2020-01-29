from students.models import Student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer

#student view set
class StudentViewset(viewsets.ModelViewSet):
    persmission_classes = [
        permissions.AllowAny
    ]
    
    serializer_class = StudentSerializer
        
    def get_queryset(self):
        return Student.objects.all()