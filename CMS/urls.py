"""CMS URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from couriermanage import views as courier_views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
#    path('', courier_views.index, name='index'),

 #    path('main/', courier_views.main, name='main'),  # Ensure this URL name is 'main'
    path('', courier_views.search_courier, name='search_courier'),  # Ensure this URL name is 'main'
  #   path('about/', courier_views.about, name='about'),
    path('service/', courier_views.service, name='service'),
     path('contact_us/', courier_views.contact_us, name='contact_us')
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


