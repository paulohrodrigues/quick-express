import * as request from "supertest";
import * as bootstrap from "../../core/bootstrap";
import { settings } from "../../settings";

describe("Users module", () => {

    const email: string = `${new Date().getTime()}@example.com`;
    const password: string = "@DefaultTest!Password#$%¨&*";
    const name: string = "Test User";
    let access: string;
    let refresh: string;
    let taskId: number;

    beforeAll(async (done) => {
        await bootstrap.start("test");
        done();
    }, 60000);

    afterAll(async (done) => {
        await bootstrap.stop();
        done();
    });

    describe("POST /users", () => {
        it("Should register a new user", (done) => {
            request(bootstrap.server.app)
                .post(`${settings.baseRoute}/users`)
                .send({ email, password, name })
                .expect(201)
                .then((result) => {
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        });
    });

    describe("POST /users/login", () => {
        it("Should login the new user", (done) => {
            request(bootstrap.server.app)
                .post(`${settings.baseRoute}/users/login`)
                .send({ email, password })
                .expect(200)
                .expect((response) => {
                    if (!("access" in response.body)) { throw new Error("Missing `token` key"); }
                    if (!("refresh" in response.body)) { throw new Error("Missing `refresh` key"); }
                })
                .then((response) => {
                    access = response.body.access;
                    refresh = response.body.refresh;
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        });
    });

    describe("POST /tasks", () => {
        it("Should create a new task", (done) => {
            request(bootstrap.server.app)
                .post(`${settings.baseRoute}/tasks`)
                .set("Authorization", `Bearer ${access}`)
                .send({ title: "Example task" })
                .expect(201)
                .expect((response) => {
                    if (!("id" in response.body)) { throw new Error("Missing task `id` in the response."); }
                })
                .then((response) => {
                    taskId = response.body.id;
                    done();
                })
                .catch((error) => {
                    done(error);
                });
        });
    });

});