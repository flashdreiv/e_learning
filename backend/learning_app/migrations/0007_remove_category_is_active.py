# Generated by Django 3.2.8 on 2021-10-25 06:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learning_app', '0006_auto_20211025_1432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='is_active',
        ),
    ]
