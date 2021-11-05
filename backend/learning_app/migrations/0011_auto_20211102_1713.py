# Generated by Django 3.2.8 on 2021-11-02 09:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('learning_app', '0010_question_is_active'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='studentfollowinformation',
            options={'base_manager_name': 'objects'},
        ),
        migrations.AlterModelOptions(
            name='studentlesson',
            options={'base_manager_name': 'objects'},
        ),
        migrations.RemoveField(
            model_name='studentfollowinformation',
            name='id',
        ),
        migrations.RemoveField(
            model_name='studentlesson',
            name='id',
        ),
        migrations.CreateModel(
            name='StudentActivityLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('event_type', models.CharField(choices=[('LESSON', 'lesson'), ('FOLLOW', 'follow')], max_length=10)),
                ('polymorphic_ctype', models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='polymorphic_learning_app.studentactivitylog_set+', to='contenttypes.contenttype')),
            ],
            options={
                'abstract': False,
                'base_manager_name': 'objects',
            },
        ),
        migrations.AddField(
            model_name='studentfollowinformation',
            name='studentactivitylog_ptr',
            field=models.OneToOneField(auto_created=True, default=None, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='learning_app.studentactivitylog'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='studentlesson',
            name='studentactivitylog_ptr',
            field=models.OneToOneField(auto_created=True, default=None, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='learning_app.studentactivitylog'),
            preserve_default=False,
        ),
    ]
