from rest_framework import routers
from .api import StudentViewset

router = routers.DefaultRouter()
router.register('api.students', StudentViewset, 'students')

urlpatterns = router.urls