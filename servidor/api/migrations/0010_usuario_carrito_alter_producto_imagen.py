# Generated by Django 4.2.5 on 2023-11-12 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_producto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='carrito',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='producto',
            name='imagen',
            field=models.ImageField(upload_to='producto/'),
        ),
    ]