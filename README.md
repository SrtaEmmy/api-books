# CRUD API Books


  This CRUD API allows clients to manage a collection of books. Clients can perform the following actions through HTTP requests:

<h2>
  Create a new book (POST /api/books)
</h2>
Create a new book by providing book data (title and author) in JSON format
example:
<pre>
  {
  "title": "Harry Potter",
  "author": "JK Rowling"
}
</pre>
RESPONSE: Status Code 200: Indicates that the book has been created successfully.

<hr>

<h2>
  Show all books (GET /api/books)
</h2>
Get the list of all existing books.
RESPONSE: Status Code 20: Returns a list of books in JSON format.

<hr>

<h2>
  Update a book (PUT /api/books)
</h2>
Update an existing book by providing new book data (title and author) and the ID of the book to be updated in JSON format.
example:
<pre>
{
  "title": "New Title",
  "author": "New Author"
}
</pre>
RESPONSE: Status Code 200: Indicates that the book has been updated successfully.

Status Code 400 Bad Request: Returned when required fields (title or author) are missing.
<hr>

<h1>Requeriments</h1>
 - Node.js and npm should be installed on the system.
 
-Configure a MySQL database and provide the connection details in config/db.js.

<h2>Installatioon</h2>
-Clone this repository on your local machine.

-Run npm install to install the dependencies.

-Set up the MySQL database connection in config/db.js.

-Run npm start to start the server.

<h2>
Additional documentation
</h2>
This API uses Swagger for API documentation. You can access the complete documentation by visiting /api-docs once the server is up and running.
