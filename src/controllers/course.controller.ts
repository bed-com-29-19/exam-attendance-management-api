import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { Course } from 'src/entities/course.entity';
import { CourseService } from 'src/services/course.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('/course')
  async createCourse(@Body() course: Course): Promise<Course> {
    const newCourse = await this.courseService.createCourse(course);
    return newCourse;
  }

  @Get('/get/course/:courseCode')
  async getCourseByCourseCode(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course = await this.courseService.getCourseByCourseCode(courseCode);
    return course;
  }

  @Get('/get/course/attended/:courseCode')
  async getCourseByAttendedTrue(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course = await this.courseService.getCourseByAttendedTrue(courseCode);
    return course;
  }

  @Put('/add/comment/:courseCode')
  async addCommentToCourse(
    @Param('courseCode') courseCode: string,
    @Body() course: Course,
  ): Promise<Course> {
    const updatedCourse = await this.courseService.addCommentToCourse(
      courseCode,
      course,
    );
    return updatedCourse;
  }

  @Get('/get/course/submitted/:courseCode')
  async getCourseBySubmittedTrue(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course =
      await this.courseService.getCourseBySubmittedTrue(courseCode);
    return course;
  }

  @Get('/get/course/attended/submitted/:courseCode')
  async getBothAttendedAndSubmitted(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course =
      await this.courseService.getBothAttendedAndSubmitted(courseCode);
    return course;
  }

  @Get('/get/course/NOT/attended/submitted/:courseCode')
  async getNotAttendedAndSubmitted(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course =
      await this.courseService.getNotAttendedAndSubmitted(courseCode);
    return course;
  }

  @Get('/get/students/NOT/submitted/:courseCode')
  async getThoseWhoDidNotSubmit(
    @Param('courseCode') courseCode: string,
  ): Promise<Course> {
    const course = await this.courseService.getThoseWhoDidNotSubmit(courseCode);
    return course;
  }
}
