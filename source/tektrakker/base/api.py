from base.models import Grade
from rest_framework import status, viewsets, permissions
from rest_framework.response import Response
from .serializers import GradeSerializer

#Grade viewset
class GradeViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    
    serializer_class = GradeSerializer
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    
