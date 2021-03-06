# Generated by Django 2.2.1 on 2019-05-22 09:01

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.CharField(default=uuid.uuid4, max_length=400, primary_key=True, serialize=False)),
                ('request', models.CharField(max_length=400)),
                ('response', models.CharField(max_length=400)),
                ('sender', models.CharField(max_length=120)),
                ('sender_id', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=400)),
            ],
        ),
    ]
