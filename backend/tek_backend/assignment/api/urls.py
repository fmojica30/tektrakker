from assignment.api.views import AssignmentViewSet, GradeViewSet, PredictedGradeView
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'assignment', AssignmentViewSet, basename='assignment')
router.register(r'grade', GradeViewSet, basename='grade')

urlpatterns = [
    path('prediction/<pk>', PredictedGradeView.as_view())
]

urlpatterns = router.urls