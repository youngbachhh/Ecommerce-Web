
from re import template
from django import contrib
from django.contrib import admin
from django.urls import path, include
from personal import views
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static
from account.views import (
    registration_view,
    logout_view,
    login_view,
    purchase_view,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('register/', registration_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('purchase/', purchase_view, name='purchase'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='registration/password_reset_form.html'),
         name='password_reset'),
    path('password_reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_done.html'),
         name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='registration/password_reset_confirm.html'),
         name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_complete.html'),
         name='password_reset_complete'),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
