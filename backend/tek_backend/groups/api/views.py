from rest_framework import viewsets
from rest_framework.generics import ListAPIView,  CreateAPIView, RetrieveAPIView
from rest_framework.response import Response

from groups.models import Student, Group, Teacher
from .serializers import StudentSerializer, GroupSerializer, TeacherSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    
class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    
# Example to get all students in a class once registration or multiple classes happens
# class GetStudentsInClassViewSet(ListAPIView):
#     serializer_class = StudentSerializer

#     def get_queryset(self):
#         group_id = self.request.query_params.get('id', None)
#         queryset = Student.objects.all("""
#                                        SELECT * FROM groups_student 
#                                        WHERE groups_student.id IN 
#                                        (
#                                            SELECT student FROM registration_register
#                                            WHERE registrations.register =
#                                         """  + group_id + ")")
#         return queryset
    
    