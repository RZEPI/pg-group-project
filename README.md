# Group Project 
This is the project developed as part of course at the Gdańsk University of Technology. 
The project's purpose is to develop educational game for children from elementary school designed to make learning about various units of measurement a fun and interactive experience for young minds.

## Starting application  
Type in Linux terminal:   
> docker compose up --build   

http://localhost:3001/

## Using the question-adding script
### Make sure your script has correct permissions
```
chmod +x load_data.sh
```
### Run the script in bash
```
./load_data.sh
```

## In order to run app.py
Open console and move to the project directory:
```
cd path/to/this/project
```
Create and activate virtual environment:
### On Windows

```
py -m venv venv
.\venv\Scripts\activate
```
### On Linux
```
python3 -m venv venv
.\venv\bin\activate
```
Download packages listed in requirements.txt:
```
pip install -r requirements.txt
```
To run the script type:
```
py app.py
<<<<<<< HEAD
```
=======
``` -->

>>>>>>> fa62742f27db3d72f3c0a96d470c989b33514261
