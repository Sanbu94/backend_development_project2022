const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

// Describe the test set
describe("GET sleepyhead endpoint", () => {
  // The test that is being done
  test("should return 200", (done) => {
    request(app)
      .get("/api/sleepyhead") // Endpoint that is being tested
      .expect(200) // Verify the expected result
      .end(done); // Informing that the test is done
  });
});

test("should return 200 and valid JSON", async () => {
  const response = await request(app)
    .get("/api/sleepyhead")
    .set("Accept", "application/json");

  expect(response.status).toEqual(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 2,
        month: "2023-09-30T21:00:00.000Z",
        start: 18.5,
        end: 7.2,
        amount: 12.3,
        created: "2023-01-10T10:56:26.000Z",
      }),
    ])
  );
});

test("should return 1 city by id", async () => {
  const response = await request(app)
    .get("/api/sleepyhead/2")
    .set("Accept", "application/json");

  expect(response.status).toEqual(200);
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.body).toEqual(
    expect.objectContaining({
      id: 2,
    })
  );
});
