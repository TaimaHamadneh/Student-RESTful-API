I have created a project aimed at understanding, building, and testing a REST API using modern web technologies.

To build a REST API:

* Create a MongoDB database using MongoDB Compass (GUI) and populate it with mock data from Mockaroo.
  ![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/e251821c-f265-4e56-af2e-0d5731030571)

* Set up a Node.js environment for API development and install necessary dependencies.
  
* Develop a server using app.listen() and define API endpoints (routes/URIs) for performing CRUD operations (GET, POST, PATCH, DELETE).
  
* Finally, I tested the API's functionality: Utilize Postman to validate its functionality.

- A GET requests to `/api/students?p=0`:
It retrieves students from a MongoDB collection, sorts them by ID, and paginates the results.
 ![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/6180d22d-3bf3-4132-b13b-bf819c197e14)

- A GET requests to `/api/students/:id`:
This route retrieves information about a specific student identified by their ID.
![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/9da1ec03-5f64-4850-a104-2ab8517e37ad)

- A POST request at `/api/students/`:
Adds a new student to the database.
![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/a5a18550-1b80-4058-aef7-570441aa5d0f)

![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/22cb80bc-3a74-472f-9384-1756ed08d10e)


- A PATCH request at '/api/students/:id': 
This endpoint updates the information of a specific student identified by their ID.
![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/e8f33796-377d-48e5-ac78-a348bedd20c9)

![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/253c53d4-9cf1-4b77-afd3-13138c7218fa)

- A DELETE request at '/api/students/:id':
 Deletes a student from the database by their ID.
Before Delete:
![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/fc8e0fc4-dc73-42ef-ba86-75a702fdf435)

![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/84845e61-2313-4686-bfdc-8dff5fda3fd3)
After Delete: 
![image](https://github.com/TaimaHamadneh/Student-RESTful-API/assets/98472054/ff1b4095-5417-4029-828b-ce6f03b8f02c)



