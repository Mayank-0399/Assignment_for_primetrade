import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Assignment API",
      version: "1.0.0",
      description: "REST API with JWT auth, RBAC, and task CRUD"
    },
    servers: [{ url: "http://localhost:5000/api/v1" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: []
};

export default swaggerJsdoc(options);