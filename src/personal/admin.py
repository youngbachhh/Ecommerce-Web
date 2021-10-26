from django.contrib import admin
from .models import *
# from .models import Product

# Register your models here.


# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'price', 'description', 'image')
#     list_display_links = ('id', 'name')
#     list_filter = ('name',)
#     search_fields = ('name',)
#     list_per_page = 25


# admin.site.register(Product, ProductAdmin)
admin.site.register(Customer)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
