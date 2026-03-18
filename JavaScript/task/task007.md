What is req.body and when is it populated?
(Hint: think about what happens when a client sends JSON data to your API.)
i dont know how but req.body sounds like i am requesting to add smth to the api database 
by using post method from thunder client ...is req.body that data that i send in certain format as per 
the schema ? 
If a client sends a GET request to /earthquakes, what do you expect req.body to contain?
under req.body, i get all the data that i had previously posted/created
How do you send a simple text response back to the client using res?
(Example: "Hello World")
export hello world text as a part of function and import it at different page i suppose?
What’s the difference between res.send(), res.json(), and res.status()?
res.send() --- shows message in console of thunderclient 
res.json() --- shows the data in object notation
res.status() -- checks the status like res.status(200) to check if the server is running
If you want to tell the client “Not Found” with a 404 status, how would you write that using res?
res.status(404)? i dont know clearly