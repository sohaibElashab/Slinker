from scrap.models import Websites, Similar_products, Pages, Products
from rest_framework import viewsets, permissions
from .serializers import WebsitesSerializer, PagesSerializer, ProductsSerializer, SimilarProductsSerializer


class WebsitesVS(viewsets.ModelViewSet):
    queryset = Websites.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WebsitesSerializer


class PagesVS(viewsets.ModelViewSet):
    queryset = Pages.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PagesSerializer


class ProductsVS(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductsSerializer


class SimilarProductsVS(viewsets.ModelViewSet):
    queryset = Similar_products.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SimilarProductsSerializer
