from rest_framework import serializers
from assignment.models import Assignment, Grade

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'
        # random this is a wndom test gor the make
        
class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'
