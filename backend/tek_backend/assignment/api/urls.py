from assignment.api.views import AssignmentViewSet, GradeViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'assignment', AssignmentViewSet, basename='assignment')
router.register(r'grade', GradeViewSet, basename='grade')
urlpatterns = router.urls