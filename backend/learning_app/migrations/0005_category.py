# Generated by Django 3.2.8 on 2021-10-18 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning_app', '0004_rename_is_active_studentfollowinformation_is_following'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=250)),
            ],
        ),
    ]
