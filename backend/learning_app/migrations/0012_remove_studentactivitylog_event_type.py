# Generated by Django 3.2.8 on 2021-11-02 09:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learning_app', '0011_auto_20211102_1713'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentactivitylog',
            name='event_type',
        ),
    ]
