# Generated by Django 3.2.9 on 2021-11-03 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('breed', models.CharField(max_length=255)),
                ('size', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=255)),
                ('age', models.CharField(max_length=255)),
                ('color', models.CharField(max_length=255)),
            ],
        ),
    ]