from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib import messages

# Create your views here.

def envio_correo(request):
    if request.method == 'POST':
        email = request.POST['email']
        asunto = request.POSR['asunto']
        mensaje = request.POST['mensaje']
        
        template = render_to_string('correo.html', {
            'email': email,
            'asunto': asunto,
            'mensaje': mensaje
        })
        
        email = EmailMessage(
            subject,
            template,
            settings.EMAIL_HOST_USER,
            ['servitecalaestacion@gmail.com']
        )
        
        email.fail_silenty = False
        try:
            email.send()
            messages.success(request, 'Se ha enviado tu correo.')
        except:
            print('El mansaje no se envio')
            