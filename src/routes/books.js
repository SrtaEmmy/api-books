const router = require("express").Router();
const db = require("../config/db");



//add books
/**
 * @swagger
 * components:
 *   schemas:
 *     book:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: the name of the book
 *         author:
 *           type: string
 *           description: the name of the author
 *       required:
 *         - title
 *         - author
 *       example:
 *         title: "Harry Potter"
 *         author: "JK Rowling"
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: create a new book
 *     tags: [Book]
 *     requestBody: 
 *        required: true
 *        content:
 *           application/json:
 *             schema: 
 *                type: object
 *                $ref: '#/components/schemas/book' 
 *     responses:
 *        200:
 *          description: new book created!
*/
router.post("/", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const query = "INSERT INTO books_table(title, author) VALUES (?, ?)";
    db.query(query, [title, author], (err, results) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json({ success: "book inserted successfully" });
        }
    });
});


//show all books
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Show all books
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: Showing all books
 */

router.get("/", (req, res) => {
    const query = "SELECT * FROM books_table";
    
    db.query(query, (err, results) => {
        if (err) {
            throw err;
            res.status(500).json({ error: "There was an error" });
        } else {
            res.status(200).json(results);
        }
    });
});

//update books
/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     tags: [Book]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/book'
 *     responses:
 *       200:
 *         description: The book was updated!
 *       400:
 *         description: Bad request - Missing required fields
 *       500:
 *         description: Internal server error
 */
router.put("/:id", (req, res) =>{
    const {id} = req.params;
    const {title, author} = req.body;

    if (title && author) {
        const query = "UPDATE books_table SET title = ?, author = ? WHERE id = ?";
        db.query(query, [title, author, id], (err, results) => {
            if (err) {
                throw err;
            }else{
                res.status(200).json({success: "book updated successfully"});
            }
        });
    }else{
        res.status(400).json({error: "Title and author are required"});
    }

});

//delete books
/**
 * @swagger
 * /api/books/:id:
 *   delete:
 *     summary: Delete a book
 *     tags: [Book]
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The book was deleted!
 *       500:
 *         description: Internal server error
 */


router.delete("/:id", (req, res) =>{
    const {id} = req.params;

    const query = "DELETE FROM books_table WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            throw err;
        }else{
            res.json({success: "book deleted successfully"});
        }
    });
});


module.exports = router;

