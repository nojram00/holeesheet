from django.shortcuts import redirect
from inertia import share

def is_auth(view_func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            if request.path != reversed('login'):
                return redirect('/login')
        share(request)
        return view_func(request, *args, **kwargs)
    return wrapper
