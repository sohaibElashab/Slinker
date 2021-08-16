from django.db import models

# Create your models here.


class Websites(models.Model):
    url = models.CharField(max_length=200)
    user_id = models.IntegerField(null=False)
    page_number = models.IntegerField(null=False)
    link_number = models.IntegerField(null=False)
    last_crawl = models.DateTimeField(null=False)
    crawl_time = models.CharField(max_length=200, null=False)


class Pages(models.Model):
    website_id = models.IntegerField(null=False)
    page_url = models.CharField(max_length=200, null=False)
    user_id = models.IntegerField(null=False)


class Products(models.Model):
    image = models.CharField(max_length=200, null=False)
    name = models.CharField(max_length=200, null=False)
    user_id = models.IntegerField(null=False)
    page_id = models.IntegerField(null=False)
    status = models.CharField(max_length=200, null=False)
    number_reviews = models.IntegerField(null=False)
    affiliat_id = models.CharField(max_length=200, null=False)
    product_url = models.CharField(max_length=200, null=False)


class Similar_products(models.Model):
    product_id = models.IntegerField(null=False)
    image = models.CharField(max_length=200, null=False)
    user_id = models.IntegerField(null=False)
    name = models.CharField(max_length=200, null=False)
    url = models.CharField(max_length=200, null=False)
