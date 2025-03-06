import Breadcrumb from "../../../components/Common/Breadcrumb";
import { notFound } from "next/navigation";
import { courses } from "../../../components/Programs/CourseData"; // Adjust path if needed
import Link from "next/link";

export const metadata: Metadata = {
  title: "Course Details | Learn with Experts",
  description: "Find detailed information about our courses and enroll today.",
};

const CourseDetail = ({ params }: { params: { id: string } }) => {
  const course = courses.find((course) => String(course.id) === params.id);

  if (!course) {
    return notFound();
  }

  return (
    <>
      {/* Breadcrumb Component */}
      <Breadcrumb
        pageName={course.name}
        description="Get more details and apply for this course."
      />

      {/* Course Details */}
      <section className="mx-auto max-w-4xl p-6">
        <h1 className="mb-4 text-3xl font-bold">{course.name}</h1>
        <p className="mb-2 text-gray-600">{course.description}</p>
        <p className="mb-6 text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        {/* Application Form */}
        <Link
          href="/apply" // Change this to the correct application page URL
          className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Apply Now
        </Link>
      </section>
    </>
  );
};

export default CourseDetail;
