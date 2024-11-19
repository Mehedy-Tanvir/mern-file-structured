import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
  // const result = await Student.create(student);
  const newStudent = new Student(student);
  if (await newStudent.isUserExists(student.id)) {
    throw new Error('Student already exists');
  }
  const result = await newStudent.save();

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getStudentById = async (id: string) => {
  const result = await Student.findOne({ _id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getStudentById,
};
