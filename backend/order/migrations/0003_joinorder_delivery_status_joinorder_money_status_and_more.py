

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_alter_order_order_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='joinorder',
            name='delivery_status',
            field=models.CharField(choices=[('ING', 'Progressing'), ('FIN', 'Finish')], default='ING', max_length=3),
        ),
        migrations.AddField(
            model_name='joinorder',
            name='money_status',
            field=models.CharField(choices=[('ING', 'Progressing'), ('FIN', 'Finish')], default='ING', max_length=3),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('ING', 'Progressing'), ('FIN', 'Finish')], default='ING', max_length=3),
        ),
    ]
