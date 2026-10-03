STUDENT MANAGEMENT API - POSTMAN LAB

1. Install Node.js LTS.
2. Extract this ZIP.
3. Open Command Prompt in this folder.
4. Run:
   npm install
5. Run:
   npm start

Server:
http://localhost:5000

POSTMAN TESTS

1. GET all students
GET http://localhost:5000/api/students

2. GET one student
GET http://localhost:5000/api/students/1

3. ADD student
POST http://localhost:5000/api/students
Body -> raw -> JSON:
{
  "name": "Tharsika",
  "department": "IT",
  "year": 3
}

4. UPDATE student
PUT http://localhost:5000/api/students/1
Body -> raw -> JSON:
{
  "name": "Harini R",
  "department": "IT",
  "year": 4
}

5. DELETE student
DELETE http://localhost:5000/api/students/2
