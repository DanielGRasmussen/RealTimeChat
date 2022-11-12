from django.shortcuts import render, redirect
 
 
def home(request):
    return render(request, 'home.html')

def messages(request):
    return render(request, 'messages.html')