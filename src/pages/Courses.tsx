'use client';
import React from 'react';
import Image from 'next/image';
import { Clock, Star, Users, Play, Music, Trophy } from 'lucide-react';
import { ICourse } from '@/types';
import { courses } from "@/data";

const CourseCard = ({ course }: { course: ICourse }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
    <div className="relative">
      <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <Music className="h-12 w-12 text-white opacity-75" />
      </div>
      {course.featured && (
        <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
          Featured
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{course.description}</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Play className="h-5 w-5 text-indigo-600" />
        </button>
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {course.duration}
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-1 text-yellow-500" />
          {course.rating}
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          {course.students}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Image
          src={course.instructorAvatar || '/api/placeholder/24/24'}
          alt={course.instructor}
          width={24}
          height={24}
          className="h-6 w-6 rounded-full"
        />

        <span className="text-sm text-gray-600">{course.instructor}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Trophy className="h-4 w-4 text-indigo-600" />
        <span className="text-sm font-medium text-indigo-600">
          {course.points} points
        </span>
      </div>
    </div>
  </div>
);

const CoursesPage = () => {


  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Courses</h1>
        <p className="text-gray-600">
          Discover and learn through musical education
        </p>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
