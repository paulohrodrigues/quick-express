import { Request, Response } from "express";
import { Task } from "../../../models/task";
import { User } from "../../../models/user";

export const getIdTasks = async (request: Request, response: Response) => {

    const userId = request.params.id === "me" ? response.locals.userId : request.params.id;

    const user: User = await User.findOne({ id: userId }).catch(() => null);

    if (!user) {
        response.status(404);
        response.send({ error: "User not found!" });
        return;
    }

    const tasks: Task = await Task.find({ user }).catch(() => null);

    if (!tasks) {
        response.status(400);
        response.send({ error: "Tasks not found!" });
        return;
    }

    response.status(200);
    response.send(tasks);
};
