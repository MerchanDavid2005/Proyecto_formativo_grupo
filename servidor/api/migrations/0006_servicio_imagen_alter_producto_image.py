# Generated by Django 4.2.3 on 2023-10-30 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_producto_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicio',
            name='imagen',
            field=models.ImageField(default=1, upload_to='servicios/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='producto',
            name='image',
            field=models.ImageField(upload_to='producto/'),
        ),
    ]