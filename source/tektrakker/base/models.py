from django.db import models

# Create your models here.
class Grade(models.Model):
    GROUP_1 = "g1"
    GROUP_2 = "g2"
    GROUP_3 = "g3"
    
    tek_choices = [
        (GROUP_1, "Group 1"),
        (GROUP_2, "Group 2"),
        (GROUP_3, "Group 3")
    ]
    
    student_id = models.CharField(max_length=30) # Will be the student id when the database is completely setup
    class_id = models.CharField(max_length=36) # Will be the class id when the database is completely setup
    assignment_name = models.CharField(max_length=36) #will be the assignment id when the database is setup
    tek_choice = models.CharField(max_length=2, choices=tek_choices, default=GROUP_1)
    grade = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)