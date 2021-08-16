from rest_framework import routers
from .api import WebsitesVS, PagesVS, ProductsVS, SimilarProductsVS

# api example
# List all books: GET api/pages/
# Retrieve a specific book: GET api/pages/{id}/
# Add a new book: POST api/pages/
# Update an existing books: PUT api/pages/{id}/
# Remove a book: DELETE api/pages/{id}/

# get websites by user id: POST api/websites/ID/
# {
#     "user_id":1
# }
# get pages by website id: POST api/pages/ID/
# {
#     "website_id":1
# }
# get products by website id: POST api/products/ID/
# {
#     "page_id":1
# }
# get similar products by product id: POST api/similar/ID/
# { 
#     "product_id":1
# }

router = routers.DefaultRouter()
router.register('api/websites', WebsitesVS, 'websites')
router.register('api/pages', PagesVS, 'pages')
router.register('api/products', ProductsVS, 'products')
router.register('api/similar', SimilarProductsVS, 'similar')

urlpatterns = router.urls
