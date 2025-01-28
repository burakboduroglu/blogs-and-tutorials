"use strict";(self.webpackChunkblogs_tutorials=self.webpackChunkblogs_tutorials||[]).push([[223],{2606:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Spring-Boot-Cheat-Sheet","metadata":{"permalink":"/blogs-and-tutorials/tr/blog/Spring-Boot-Cheat-Sheet","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-12-spring-boot-post.md","source":"@site/blog/2023-11-12-spring-boot-post.md","title":"Spring Boot Cheat Sheet","description":"\ud83c\udf31 Spring Annotations","date":"2023-11-12T00:00:00.000Z","tags":[{"inline":false,"label":"Spring Boot","permalink":"/blogs-and-tutorials/tr/blog/tags/spring-boot/","description":"Spring Boot tag description"},{"inline":false,"label":"Java","permalink":"/blogs-and-tutorials/tr/blog/tags/java/","description":"Java tag description"},{"inline":false,"label":"Backend","permalink":"/blogs-and-tutorials/tr/blog/tags/backend/","description":"Backend tag description"}],"readingTime":3.49,"hasTruncateMarker":true,"authors":[{"name":"Burak Boduro\u011flu","title":"Front End Engineer","url":"https://github.com/burakboduroglu","page":{"permalink":"/blogs-and-tutorials/tr/blog/authors/burakboduroglu"},"socials":{"linkedin":"https://www.linkedin.com/in/burakboduroglu/","github":"https://github.com/burakboduroglu"},"imageURL":"https://github.com/burakboduroglu.png","key":"burakboduroglu"}],"frontMatter":{"slug":"Spring-Boot-Cheat-Sheet","title":"Spring Boot Cheat Sheet","authors":"burakboduroglu","tags":["spring-boot","java","backend"]},"unlisted":false,"nextItem":{"title":"A-Z: MongoDB Cheat Sheet\ud83c\udf31","permalink":"/blogs-and-tutorials/tr/blog/A-Z: MongoDB Cheat Sheet\ud83c\udf31"}},"content":"\x3c!-- truncate --\x3e\\n\\n## \ud83c\udf31 Spring Annotations\\n\\n### @Repository :\\n\\n- Class Level Annotation\\n- It can reach the database and do all the operations.\\n- It make the connection between the database and the business logic.\\n- DAO is a repository.\\n- It is a marker interface.\\n\\n```java\\n@Repository\\npublic class TestRepo{\\n   public void add(){\\n      System.out.println(\\"Added\\");\\n   }\\n}\\n```\\n\\n---\\n\\n### @Service :\\n\\n- Class Level Annotation\\n- It is a marker interface.\\n- It is a business logic.\\n- It is a service layer.\\n- It used to create a service layer.\\n\\n```java\\n@Service\\npublic class TestService{\\n   public void service1(){\\n      //business code (i\u015f kodlar\u0131)\\n   }\\n}\\n```\\n\\n---\\n\\n### @Autowired :\\n\\n- Field Level Annotation\\n- It is used to inject the dependency.\\n- It is used to inject the object.\\n- It is used to inject the object reference.\\n- Dependency Injection is a design pattern.\\n\\n```java\\npublic class Brand{\\n   private int id;\\n   private String name;\\n\\n   @Autowired\\n   public Brand(int id, String name){\\n     this.id = id;\\n     this.name = name;\\n   }\\n}\\n```\\n\\n---\\n\\n### @Controller :\\n\\n- Class Level Annotation\\n- It is a marker interface.\\n- It is a controller layer.\\n- It is used to create a controller layer.\\n- It use with @RequestMapping annotation.\\n\\n```java\\n@Controller\\n@RequestMapping(\\"/api/brands\\")\\npublic class BrandsController{\\n   @GetMapping(\\"/getall\\")\\n   public Employee getAll(){\\n       return brandService.getAll();\\n   }\\n}\\n```\\n\\n---\\n\\n### @RequestMapping :\\n\\n- Method Level Annotation\\n- It is used to map the HTTP request with specific method.\\n\\n```java\\n@Controller\\n@RequestMapping(\\"/api/brands\\")\\npublic class BrandsController{\\n   @GetMapping(\\"/getall\\")\\n   public Employee getAll(){\\n       return brandService.getAll();\\n   }\\n}\\n```\\n\\n---\\n\\n### @GetMapping :\\n\\n- Method Level Annotation\\n- It is used to map the HTTP GET request with specific method.\\n- It is used to get the data.\\n- It is used to read the data.\\n  ```java\\n  @GetMapping(\\"/getall\\")\\n  public Employee getAll(){\\n      return brandService.getAll();\\n  }\\n  ```\\n\\n---\\n\\n### @PostMapping :\\n\\n- Method Level Annotation\\n- It is used to map the HTTP POST request with specific method.\\n- It is used to add the data.\\n- It is used to create the data.\\n  ```java\\n  @PostMapping(\\"/add\\")\\n  public void add(@RequestBody Brand brand){\\n      brandService.add(brand);\\n  }\\n  ```\\n\\n---\\n\\n### @PutMapping :\\n\\n- Method Level Annotation\\n- It is used to map the HTTP PUT request with specific method.\\n- It is used to update the data.\\n  ```java\\n  @PutMapping(\\"/update\\")\\n  public void update(@RequestBody Brand brand){\\n      brandService.update(brand);\\n  }\\n  ```\\n\\n---\\n\\n### @DeleteMapping :\\n\\n- Method Level Annotation\\n- It is used to map the HTTP DELETE request with specific method.\\n- It is used to delete the data.\\n  ```java\\n  @DeleteMapping(\\"/delete\\")\\n  public void delete(@RequestBody Brand brand){\\n      brandService.delete(brand);\\n  }\\n  ```\\n\\n---\\n\\n### @PathVariable :\\n\\n- Method Level Annotation\\n- It is used to get the data from the URL.\\n- It is the most suitable for RESTful web service that contains a path variable.\\n  ```java\\n  @GetMapping(\\"/getbyid/{id}\\")\\n  public Brand getById(@PathVariable int id){\\n      return brandService.getById(id);\\n  }\\n  ```\\n\\n---\\n\\n### @RequestBody:\\n\\n- It is used to get the data from the request body.\\n- It is used to get the data from the HTTP request.\\n- It is used to get the data from the HTTP request body.\\n\\n  ```java\\n  @PostMapping(\\"/add\\")\\n  public void add(@RequestBody Brand brand){\\n      brandService.add(brand);\\n  }\\n  ```\\n\\n---\\n\\n### @RequestParam:\\n\\n- It is used to get the data from the URL.\\n- It is used to get the data from the URL query parameters.\\n- It is also known as query parameter.\\n\\n```java\\n@GetMapping(\\"/getbyid\\")\\npublic Brand getById(@RequestParam int id){\\n    return brandService.getById(id);\\n}\\n```\\n\\n---\\n\\n### @RestController:\\n\\n- Class Level Annotation\\n- It is a marker interface.\\n- It is a controller layer.\\n- It is used to create a controller layer.\\n- It use with @RequestMapping annotation.\\n- It is a combination of @Controller and @ResponseBody annotations.\\n- @RestController annotation is explained with @ResponseBody annotation.\\n- @ResponseBody eliminates the need to add a comment to every method.\\n\\n```java\\n@RestController\\n@RequestMapping(\\"/api/brands\\")\\npublic class BrandsController{\\n   @GetMapping(\\"/getall\\")\\n   public Employee getAll(){\\n       return brandService.getAll();\\n   }\\n}\\n```\\n\\n---\\n\\n- If you like this article, you can give me a like on. \ud83d\ude0e\\n  Thanks for reading. \ud83d\ude4f\\n\\n---\\n\\n### Other posts\\n\\n- [Hibernate Guide](https://dev.to/burakboduroglu/hibernate-cheat-sheet-2dke)\\n- [Beginner Guide](https://dev.to/burakboduroglu/building-the-future-a-beginners-guide-to-software-development-2ih8)\\n- [MongoDB](https://dev.to/burakboduroglu/mongodb-cheat-sheet-1a6a)\\n- [Behind the Scenes: Exploring Powerful Backend Frameworks](https://dev.to/burakboduroglu/behind-the-scenes-exploring-powerful-backend-frameworks-1an1)\\n\\n---\\n\\n### Accounts\\n\\n- [Visit my page\u2705](https://bento.me/burakboduroglu)\\n- [GitHub](https://github.com/burakboduroglu)"},{"id":"A-Z: MongoDB Cheat Sheet\ud83c\udf31","metadata":{"permalink":"/blogs-and-tutorials/tr/blog/A-Z: MongoDB Cheat Sheet\ud83c\udf31","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-20-first-blog-post.md","source":"@site/blog/2023-06-20-first-blog-post.md","title":"A-Z: MongoDB Cheat Sheet\ud83c\udf31","description":"Contents \ud83d\udcd6","date":"2023-06-20T00:00:00.000Z","tags":[{"inline":false,"label":"MongoDB","permalink":"/blogs-and-tutorials/tr/blog/tags/mongodb/","description":"MongoDB tag description"},{"inline":false,"label":"Database","permalink":"/blogs-and-tutorials/tr/blog/tags/database/","description":"Database tag description"},{"inline":false,"label":"Backend","permalink":"/blogs-and-tutorials/tr/blog/tags/backend/","description":"Backend tag description"}],"readingTime":6.51,"hasTruncateMarker":true,"authors":[{"name":"Burak Boduro\u011flu","title":"Front End Engineer","url":"https://github.com/burakboduroglu","page":{"permalink":"/blogs-and-tutorials/tr/blog/authors/burakboduroglu"},"socials":{"linkedin":"https://www.linkedin.com/in/burakboduroglu/","github":"https://github.com/burakboduroglu"},"imageURL":"https://github.com/burakboduroglu.png","key":"burakboduroglu"}],"frontMatter":{"slug":"A-Z: MongoDB Cheat Sheet\ud83c\udf31","title":"A-Z: MongoDB Cheat Sheet\ud83c\udf31","authors":"burakboduroglu","tags":["mongodb","database","backend"]},"unlisted":false,"prevItem":{"title":"Spring Boot Cheat Sheet","permalink":"/blogs-and-tutorials/tr/blog/Spring-Boot-Cheat-Sheet"}},"content":"\x3c!-- truncate --\x3e\\n\\n## Contents \ud83d\udcd6\\n\\n- [Definitions](#definitions)\\n- [MongoDB Shell Commands](#mongodb-shell-commands)\\n- [Thank You](#thank-you)\\n- [References](#references)\\n- [My Other Contents](#my-other-contents)\\n\\n---\\n\\n## Definitions \ud83c\udf33\\n\\n- `What is MongoDB?`\\n\\n> MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.\\n\\n- `What is a Database?`\\n\\n> A database holds a set of collections. A database typically has a separate file system directory to hold its data. Each database gets its own set of files on the file system. Generally, you associate a database with one application.\\n\\n- `What is a Collection?`\\n\\n> A collection is a group of documents. If a document is the MongoDB analog of a row in a relational database table, then a collection is the analog of a table.\\n\\n- `What is a Document?`\\n\\n> A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.\\n\\n- `What is a Field?`\\n\\n> A document has a dynamic schema. Dynamic schemas allow documents in the same collection to have different sets of fields and to have different field names for the common fields.\\n\\n- `What is a Primary Key?`\\n\\n> In MongoDB, each document stored in a collection requires a unique \\\\_id field that acts as a primary key. If an inserted document omits the \\\\_id field, the MongoDB driver automatically generates an ObjectId for the \\\\_id field.\\n\\n- `Why use NoSQL?`\\n\\n> NoSQL databases are built to allow the insertion of data without a predefined schema. This makes NoSQL databases ideal for storing and processing unstructured data.\\n\\n- `Why use MongoDB?`\\n\\n> MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.\\n\\n---\\n\\n## MongoDB Shell Commands \ud83c\udf43\ud83c\udf32\\n\\n- `Show Database`\\n\\n```nosql\\nshow dbs\\n```\\n\\n> This command will show all the databases in your MongoDB server.\\n\\n---\\n\\n- `Use Database`\\n\\n```nosql\\nuse <database_name>\\n```\\n\\n> This command will switch to the database you want to use.\\n\\n---\\n\\n- `Show Collections`\\n\\n```nosql\\nshow collections\\n```\\n\\n> This command will show all the collections in the database you are using.\\n\\n---\\n\\n- `Drop Database`\\n\\n```nosql\\ndb.dropDatabase()\\n```\\n\\n> This command will drop the database you are using.\\n\\n---\\n\\n- `Create Collection`\\n\\n```nosql\\ndb.createCollection(\\"<collection_name>\\")\\n```\\n\\n> This command will create a collection in the database you are using.\\n\\n---\\n\\n- `Insert a Document`\\n\\n```nosql\\ndb.<collection_name>.insertOne({\\n    <key>: <value>,\\n    <key>: <value>,\\n    ...\\n})\\n```\\n\\n> This command will insert a document in the collection you are using.\\n\\n---\\n\\n- `Insert Multiple Documents`\\n\\n```nosql\\ndb.<collection_name>.insertMany([\\n    {\\n        <key>: <value>,\\n        <key>: <value>,\\n        ...\\n    },\\n    {\\n        <key>: <value>,\\n        <key>: <value>,\\n        ...\\n    },\\n    ...\\n])\\n```\\n\\n> This command will insert multiple documents in the collection you are using.\\n\\n---\\n\\n- `Find Documents`\\n\\n```nosql\\ndb.<collection_name>.find()\\n```\\n\\n> This command will find all the documents in the collection you are using.\\n\\n---\\n\\n- `Find Documents with Query`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: <value>\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that match the query.\\n\\n---\\n\\n- `Count Documents`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: <value>\\n    }).count()\\n```\\n\\n> This command will count all the documents in the collection you are using that match the query.\\n\\n---\\n\\n- `Limit Documents`\\n\\n```nosql\\ndb.<collection_name>.find().limit(<number>)\\n```\\n\\n> This command will limit the number of documents returned by the find command.\\n\\n---\\n\\n- `forEach()`\\n\\n```nosql\\ndb.<collection_name>.find().forEach(function(doc) {\\n    print(\\"Key: \\" + doc.<key> + \\" Value: \\" + doc.<value>);\\n})\\n```\\n\\n> This command will iterate through all the documents in the collection you are using and print the key and value of each document.\\n\\n---\\n\\n- `Find One Document`\\n\\n```nosql\\ndb.<collection_name>.findOne({\\n    <key>: <value>\\n})\\n```\\n\\n> This command will find the first document in the collection you are using that matches the query.\\n\\n---\\n\\n- `Update a Document`\\n\\n```nosql\\ndb.<collection_name>.updateOne({\\n    <key>: <value>\\n}, {\\n    $set: {\\n        <key>: <value>\\n    }\\n})\\n```\\n\\n> This command will update the first document in the collection you are using that matches the query. $set is used to update the document.\\n\\n---\\n\\n- `Increment a Document`\\n\\n```nosql\\ndb.<collection_name>.updateOne({\\n    <key>: <value>\\n}, {\\n    $inc: {\\n        <key>: <value>\\n    }\\n})\\n```\\n\\n> This command will increment the value of the key in the first document in the collection you are using that matches the query. $inc is used to increment the value of the key.\\n\\n---\\n\\n- `Delete a Document`\\n\\n```nosql\\ndb.<collection_name>.deleteOne({\\n    <key>: <value>\\n})\\n```\\n\\n> This command will delete the first document in the collection you are using that matches the query.\\n\\n---\\n\\n- `Add new field to a Document`\\n\\n```nosql\\ndb.<collection_name>.updateOne({\\n    <key>: <value>\\n}, {\\n    $set: {\\n        <new_key>: <new_value>\\n    }\\n})\\n```\\n\\n> This command will add a new field to the first document in the collection you are using that matches the query.\\n\\n---\\n\\n- `Greater than`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: {\\n        $gt: <value>\\n    }\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that have a key greater than the value.\\n\\n---\\n\\n- `Greater than or equal to`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: {\\n        $gte: <value>\\n    }\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that have a key greater than or equal to the value.\\n\\n---\\n\\n- `Less than`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: {\\n        $lt: <value>\\n    }\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that have a key less than the value.\\n\\n---\\n\\n- `Less than or equal to`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: {\\n        $lte: <value>\\n    }\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that have a key less than or equal to the value.\\n\\n---\\n\\n- `Not equal to`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    <key>: {\\n        $ne: <value>\\n    }\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that have a key not equal to the value.\\n\\n---\\n\\n- `And`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    $and: [\\n        {\\n            <key>: <value>\\n        },\\n        {\\n            <key>: <value>\\n        }\\n    ]\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that match the query.\\n\\n---\\n\\n- `Or`\\n\\n```nosql\\ndb.<collection_name>.find({\\n    $or: [\\n        {\\n            <key>: <value>\\n        },\\n        {\\n            <key>: <value>\\n        }\\n    ]\\n})\\n```\\n\\n> This command will find all the documents in the collection you are using that match the query.\\n\\n---\\n\\n- `Sort`\\n\\n```nosql\\ndb.<collection_name>.find().sort({\\n    <key>: <value>\\n})\\n```\\n\\n> This command will sort all the documents in the collection you are using by the key.\\n\\n---\\n\\n- `Sort Descending`\\n\\n```nosql\\ndb.<collection_name>.find().sort({\\n    <key>: -1\\n})\\n```\\n\\n> This command will sort all the documents in the collection you are using by the key in descending order.\\n\\n---\\n\\n- `Drop Collection`\\n\\n```nosql\\ndb.<collection_name>.drop()\\n```\\n\\n> This command will drop the collection you are using.\\n\\n---\\n\\n## Thank You \ud83c\udf3f\\n\\n> Thank you for taking the time to read my blog post! I hope you found it helpful and informative. Your support and engagement mean a lot to me. If you have any questions or feedback, please don\u2019t hesitate to reach out. I appreciate your continued interest and look forward to sharing more valuable content in the future. Thank you once again!\\n\\n---\\n\\n## References\\n\\n- [MongoDB](https://www.mongodb.com/)\\n- [Patika Academy](https://academy.patika.dev/)\\n- [ChatGPT](https://openai.com/blog/chatgpt)\\n- [Traversy Media](https://www.youtube.com/watch?v=-56x56UppqQ)\\n\\n---\\n\\n## My other contents\\n\\n- [Boost Your Programming Efficiency: Essential Tools for Success \u2699\ufe0f](https://dev.to/burakboduroglu/boost-your-programming-efficiency-essential-tools-for-success-5h00)\\n\\n- [Building a Node.js Server Without Using Express.js\ud83d\udc24](https://dev.to/burakboduroglu/building-a-nodejs-server-without-using-expressjs-3mc8)\\n\\n- [A-Z: Git Cheat Sheet\ud83d\udd25](https://dev.to/burakboduroglu/a-z-git-cheat-sheet-14pm)\\n\\n- [JS Guide: Map, Reduce, Filter and forEach Methods](https://dev.to/burakboduroglu/js-guide-map-reduce-filter-and-foreach-methods-5fmi)\\n\\n- [Understanding CORS and Same Origin Policy in Web Security\ud83d\udea8](https://dev.to/burakboduroglu/understanding-cors-and-same-origin-policy-in-web-security-54hm)\\n\\n---\\n\\n[Back to Top](#contents)"}]}}')}}]);