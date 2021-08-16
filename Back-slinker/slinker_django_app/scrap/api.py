from rest_framework.serializers import Serializer
from scrap.models import Websites, Similar_products, Pages, Products
from rest_framework import viewsets, permissions
from .serializers import WebsitesSerializer, PagesSerializer, ProductsSerializer, SimilarProductsSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class WebsitesVS(viewsets.ModelViewSet):
    queryset = Websites.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WebsitesSerializer

    @action(detail=False, methods=['POST'])
    def ID(self, request, pK=None):
        web = Websites.objects.filter(user_id=request.data['user_id'])
        a = []
        for x in web:
            a.append(WebsitesSerializer(x).data)
        return Response(a)


class PagesVS(viewsets.ModelViewSet):
    queryset = Pages.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PagesSerializer

    @action(detail=False, methods=['POST'])
    def ID(self, request, pK=None):
        web = Pages.objects.filter(user_id=request.data['user_id'])
        a = []
        for x in web:
            a.append(PagesSerializer(x).data)
        return Response(a)


class ProductsVS(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductsSerializer

    @action(detail=False, methods=['POST'])
    def ID(self, request, pK=None):
        web = Products.objects.filter(user_id=request.data['user_id'])
        a = []
        for x in web:
            a.append(ProductsSerializer(x).data)
        return Response(a)


class SimilarProductsVS(viewsets.ModelViewSet):
    queryset = Similar_products.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SimilarProductsSerializer

    @action(detail=False, methods=['POST'])
    def ID(self, request, pK=None):
        web = Similar_products.objects.filter(
            user_id=request.data['user_id'])
        a = []
        for x in web:
            a.append(SimilarProductsSerializer(x).data)
        return Response(a)
