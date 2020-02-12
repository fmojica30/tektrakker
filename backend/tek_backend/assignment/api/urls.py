from assignment.api.views import AssignmentViewSet, PredictionView, GradeViewSet
from django.conf.urls import url
from rest_framework.routers import SimpleRouter
from django.urls import path

router = SimpleRouter()
router.register(r'assignment', AssignmentViewSet, basename='assignment')
router.register(r'grade', GradeViewSet, basename='grade')

urlpatterns = [
    url(r'stats/', PredictionView.as_view({'get':'retrieve'}))
    # grade_det/(?P<student_id>.+)
]

urlpatterns += router.urls