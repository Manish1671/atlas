export const openApiSpec = {
  openapi: "3.0.3",
  info: { title: "Atlas API", version: "0.1.0", description: "AI-powered Student Digital Twin Platform API" },
  paths: {
    "/health": { get: { summary: "Health check", responses: { "200": { description: "Healthy" } } } },
    "/api/auth/register": { post: { summary: "Register a user" } },
    "/api/auth/login": { post: { summary: "Login and issue JWT tokens" } },
    "/api/events": { post: { summary: "Create timeline event" } },
    "/api/students": { get: { summary: "Mentor student search" } },
    "/api/students/{studentId}/digital-twin": { get: { summary: "Get student digital twin" } }
  }
};
