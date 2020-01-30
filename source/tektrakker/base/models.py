from django.db import models
from students.models import Student

# Create your models here.
class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE) # Will be the student id when the database is completely setup
    class_id = models.CharField(max_length=36) # Will be the class id when the database is completely setup
    assignment_name = models.CharField(max_length=36) #will be the assignment id when the database is setup
    grade = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)
    
