


from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm

from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserLoginForm
from django.contrib.auth import authenticate, login, logout
from .models import UserProfile

def custom_login(request):
    if request.user.is_authenticated:  # Check if the user is already authenticated
        return redirect('main')  # Redirect to 'main' if already logged in
    
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome, {username}!')
                return redirect('main')  # Redirect to 'main'
            else:
                messages.error(request, 'Invalid credentials. Please try again.')
    else:
        form = UserLoginForm()
    
    return render(request, 'users/custom_login.html', {'form': form})


def register(request):
	if request.method == 'POST':
		form = UserRegisterForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			messages.success(request, f'Account created for {username}!')
			return redirect('main')
	else:
		form = UserRegisterForm()
	return render(request, 'users/register.html', {'form': form})

def custom_logout(request):
    user_profile = UserProfile.objects.get(user=request.user)
    user_profile.is_logged_in = False
    user_profile.save()
    logout(request)
    return redirect('index')  # Redirect to your desired page
