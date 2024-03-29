# Car-Management-API
<br>

**Halaman Open Api Documentation** : http://localhost:8000/api-docs
  
<br>

**Users Access**
|  | Username | Password |
| :---- | :----: | ----: |
| **Superadmin** | superadmin | admin |
| **Admin** | admin1 | 12345 |
| **Member** | member1 | 12345 |

<br>
  
## Users

**Login User (POST)** <br>
- End point API : /api/auth/login
- End point API Doc : http://localhost:8000/api-docs/#/Users/post_api_auth_login
- Description : Untuk login superadmin, admin, member
- Example : 
  - Login Superadmin : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/7fd3fd8a-d651-481e-802a-04d1a5282794)
  - Login Admin : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/7dc21c8b-a6bf-4577-ad03-accc8f3a1212)
  - Login Member : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/78fc7323-4f8b-404d-9e71-844ac8550cc8)

<br>  

**Register Admin (POST)** <br>
- End point API : /api/auth/register-admin
- End point API Doc : http://localhost:8000/api-docs/#/Users/post_api_auth_register_admin
- Description : Untuk register admin, dengan authentication
- Authentication API Doc : <br>  
  ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/416980e2-7659-48e1-8506-f910726db32d)

- Example :
  - Register Admin : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/cf46b3c2-d859-4b8c-9fb2-0213ccc18689)

<br>

**Register Member (POST)** <br>  

- End Point API : /api/auth/register
- End point API Doc : http://localhost:8000/api-docs/#/Users/post_api_auth_register
- Description : Untuk register member, tanpa authentication
- Example : 
  - Register Member : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/bbcd81e6-a910-4861-add6-0b582a51debd)

<br>  

**Current User (GET)** <br>  
- End point API : /api/auth/current-user
- End point API Doc : http://localhost:8000/api-docs/#/Users/get_api_auth_current_user
- Description : Untuk mengetahui token milik siapa
- Example : 
  - Current User (token superadmin) : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/65829fd7-008d-4686-869b-214116f60fda)



  
## Cars

**Get Cars (GET)** <br>  
- End point API : /api/cars
- End point API Doc : http://localhost:8000/api-docs/#/Cars/get_api_cars
- Description : Untuk menampilkan list car, tanpa perlu request token
- Example : 
  - Get List Car (tanpa authentication) : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/f1645891-a83a-42de-9e64-a896eecf8a69)


<br>  

**Get Car by Id (GET)** <br>  
- End point API : /api/cars/id
- End point API Doc : http://localhost:8000/api-docs/#/Cars/get_api_cars__id_
- Description : Untuk menampilkan car sesuai dengan id, tanpa perlu request token
- Example : 
  - Get Car by Id (tanpa authentication) : <br>
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/abe8134e-db78-43c0-9978-e6827253d7ba)

<br>  

**Create Car (POST)** <br>  

- End point API : /api/cars
- End point API Doc : http://localhost:8000/api-docs/#/Cars/post_api_cars
- Description : Untuk menambahkan data car, hanya superadmin dan admin yang bisa menambahkan data car
- Example :
  - Create Car from admin (perlu request token) : <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/36ed290b-53bb-41c5-b90e-0b63307a7453)

<br>  

**Update Car (PUT)** <br>  
- End point API : /api/cars/id
- End point API Doc : http://localhost:8000/api-docs/#/Cars/put_api_cars__id_
- Description : Update data car sesuai dengan id, hanya superadmin dan admin yang bisa menambahkan data car
- Example : 
  - Update Car by Id (perlu request token) : <br>
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/d64e75c2-651c-4a0f-8527-abcdc0bcd84d)

<br>  

**Delete Car (DELETE)** <br>  
- End point API : /api/cars/id
- End point API Doc : http://localhost:8000/api-docs/#/Cars/delete_api_cars__id_
- Description : Delete data car sesuai dengan id (dengan penerapan soft delete = mengubah kolom deleted menjadi true), hanya superadmin dan admin yang bisa menambahkan data car
- Example : 
  - Delete Car by Id (perlu request token) <br>  
    ![image](https://github.com/HandoyoDwiPrasetyo/Car-Management-API/assets/50831826/1b23d80a-e963-4876-912d-c8e87abea870)


