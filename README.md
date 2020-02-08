# tektrakker

Tracker for TEK performance.

## How to fork the repo to work

- Fork and clone the repo
- Open the repo in the command line
- install [virtualenv and pip](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/) if not already installed

---

## How to get activate the virtual environment and React environment

- Open the root folder of the project
- Run `source env/bin/activate`
  - You should be in the virtual environment now
- Run - `pip install -r requirements.txt`
  - This installs all dependencies for django
- In a different terminal tab run - `cd /frontend/tek-frontend/`
  - This gets to you into the react development folder
  - Open a new tab in your command line
  - Run - `npm install`
  - this installs reacts dependencies

---

## Get the development server running

- Have two terminals open one in the django folder where manage.py is available and the other in the frontend tek_frontend folder
- In the django folder run
  - `python manage.py runserver 8000`
  - It needs to run on the 8000 port to work
- In the react folder run
  - `npm start`
  - This starts the react app in another port
  - Go to that port and play around with it

---

## Things to keep in mind

- All things react are kept inside the frontend folder
- The testing api is kept inside the base and is used to test the grade database table
- For layout and styling we are using [Ant Design](https://ant.design).

---
