from rest_framework import viewsets
from rest_framework.generics import ListAPIView,  CreateAPIView, RetrieveAPIView
from rest_framework.response import Response

from assignment.models import Assignment, Grade
from .serializers import AssignmentSerializer, GradeSerializer

class GradeViewSet(viewsets.ModelViewSet):
    serializer_class = GradeSerializer
    
    queryset = Grade.objects.all()
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, headers=headers)
    
class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer