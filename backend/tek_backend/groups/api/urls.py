# from django.urls import path

# from .views import (StudentListView, GroupListView, StudentCreateView)

# urlpatterns = [
#     path('', StudentListView.as_view()),
#     path('groups/', GroupListView.as_view()),
#     path('create_student/', StudentCreateView.as_view())
# ]

from groups.api.views import StudentViewSet, GroupViewSet, TeacherViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'student', StudentViewSet, basename='student')
router.register(r'group', GroupViewSet, basename='group')
router.register(r'teacher', TeacherViewSet, basename='teacher')
urlpatterns = router.urls