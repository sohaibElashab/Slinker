from django.db import models

# Create your models here.


class Websites(models.Model):
    url = models.CharField
    user_id = models.IntegerField
    page_number = models.IntegerField
    link_number = models.IntegerField
    last_crawl = models.DateTimeField
    crawl_time = models.CharField


class Pages(models.Model):
    website_id = models.IntegerField
    page_url = models.CharField


class Products(models.Model):
    image = models.CharField
    name = models.CharField
    website_id = models.IntegerField
    status = models.CharField
    number_reviews = models.IntegerField
    affiliat_id = models.CharField
    product_url = models.CharField


class Similar_products(models.Model):
    product_id = models.IntegerField
    image = models.CharField
    name = models.CharField
    url = models.CharField
