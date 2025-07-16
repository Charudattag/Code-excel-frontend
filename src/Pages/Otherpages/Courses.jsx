import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Coursecard/Card";
import "./Courses.css";
import Image1 from "../../assets/Courses/Image1.jpg";
import Image2 from "../../assets/Courses/imag2.jpg";
import instructorImage from "../../assets/Instructor/InstructorImage.jpg";

const courses = [
  {
    id: 1,
    image: Image1,
    title: "C and C++ (Basic to advance)",
    rating: 5.0,
    ratingCount: 1024,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 25,
    duration: "6h 45m",
    description:
      "Learn C and C++ programming from basic to advanced concepts. Master object-oriented programming and data structures.",
    enrolledCount: "1,808,329",
    aboutCourse:
      "C and C++ Masters is a comprehensive course designed to build a strong foundation in C and C++ programming. From core concepts to real-world applications, learners will gain hands-on experience with memory management, pointers, OOP, and data structures. The course includes interactive modules and mini-projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for system programming roles.",
    skills: [
      "Memory Management",
      "Pointers",
      "Data Structures",
      "OOP",
      "Algorithms",
      "System Programming",
      "Debugging",
      "Performance Optimization",
    ],
    learningModules: [
      {
        title: "Introduction to C",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Functions & Arrays",
        description: "function definition, array manipulation, pointers basics",
      },
      {
        title: "Pointers & Memory",
        description: "pointer arithmetic, dynamic memory allocation",
      },
      {
        title: "Structures & Unions",
        description: "user-defined data types, complex structures",
      },
      {
        title: "File Handling",
        description: "reading/writing files, binary operations",
      },
      {
        title: "Introduction to C++",
        description: "classes, objects, OOP concepts",
      },
      {
        title: "Advanced C++",
        description: "templates, STL, exception handling",
      },
      {
        title: "System Programming",
        description: "process management, inter-process communication",
      },
      {
        title: "Mini Projects",
        description:
          "Console apps, system utilities, data structures implementation",
      },
    ],
  },
  {
    id: 2,
    image: Image2,
    title: "Java (Basic to advance)",
    rating: 5.0,
    ratingCount: 856,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 30,
    duration: "8h 20m",
    description:
      "Master Java programming from fundamentals to advanced topics including Spring Framework and microservices.",
    enrolledCount: "1,245,678",
    aboutCourse:
      "Java Masters is a beginner-friendly course designed to build a strong foundation in Java programming. From core concepts to real-world applications, learners will gain hands-on experience with OOP, data structures, and backend logic. The course includes interactive modules and mini-projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for Java-based roles.",
    skills: [
      "Database Design",
      "Database Systems",
      "Data Processing",
      "Data Structures",
      "Programming Principles",
      "SQL",
      "Restful API",
      "Relational Databases",
      "Data Visualization",
      "Web Scraping",
      "Database Management",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 3,
    image: Image1,
    title: "Python (Basic to advance)",
    rating: 5.0,
    ratingCount: 2048,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 35,
    duration: "10h 15m",
    description:
      "Learn Python programming from basic to advanced concepts. Master data science, machine learning, and web development.",
    enrolledCount: "2,156,789",
    aboutCourse:
      "Python Masters is a comprehensive course designed to build a strong foundation in Python programming. From basic syntax to advanced concepts like data science and machine learning, learners will gain hands-on experience with web development, automation, and AI applications. The course includes interactive modules and mini-projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for Python-based roles.",
    skills: [
      "Data Science",
      "Machine Learning",
      "Web Development",
      "Automation",
      "Data Analysis",
      "API Development",
      "Database Integration",
      "GUI Development",
      "Testing",
      "Deployment",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 4,
    image: Image2,
    title: "Data Structure Algorithms",
    rating: 5.0,
    ratingCount: 1532,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 28,
    duration: "9h 30m",
    description:
      "Master data structures and algorithms. Learn efficient problem-solving techniques and coding interview preparation.",
    enrolledCount: "987,654",
    aboutCourse:
      "Data Structures and Algorithms is a comprehensive course designed to build a strong foundation in problem-solving and algorithmic thinking. From basic data structures to advanced algorithms, learners will gain hands-on experience with optimization techniques and interview preparation. The course includes interactive modules and coding challenges to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for technical roles.",
    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Time Complexity",
      "Space Complexity",
      "Sorting",
      "Searching",
      "Graph Theory",
      "Dynamic Programming",
      "Greedy Algorithms",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 5,
    image: Image1,
    title: "Data Science & ML",
    rating: 5.0,
    ratingCount: 1789,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 40,
    duration: "12h 45m",
    description:
      "Comprehensive data science and machine learning course covering statistics, Python, and real-world applications.",
    enrolledCount: "1,567,890",
    aboutCourse:
      "Data Science and Machine Learning is a comprehensive course designed to build a strong foundation in data analysis and AI. From statistical concepts to advanced ML algorithms, learners will gain hands-on experience with real-world datasets and predictive modeling. The course includes interactive modules and capstone projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring data scientists.",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Statistics",
      "Python",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Big Data",
      "Data Visualization",
      "Model Deployment",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 6,
    image: Image2,
    title: "LinkedIn/Resume Set-up",
    rating: 5.0,
    ratingCount: 432,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 15,
    duration: "4h 20m",
    description:
      "Learn to create professional LinkedIn profiles and resumes that stand out to recruiters and hiring managers.",
    enrolledCount: "456,789",
    aboutCourse:
      "LinkedIn and Resume Setup is a practical course designed to help you create professional profiles that stand out to recruiters. From profile optimization to resume writing, learners will gain hands-on experience with personal branding and networking strategies. The course includes templates and real examples to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and professionals aiming to advance their careers.",
    skills: [
      "Personal Branding",
      "Resume Writing",
      "LinkedIn Optimization",
      "Networking",
      "Interview Preparation",
      "Professional Communication",
      "Career Planning",
      "Portfolio Building",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 7,
    image: Image1,
    title: "Web Development",
    rating: 5.0,
    ratingCount: 1678,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 32,
    duration: "11h 30m",
    description:
      "Full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and database management.",
    enrolledCount: "1,234,567",
    aboutCourse:
      "Web Development is a comprehensive course designed to build a strong foundation in full-stack development. From frontend to backend, learners will gain hands-on experience with modern technologies and frameworks. The course includes interactive modules and real projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for web development roles.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Database Design",
      "API Development",
      "Responsive Design",
      "Version Control",
      "Deployment",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 8,
    image: Image2,
    title: "Cloud Computing",
    rating: 5.0,
    ratingCount: 945,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 22,
    duration: "7h 15m",
    description:
      "Master cloud computing concepts with AWS, Azure, and Google Cloud. Learn deployment and DevOps practices.",
    enrolledCount: "789,123",
    aboutCourse:
      "Cloud Computing is a comprehensive course designed to build a strong foundation in cloud technologies. From basic concepts to advanced deployment strategies, learners will gain hands-on experience with major cloud platforms. The course includes interactive modules and real-world projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring developers aiming for cloud and DevOps roles.",
    skills: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DevOps",
      "Containerization",
      "Microservices",
      "Serverless",
      "Security",
      "Monitoring",
      "CI/CD",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 9,
    image: Image1,
    title: "Cyber Security",
    rating: 5.0,
    ratingCount: 1123,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 26,
    duration: "8h 45m",
    description:
      "Comprehensive cybersecurity course covering ethical hacking, network security, and penetration testing.",
    enrolledCount: "654,321",
    aboutCourse:
      "Cyber Security is a comprehensive course designed to build a strong foundation in security concepts and practices. From network security to ethical hacking, learners will gain hands-on experience with security tools and techniques. The course includes interactive modules and security labs to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring security professionals.",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Cryptography",
      "Security Tools",
      "Incident Response",
      "Risk Assessment",
      "Compliance",
      "Forensics",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 10,
    image: Image2,
    title: "UI/UX Design",
    rating: 5.0,
    ratingCount: 678,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 20,
    duration: "6h 30m",
    description:
      "Learn UI/UX design principles, tools like Figma, and create beautiful, user-friendly interfaces.",
    enrolledCount: "543,210",
    aboutCourse:
      "UI/UX Design is a comprehensive course designed to build a strong foundation in design principles and user experience. From wireframing to prototyping, learners will gain hands-on experience with design tools and user research. The course includes interactive modules and design projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring designers.",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Adobe XD",
      "Design Systems",
      "Usability Testing",
      "Visual Design",
      "Interaction Design",
      "Design Thinking",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 11,
    image: Image1,
    title: "Mobile App Dev",
    rating: 5.0,
    ratingCount: 1345,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 38,
    duration: "13h 20m",
    description:
      "Mobile app development course covering React Native, Flutter, and native iOS/Android development.",
    enrolledCount: "876,543",
    aboutCourse:
      "Mobile App Development is a comprehensive course designed to build a strong foundation in mobile development. From React Native to Flutter, learners will gain hands-on experience with cross-platform and native development. The course includes interactive modules and app projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring mobile developers.",
    skills: [
      "React Native",
      "Flutter",
      "iOS Development",
      "Android Development",
      "Mobile UI/UX",
      "App Store Deployment",
      "Performance Optimization",
      "Testing",
      "State Management",
      "API Integration",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
  {
    id: 12,
    image: Image2,
    title: "Blockchain Basics",
    rating: 5.0,
    ratingCount: 567,
    instructor: "Samarth Kulkarni",
    instructorImage: instructorImage,
    lessons: 18,
    duration: "5h 45m",
    description:
      "Introduction to blockchain technology, cryptocurrencies, and smart contract development with Solidity.",
    enrolledCount: "345,678",
    aboutCourse:
      "Blockchain Basics is a comprehensive course designed to build a strong foundation in blockchain technology and cryptocurrencies. From basic concepts to smart contract development, learners will gain hands-on experience with blockchain platforms and tools. The course includes interactive modules and blockchain projects to ensure practical understanding. Guided by expert mentor Samarth Kulkarni, this program is ideal for students and aspiring blockchain developers.",
    skills: [
      "Blockchain",
      "Cryptocurrency",
      "Smart Contracts",
      "Solidity",
      "Ethereum",
      "DeFi",
      "Web3",
      "Cryptography",
      "Distributed Systems",
      "Token Economics",
    ],
    learningModules: [
      {
        title: "Introduction to Java",
        description: "syntax, data types, operators, control statements",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        description:
          "classes, objects, inheritance, polymorphism, encapsulation",
      },
      {
        title: "Exception Handling",
        description: "try-catch blocks, custom exceptions",
      },
      {
        title: "Collections Framework",
        description: "List, Set, Map, and their real-world usage",
      },
      {
        title: "File Handling",
        description: "reading/writing files using Java I/O",
      },
      {
        title: "Multithreading & Concurrency",
        description: "thread creation, synchronization",
      },
      {
        title: "Database Connectivity (JDBC)",
        description: "CRUD operations with MySQL",
      },
      {
        title: "GUI with JavaFX",
        description: "building basic desktop interfaces",
      },
      {
        title: "Mini Projects",
        description: "Console apps, small GUI tools, DB-connected systems",
      },
    ],
  },
];

const CARDS_PER_ROW = 3;
const ROWS_TO_SHOW = 2;

const Courses = () => {
  const [visibleRows, setVisibleRows] = useState(2);
  const navigate = useNavigate();
  const visibleCards = courses.slice(0, visibleRows * CARDS_PER_ROW);
  const canShowMore = visibleCards.length < courses.length;

  const handleSeeMore = () => {
    setVisibleRows((prev) => prev + ROWS_TO_SHOW);
  };

  const handleCourseClick = (course) => {
    // Navigate to course details with course data
    navigate(`/course-details/${course.id}`, {
      state: { courseData: course },
    });
  };

  return (
    <div className="courses-main-container">
      <div className="courses-container">
        <div className="courses-title-container">
          <div className="courses-title text-center fw-bold ">
            <div className="courses-title-heading ">
              <h1 className="courses-title-h1">Our Popular Course</h1>
            </div>
            <div className="courses-title-small mt-4">
              <small className="text-muted ">
                Courses That Make You Industry-Ready.
                <br />
                From Basics to Breakthroughs — All in One Place.
              </small>
            </div>
          </div>
        </div>
        <div className="courses-grid">
          {visibleCards.map((course, idx) => (
            <div key={course.id} onClick={() => handleCourseClick(course)}>
              <Card {...course} />
            </div>
          ))}
        </div>
        {canShowMore && (
          <div className="courses-see-more-btn-container">
            <button className="courses-see-more-btn" onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
