# Generated by Django 2.2.28 on 2023-07-06 06:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cbnf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dndjd', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Sghty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vncn', models.BigIntegerField()),
                ('cvddb', models.BigIntegerField()),
                ('ierueu', models.BigIntegerField()),
                ('rel_cbnf_1_1', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sghty_rel_cbnf_1_1', to='home.Cbnf')),
            ],
        ),
    ]
