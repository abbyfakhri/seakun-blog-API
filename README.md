# **seakun.id Blog API**

## **Project Description**
This is a simple API for a blog platform, where you can manage posts, including creating, reading, updating, and deleting blog posts.

---
## **Setup Quickly Using Docker**
1. Make sure to have docker installed in your system
    ```bash
    docker version
    ```
2. Create Database
    - Access MySQL via terminal or a GUI database explorer.
    - Create the database by running the following command:
    ```sql
    CREATE DATABASE your_database_name;
    ```
3. Clone project:
    ```bash
    git clone https://github.com/abbyfakhri/seakun-blog-API
    ```
4. Navigate into the project directory:
    ```bash
    cd seakun-blog-API
    ```
5. Create .env file
Example:
```env
APP_NAME="seakun-blog-API"
APP_PORT=9000
BASEURL=localhost
URL_PREFIX="/api/v1"
APP_MODE=development

DB_HOST=host.docker.internal // for docker to be able to access it's host network
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=seakun_blog
```

6. Build Docker image
    ```bash
    docker build -t seakun-blog-api .
    ```
7. Run Docker Image as Container
    ```bash
    docker run -d -p 9000:9000 --name seakun-blog-api-container seakun-blog-api:latest
    ```


---

## **Clone and Download Project Dependencies**

1. Clone the repository:
    ```bash
    git clone https://github.com/abbyfakhri/seakun-blog-API
    ```

2. Navigate into the project directory:
    ```bash
    cd seakun-blog-API
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

---

## **Create `.env` File**

Create a `.env` file in the root of the project and define the following environment variables:
Example:
```env
APP_NAME="seakun-blog-API"
APP_PORT=9000
BASEURL=localhost
URL_PREFIX="/api/v1"
APP_MODE=development

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=seakun_blog
```

---

## **How to Migrate Data**

### **Create Database**

1. Ensure that MySQL is installed on your system. If not, follow the installation guide [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).
2. Access MySQL via terminal or a GUI database explorer.
3. Create the database by running the following command:
    ```sql
    CREATE DATABASE your_database_name;
    ```

### **Run Migration using Sequelize CLI**

1. Run the migration to create the tables:
    ```bash
    npm run db:migrate
    ```

2. Optionally, you can seed the database with dummy data:
    ```bash
    npm run db:seed
    ```

---

## **Run the Server Application**

Start the server in development mode by running the following command:

```bash
npm run dev
```

---

## **Try Out the API**

To test the API, you can download the Postman collection from [here](https://drive.google.com/file/d/1sClR675zy1b0Ez-yshg2hjo30IGJDVa_/view?usp=sharing).

---

## **Route List**

### **GET /posts**
- **Description**: Retrieve a list of all blog posts.

### **GET /posts/:id**
- **Description**: Retrieve a single blog post by its ID.

### **POST /posts**
- **Description**: Create a new blog post.
- **Request Body**:
    ```json
    {
        "title": "string",  (required),
        "content": "string" (required)
    }
    ```

### **PUT /posts/:id**
- **Description**: Update an existing blog post by its ID.
- **Request Body**:
    ```json
    {
        "title": "string",  (required if content does not exist),
        "content": "string" (required if title does not exist)
    }
    ```
- **Validation**: At least one of `title` or `content` must be present.

### **DELETE /posts/:id**
- **Description**: Delete a blog post by its ID.

