# Generated by Django 4.0.5 on 2022-06-29 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_review_available'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mypage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile', models.ImageField(default='media/image.png', upload_to='')),
            ],
        ),
    ]