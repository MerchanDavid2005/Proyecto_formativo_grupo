# Generated by Django 4.2.5 on 2023-11-14 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_usuario_carrito'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='precio',
            field=models.DecimalField(decimal_places=2, max_digits=15),
        ),
        migrations.AlterField(
            model_name='servicio',
            name='precio',
            field=models.DecimalField(decimal_places=2, max_digits=15),
        ),
    ]