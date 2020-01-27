from django.db import models

# Create your models here.
class Grade(models.Model):
    student_id = models.CharField(max_length=30) # Will be the student id when the database is completely setup
    class_id = models.CharField(max_length=36) # Will be the class id when the database is completely setup
    assignment_id = models.CharField(max_length=36) #will be the assignment id when the database is setup
    grade = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)