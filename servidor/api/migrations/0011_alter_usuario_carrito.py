# Generated by Django 4.2.5 on 2023-11-12 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_usuario_carrito_alter_producto_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='carrito',
            field=models.TextField(default='[]'),
        ),
    ]
