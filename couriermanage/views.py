
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import ListView
from django.db.models import Q
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.contrib.auth.decorators import login_required
from .models import Courier

from django.shortcuts import render

from django.shortcuts import render
from django.db.models import Q
from django.core.paginator import Paginator
from .models import Courier

from django.shortcuts import render
from .forms import SearchCourierForm
from .models import Courier

def search_courier(request):
    form = SearchCourierForm(request.GET)
    couriers = None

    if form.is_valid():
        tracking_id = form.cleaned_data['tracking_id']
        service = form.cleaned_data['service']

        couriers = Courier.objects.filter(tracking_id=tracking_id, service=service)

    return render(request, 'couriermanage/main.html', {'form': form, 'couriers': couriers})


def main(request):
    couriers = Courier.objects.all()
    query = request.GET.get('q')
    if query:
        couriers = Courier.objects.filter(
            Q(tracking_id__icontains=query) | Q(date_recieved__icontains=query) |
            Q(service__icontains=query)
        )
    paginator = Paginator(couriers, 10)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'couriermanage/main.html', {'page_obj': page_obj})



def about(request):
	return render(request, 'couriermanage/about.html', {'title': 'About'})


def contact_us(request):
	return render(request, 'couriermanage/contact_us.html', {'title': 'About'})

def service(request):
	return render(request, 'couriermanage/service.html', {'title': 'About'})

def index(request):
	return render(request, 'couriermanage/index.html', {'title': 'index'})



