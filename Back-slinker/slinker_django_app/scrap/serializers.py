from django.db.models import fields
from rest_framework import serializers
from scrap.models import Websites, Pages, Products, Similar_products


class WebsitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Websites
        fields = '__all__'


class PagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pages
        fields = '__all__'


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class SimilarProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Similar_products
        fields = '__all__'
