# Generated by Django 3.2.5 on 2021-08-06 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_auth_provider'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email_notif',
            field=models.BooleanField(default=False),
        ),
    ]