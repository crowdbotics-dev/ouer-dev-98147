from django.conf import settings
from django.db import models
class Cbnf(models.Model):
    'Generated Model'
    dndjd = models.BigIntegerField()
class Sghty(models.Model):
    'Generated Model'
    vncn = models.BigIntegerField()
    cvddb = models.BigIntegerField()
    ierueu = models.BigIntegerField()
    rel_cbnf_1_1 = models.OneToOneField("home.Cbnf",null=True,blank=True,on_delete=models.CASCADE,related_name="sghty_rel_cbnf_1_1",)
    rel_asdt_n_n = models.ManyToManyField("home.Asdt",blank=True,related_name="sghty_rel_asdt_n_n",)
class Asdt(models.Model):
    'Generated Model'
    cvdb = models.BigIntegerField()
    rurur = models.BigIntegerField()
    wewrw = models.BigIntegerField()
