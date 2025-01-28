---
slug: Spring-Boot-Cheat-Sheet
title: Spring Boot Cheat Sheet
authors: burakboduroglu
tags: [spring-boot, java, backend]
---

<!-- truncate -->

## 🌱 Spring Annotations

### @Repository :

- Class Level Annotation
- It can reach the database and do all the operations.
- It make the connection between the database and the business logic.
- DAO is a repository.
- It is a marker interface.

```java
@Repository
public class TestRepo{
   public void add(){
      System.out.println("Added");
   }
}
```

---

### @Service :

- Class Level Annotation
- It is a marker interface.
- It is a business logic.
- It is a service layer.
- It used to create a service layer.

```java
@Service
public class TestService{
   public void service1(){
      //business code (iş kodları)
   }
}
```

---

### @Autowired :

- Field Level Annotation
- It is used to inject the dependency.
- It is used to inject the object.
- It is used to inject the object reference.
- Dependency Injection is a design pattern.

```java
public class Brand{
   private int id;
   private String name;

   @Autowired
   public Brand(int id, String name){
     this.id = id;
     this.name = name;
   }
}
```

---

### @Controller :

- Class Level Annotation
- It is a marker interface.
- It is a controller layer.
- It is used to create a controller layer.
- It use with @RequestMapping annotation.

```java
@Controller
@RequestMapping("/api/brands")
public class BrandsController{
   @GetMapping("/getall")
   public Employee getAll(){
       return brandService.getAll();
   }
}
```

---

### @RequestMapping :

- Method Level Annotation
- It is used to map the HTTP request with specific method.

```java
@Controller
@RequestMapping("/api/brands")
public class BrandsController{
   @GetMapping("/getall")
   public Employee getAll(){
       return brandService.getAll();
   }
}
```

---

### @GetMapping :

- Method Level Annotation
- It is used to map the HTTP GET request with specific method.
- It is used to get the data.
- It is used to read the data.
  ```java
  @GetMapping("/getall")
  public Employee getAll(){
      return brandService.getAll();
  }
  ```

---

### @PostMapping :

- Method Level Annotation
- It is used to map the HTTP POST request with specific method.
- It is used to add the data.
- It is used to create the data.
  ```java
  @PostMapping("/add")
  public void add(@RequestBody Brand brand){
      brandService.add(brand);
  }
  ```

---

### @PutMapping :

- Method Level Annotation
- It is used to map the HTTP PUT request with specific method.
- It is used to update the data.
  ```java
  @PutMapping("/update")
  public void update(@RequestBody Brand brand){
      brandService.update(brand);
  }
  ```

---

### @DeleteMapping :

- Method Level Annotation
- It is used to map the HTTP DELETE request with specific method.
- It is used to delete the data.
  ```java
  @DeleteMapping("/delete")
  public void delete(@RequestBody Brand brand){
      brandService.delete(brand);
  }
  ```

---

### @PathVariable :

- Method Level Annotation
- It is used to get the data from the URL.
- It is the most suitable for RESTful web service that contains a path variable.
  ```java
  @GetMapping("/getbyid/{id}")
  public Brand getById(@PathVariable int id){
      return brandService.getById(id);
  }
  ```

---

### @RequestBody:

- It is used to get the data from the request body.
- It is used to get the data from the HTTP request.
- It is used to get the data from the HTTP request body.

  ```java
  @PostMapping("/add")
  public void add(@RequestBody Brand brand){
      brandService.add(brand);
  }
  ```

---

### @RequestParam:

- It is used to get the data from the URL.
- It is used to get the data from the URL query parameters.
- It is also known as query parameter.

```java
@GetMapping("/getbyid")
public Brand getById(@RequestParam int id){
    return brandService.getById(id);
}
```

---

### @RestController:

- Class Level Annotation
- It is a marker interface.
- It is a controller layer.
- It is used to create a controller layer.
- It use with @RequestMapping annotation.
- It is a combination of @Controller and @ResponseBody annotations.
- @RestController annotation is explained with @ResponseBody annotation.
- @ResponseBody eliminates the need to add a comment to every method.

```java
@RestController
@RequestMapping("/api/brands")
public class BrandsController{
   @GetMapping("/getall")
   public Employee getAll(){
       return brandService.getAll();
   }
}
```

---

- If you like this article, you can give me a like on. 😎
  Thanks for reading. 🙏

---

### Other posts

- [Hibernate Guide](https://dev.to/burakboduroglu/hibernate-cheat-sheet-2dke)
- [Beginner Guide](https://dev.to/burakboduroglu/building-the-future-a-beginners-guide-to-software-development-2ih8)
- [MongoDB](https://dev.to/burakboduroglu/mongodb-cheat-sheet-1a6a)
- [Behind the Scenes: Exploring Powerful Backend Frameworks](https://dev.to/burakboduroglu/behind-the-scenes-exploring-powerful-backend-frameworks-1an1)

---

### Accounts

- [Visit my page✅](https://bento.me/burakboduroglu)
- [GitHub](https://github.com/burakboduroglu)
