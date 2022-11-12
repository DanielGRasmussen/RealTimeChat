# Overview

With this project I was trying to figure out how to make a web app with Django to learn more about how web apps and Django work.

It is supposed to be a real time chat app without any security (at least for now.) It unfortunately fails to make the websocket connection despite trying to find tutorials. I figured you can create the server with 
'django-admin startproject RealTimeChat' and an app with 'python manage.py startapp chat' and can access the server by going to 'localhost:8000'

[Software Demo Video](https://youtu.be/jQkXi9Lhn24)

# Web Pages

home / signup - It is a simple form asking for a username and when you give it the username it takes you to the next page.
messages - Just messages with an input and button at the bottom to send it. It has a large field to recieve messages.

It is supposed to dynamically create the messages on the messages page.

# Development Environment

VC Code on Windows 10

Django
Channels
Python
Javascript/HTML/CSS

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-create-a-basic-project-using-mvt-in-django/)
* [Youtube](https://www.youtube.com/watch?v=TrsI4xbZILg)
* [Stackoverflow](https://www.stackoverflow.com)
* [Geeks for Geeks](https://www.geeksforgeeks.org/realtime-chat-app-using-django/) (One tutorial I attempted to follow)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* Make it work.
* Add basic security and check if user is logged in.
* Add accounts.