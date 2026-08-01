import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";
describe("health", () => {
  it("returns ok", async () => {
    const res = await request(app).get("/health").expect(200);
    expect(res.body.status).toBe("ok");
  });
});
