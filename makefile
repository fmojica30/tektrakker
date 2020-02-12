env:
	source env/bin/activate

init:
	pip install --upgrade pip
	pip3 install django django-rest-framework django-cors-headers
	