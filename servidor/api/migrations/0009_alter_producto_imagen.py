# Generated by Django 4.2.6 on 2023-11-09 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_usuario_foto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(default='imagen_default.png', upload_to='producto'),
        ),
    ]
