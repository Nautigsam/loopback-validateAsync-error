# Bug description

Loopback does not save modifications to embedded models.

# Step to reproduce

- `npm install`
- `node .`

```
POST http://localhost:3000/api/Books
Body: {"title":"aTitle"}
```
```
POST http://localhost:3000/api/Books/1/cover
Body: {"content":"aContent"}
```
```
PUT http://localhost:3000/api/Books/1/cover
Body: {"content":"aNewContent"}
```

Now if you check the Page model, you get this:
```
GET http://localhost:3000/api/Pages
Response:
[
  {
    "id": "1",
    "content": "aContent"
  }
]
```