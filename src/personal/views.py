from django.shortcuts import render
from .models import *

# Create your views here.


def home(request):
    products = Product.objects.all()
    context = {}
    context['products'] = products
    return render(request, 'base.html', context)

