import { Request, Response } from "express";
import { CreateCourseService } from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const createCourseService = new CreateCourseService();

  createCourseService.execute({
    name: 'node.js',
    duration: 10,
    educator: 'Dani'
  });

  return response.send();
}