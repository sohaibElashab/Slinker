from rest_framework import routers
from .api import WebsitesVS, PagesVS, ProductsVS, SimilarProductsVS

# api example
# List all books: GET api/pages/
# Retrieve a specific book: GET api/pages/{id}/
# Add a new book: POST api/pages/
# Update an existing books: PUT api/pages/{id}/
# Remove a book: DELETE api/pages/{id}/

router = routers.DefaultRouter()
router.register('api/websites', WebsitesVS, 'websites') 
router.register('api/pages', PagesVS, 'pages')
router.register('api/products', ProductsVS, 'products')
router.register('api/similar', SimilarProductsVS, 'similar') 

urlpatterns = router.urls
