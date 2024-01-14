from httpd
expose 80

copy ./app.py ./requirements.txt /usr/local/apache2/htdocs/

run apt-get update
run apt-get install python3 -y
run cd /usr/local/apache2/htdocs
run apt install python3.11-venv -y
run python3 -m venv /usr/local/apache2/htdocs/venv
run source /usr/local/apache2/htdocs/venv/bin/activate
run apt-get install python3-dev default-libmysqlclient-dev build-essential pkg-config -y
run apt-get install python3-pip -y
run pip install -r /usr/local/apache2/htdocs/requirements.txt
run py app.py
