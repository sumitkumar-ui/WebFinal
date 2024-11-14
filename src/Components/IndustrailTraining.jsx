import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from './Footer';

const trainingPrograms = [
  {
    id: 1,
    image: '/python.png',
    title: 'Full Stack Python',
    content: 'Develop functional websites for clients, utilizing modern web technologies and frameworks, refining coding skills and understanding user interface design principles.    ',
  },

  {
    id: 2,
    image: '/java.png',
    title: 'Full Stack Java',
    content: 'Tackle live app projects, utilizing iOS and Android frameworks to develop functional mobile applications, fostering adaptability and proficiency in modern development tools.    ',
  },

  {
    id: 3,
    image: '/web development.png',
    title: 'Mean/Mearn Stack',
    content: 'Work with real datasets, applying statistical analysis and machine learning algorithms to derive actionable insights, fostering problem-solving skills and domain expertise.',
  },

  {
    id: 4,
    image: '/ml.png',
    title: 'AI & ML, Data Science',
    content: ' Contribute to live Java projects, developing scalable software solutions and integrating frameworks, enhancing coding proficiency and understanding software development lifecycle. ',
  },


  {
    id: 5,
    image: '/data analyst.png',
    title: 'Data Analytics',
    content: 'Contribute to software projects, optimizing code efficiency and performance, honing programming skills and understanding software architecture in real-world applications.    ',
  },


  {
    id: 6,
    image: '/digital marketting.png',
    title: 'Digital Marketing',
    content: 'Collaborate on Python projects, implementing solutions for web development, automation, and data manipulation, refining coding skills and versatility in Python applications.',
  },

  {
    id: 7,
    image: '/java.png',
    title: 'Java Programing',
    content: 'Design interfaces for live projects, balancing aesthetics and usability, refining user-centered design skills and adapting to project requirements for optimal user experience.',
  },

  {
    id: 8,
    image: '/python.png',
    title: 'Python Programming',
    content: ' Solve real-world problems using AI techniques, designing and implementing intelligent systems, cultivating innovation and practical experience in AI applications.',
  },

  {
    id: 9,
    image: '/c++.png',
    title: 'C/C++',
    content: ' Apply algorithms to real datasets, solving complex problems and refining predictive models, fostering critical thinking and practical experience in data analysis and model deployment.',
  },

  
  // Add more training programs here with similar structure
];

const IndustrialTraining = () => {
  return (
    <>
      <NavBar />
      <div className="bg-Blue-3000 w-full text-center mt-0 py-3">
        <h1 className="text-3xl font-bold mb-10 mt-10 text-center">Industrial Training Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="p-4 rounded-lg overflow-hidden flex flex-col justify-center items-center mb-10">
              <img
                src={program.image}
                alt={program.title}
                className="w-56 h-56 object-cover rounded-lg mb-4 border-none"
              />
              <h2 className="text-xl font-bold mb-2">{program.title}</h2>
              <p className="text-sm mb-4 flex text-center">{program.content}</p>
              <button className="bg-blue-900 hover:bg-Blue-1000 text-white font-bold py-2 px-4 rounded-full">
  <a href=" https://forms.gle/5Yp7frchFjG4rwtS7 " target="_blank" rel="noopener noreferrer">Apply</a>
</button>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndustrialTraining;
