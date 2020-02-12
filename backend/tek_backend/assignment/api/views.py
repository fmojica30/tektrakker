from rest_framework import viewsets
from rest_framework.generics import ListAPIView,  CreateAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from assignment.models import Assignment, Grade, PredictedGrade
from .serializers import AssignmentSerializer, GradeSerializer, PredictedGradeSerializer
from .prediction_scripts.test_p import english_grade_6_prediction

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

class PredictionView(viewsets.ModelViewSet):
    serializer_class = PredictedGradeSerializer
    
    def retrieve(self, request, *args, **kwargs):
        data = self.get_queryset() 
        prediction = english_grade_6_prediction(data)
        return Response({'grade':prediction, 'student':student })
      
    def get_queryset(self):
        queryset = Grade.objects.all()
        student_id = self.request.query_params.get('student_id', None)
        if student_id is not None:
           queryset = Grade.objects.filter(student = student_id) 
        return queryset
        
            
            
        