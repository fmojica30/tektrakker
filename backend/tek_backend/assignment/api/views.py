from rest_framework import viewsets
from rest_framework.generics import ListAPIView,  CreateAPIView, RetrieveAPIView
from rest_framework.response import Response

from assignment.models import Assignment, Grade, PredictedGrade
from .serializers import AssignmentSerializer, GradeSerializer, PredictedGradeSerializer

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
    
class PredictedGradeView(RetrieveAPIView):
    serializer_class = PredictedGradeSerializer
    
    def get_queryset(self, pk=None):
        queryset = Grade.objects.all()
        queryset = queryset.filter(student=pk)
        grade_sum = 0
        total_grades = 0
        for grade in queryset:
            grade_sum += grade.grade
            total_grades += 1
        predicted = grades_sum / total_grades
        new_prediction = PredictedGrade(predicted)
        serializer = self.get_serializer(data=new_prediction)
        return Response(serializer.data)
        
            
            
        