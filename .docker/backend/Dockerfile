from httpd
expose 5001

copy ./backend/requirements.txt /usr/local/apache2/htdocs/

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

run apt-get update
run apt-get install python3 -y
run apt install python3.11-venv -y
run apt-get install python3-dev default-libmysqlclient-dev build-essential pkg-config -y
run apt-get install python3-pip -y

run apt-get install iproute2 -y
run apt-get install curl -y

run cd /usr/local/apache2/htdocs \
    && python3 -m venv venv \
    && source venv/bin/activate \
    && pip install -r /usr/local/apache2/htdocs/requirements.txt

CMD ["/bin/bash", "-c", "source /usr/local/apache2/htdocs/venv/bin/activate && python3 /usr/local/apache2/htdocs/app/app.py"]