---
slug: 'A-Z: MongoDB Cheat Sheet🌱'
title: 'A-Z: MongoDB Cheat Sheet🌱'
authors: burakboduroglu
tags: [mongodb, database, backend]
---

<!-- truncate -->

## Contents 📖

- [Definitions](#definitions)
- [MongoDB Shell Commands](#mongodb-shell-commands)
- [Thank You](#thank-you)
- [References](#references)
- [My Other Contents](#my-other-contents)

---

## Definitions 🌳

- `What is MongoDB?`

> MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.

- `What is a Database?`

> A database holds a set of collections. A database typically has a separate file system directory to hold its data. Each database gets its own set of files on the file system. Generally, you associate a database with one application.

- `What is a Collection?`

> A collection is a group of documents. If a document is the MongoDB analog of a row in a relational database table, then a collection is the analog of a table.

- `What is a Document?`

> A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

- `What is a Field?`

> A document has a dynamic schema. Dynamic schemas allow documents in the same collection to have different sets of fields and to have different field names for the common fields.

- `What is a Primary Key?`

> In MongoDB, each document stored in a collection requires a unique \_id field that acts as a primary key. If an inserted document omits the \_id field, the MongoDB driver automatically generates an ObjectId for the \_id field.

- `Why use NoSQL?`

> NoSQL databases are built to allow the insertion of data without a predefined schema. This makes NoSQL databases ideal for storing and processing unstructured data.

- `Why use MongoDB?`

> MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.

---

## MongoDB Shell Commands 🍃🌲

- `Show Database`

```nosql
show dbs
```

> This command will show all the databases in your MongoDB server.

---

- `Use Database`

```nosql
use <database_name>
```

> This command will switch to the database you want to use.

---

- `Show Collections`

```nosql
show collections
```

> This command will show all the collections in the database you are using.

---

- `Drop Database`

```nosql
db.dropDatabase()
```

> This command will drop the database you are using.

---

- `Create Collection`

```nosql
db.createCollection("<collection_name>")
```

> This command will create a collection in the database you are using.

---

- `Insert a Document`

```nosql
db.<collection_name>.insertOne({
    <key>: <value>,
    <key>: <value>,
    ...
})
```

> This command will insert a document in the collection you are using.

---

- `Insert Multiple Documents`

```nosql
db.<collection_name>.insertMany([
    {
        <key>: <value>,
        <key>: <value>,
        ...
    },
    {
        <key>: <value>,
        <key>: <value>,
        ...
    },
    ...
])
```

> This command will insert multiple documents in the collection you are using.

---

- `Find Documents`

```nosql
db.<collection_name>.find()
```

> This command will find all the documents in the collection you are using.

---

- `Find Documents with Query`

```nosql
db.<collection_name>.find({
    <key>: <value>
})
```

> This command will find all the documents in the collection you are using that match the query.

---

- `Count Documents`

```nosql
db.<collection_name>.find({
    <key>: <value>
    }).count()
```

> This command will count all the documents in the collection you are using that match the query.

---

- `Limit Documents`

```nosql
db.<collection_name>.find().limit(<number>)
```

> This command will limit the number of documents returned by the find command.

---

- `forEach()`

```nosql
db.<collection_name>.find().forEach(function(doc) {
    print("Key: " + doc.<key> + " Value: " + doc.<value>);
})
```

> This command will iterate through all the documents in the collection you are using and print the key and value of each document.

---

- `Find One Document`

```nosql
db.<collection_name>.findOne({
    <key>: <value>
})
```

> This command will find the first document in the collection you are using that matches the query.

---

- `Update a Document`

```nosql
db.<collection_name>.updateOne({
    <key>: <value>
}, {
    $set: {
        <key>: <value>
    }
})
```

> This command will update the first document in the collection you are using that matches the query. $set is used to update the document.

---

- `Increment a Document`

```nosql
db.<collection_name>.updateOne({
    <key>: <value>
}, {
    $inc: {
        <key>: <value>
    }
})
```

> This command will increment the value of the key in the first document in the collection you are using that matches the query. $inc is used to increment the value of the key.

---

- `Delete a Document`

```nosql
db.<collection_name>.deleteOne({
    <key>: <value>
})
```

> This command will delete the first document in the collection you are using that matches the query.

---

- `Add new field to a Document`

```nosql
db.<collection_name>.updateOne({
    <key>: <value>
}, {
    $set: {
        <new_key>: <new_value>
    }
})
```

> This command will add a new field to the first document in the collection you are using that matches the query.

---

- `Greater than`

```nosql
db.<collection_name>.find({
    <key>: {
        $gt: <value>
    }
})
```

> This command will find all the documents in the collection you are using that have a key greater than the value.

---

- `Greater than or equal to`

```nosql
db.<collection_name>.find({
    <key>: {
        $gte: <value>
    }
})
```

> This command will find all the documents in the collection you are using that have a key greater than or equal to the value.

---

- `Less than`

```nosql
db.<collection_name>.find({
    <key>: {
        $lt: <value>
    }
})
```

> This command will find all the documents in the collection you are using that have a key less than the value.

---

- `Less than or equal to`

```nosql
db.<collection_name>.find({
    <key>: {
        $lte: <value>
    }
})
```

> This command will find all the documents in the collection you are using that have a key less than or equal to the value.

---

- `Not equal to`

```nosql
db.<collection_name>.find({
    <key>: {
        $ne: <value>
    }
})
```

> This command will find all the documents in the collection you are using that have a key not equal to the value.

---

- `And`

```nosql
db.<collection_name>.find({
    $and: [
        {
            <key>: <value>
        },
        {
            <key>: <value>
        }
    ]
})
```

> This command will find all the documents in the collection you are using that match the query.

---

- `Or`

```nosql
db.<collection_name>.find({
    $or: [
        {
            <key>: <value>
        },
        {
            <key>: <value>
        }
    ]
})
```

> This command will find all the documents in the collection you are using that match the query.

---

- `Sort`

```nosql
db.<collection_name>.find().sort({
    <key>: <value>
})
```

> This command will sort all the documents in the collection you are using by the key.

---

- `Sort Descending`

```nosql
db.<collection_name>.find().sort({
    <key>: -1
})
```

> This command will sort all the documents in the collection you are using by the key in descending order.

---

- `Drop Collection`

```nosql
db.<collection_name>.drop()
```

> This command will drop the collection you are using.

---

## Thank You 🌿

> Thank you for taking the time to read my blog post! I hope you found it helpful and informative. Your support and engagement mean a lot to me. If you have any questions or feedback, please don’t hesitate to reach out. I appreciate your continued interest and look forward to sharing more valuable content in the future. Thank you once again!

---

## References

- [MongoDB](https://www.mongodb.com/)
- [Patika Academy](https://academy.patika.dev/)
- [ChatGPT](https://openai.com/blog/chatgpt)
- [Traversy Media](https://www.youtube.com/watch?v=-56x56UppqQ)

---

## My other contents

- [Boost Your Programming Efficiency: Essential Tools for Success ⚙️](https://dev.to/burakboduroglu/boost-your-programming-efficiency-essential-tools-for-success-5h00)

- [Building a Node.js Server Without Using Express.js🐤](https://dev.to/burakboduroglu/building-a-nodejs-server-without-using-expressjs-3mc8)

- [A-Z: Git Cheat Sheet🔥](https://dev.to/burakboduroglu/a-z-git-cheat-sheet-14pm)

- [JS Guide: Map, Reduce, Filter and forEach Methods](https://dev.to/burakboduroglu/js-guide-map-reduce-filter-and-foreach-methods-5fmi)

- [Understanding CORS and Same Origin Policy in Web Security🚨](https://dev.to/burakboduroglu/understanding-cors-and-same-origin-policy-in-web-security-54hm)

---

[Back to Top](#contents)
