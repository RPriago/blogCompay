# Generated by Django 5.1.4 on 2025-01-13 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='blog',
            name='image2',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
