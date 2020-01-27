from rest_framework import routers
from .api import GradeViewSet

router = routers.DefaultRouter()
router.register('api/upload_grades', GradeViewSet, 'upload grades')

urlpatterns = router.urls