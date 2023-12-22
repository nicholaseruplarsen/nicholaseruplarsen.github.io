import React from 'react';
import styles from './coursestable.module.css';

const CoursesTable = () => {
  const courses = [
    {
      term: '4th semester', examPeriod: 'Spring 2024', courses: [
        { name: '• Active machine learning and agency', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02463" },
        { name: '• Introduction to reinforcement learning and control', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02465" },
        { name: '• Bioengineering (Polytechnical Foundation)', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/27020" },
        { name: '• Project work', result: '?', avg: " ", ects: 10, link: "https://kurser.dtu.dk/course/02466" },
        { name: '• Physics 1', result: '?', avg: " ", ects: 10, link: "https://kurser.dtu.dk/course/10024" }
      ]
    },
    {
      term: '3rd semester', examPeriod: 'Fall 2023', courses: [
        { name: '• Project in Statistical Evaluation for AI & Data', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02445" },
        { name: '• Introduction to Machine Learning and Data Mining', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02450" },
        { name: '• Advanced Engineering Mathematics 2', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/01035" },
        { name: '• UX Design Prototyping', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02809" },
        { name: '• Fundamental chemistry', result: '?', avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/2022-2023/26026" }
      ]
    },
    {
      term: '2nd semester', examPeriod: 'Spring 2023', courses: [
        { name: '• Introduction to mathematical statistics', result: '?', ects: 5, avg: "4.8", link: "https://karakterer.dtu.dk/Histogram/1/02403/Summer-2023" },
        { name: '• Algorithms and Data Structures 1', result: 7, avg: "5.9", ects: 5, link: "https://karakterer.dtu.dk/Histogram/1/02105/Summer-2023" },
        { name: '• Signals and data', result: 12, avg: "7.9", ects: 5, link: "https://karakterer.dtu.dk/Histogram/1/02462/Summer-2023" },
        { name: '• Artificial intelligence and human cognition', result: 7, avg: "7.7", ects: 5, link: "https://karakterer.dtu.dk/Histogram/1/02464/Summer-2023" },
        { name: '• Advanced engineering mathematics 1', result: 7, avg: "8.2", ects: 10, link: "https://karakterer.dtu.dk/Histogram/1/01005/Summer-2023" }
      ]
    },
    {
      term: '1st semester', examPeriod: 'Fall 2022', courses: [
        { name: '• Advanced engineering mathematics 1', result: "^", avg: "^", ects: 10, link: "https://kurser.dtu.dk/course/01005" },
        { name: '• Discrete Mathematics', result: 7, avg: "6.9", ects: 5, link: "https://karakterer.dtu.dk/Histogram/1/01017/Winter-2022" },
        { name: '• Introduction to intelligent systems', result: 7, avg: "8.0", ects: 10, link: "https://karakterer.dtu.dk/Histogram/1/02461/Winter-2022" },
        { name: '• Introduction to programming & data processing', result: 12, avg: " ", ects: 5, link: "https://kurser.dtu.dk/course/02631" },
        { name: ''},

      ]
    }
  ];
  

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Student</h2>
      <h6>DTU, Artificial Intelligence & Data</h6>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Course</th>
            {/* <th className={styles.tableHeaderResult}>Grade</th> */}
            {/* <th className={styles.tableHeaderResult}>Avg.</th> */}
            <th className={styles.tableHeaderResult}>ECTS</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((term, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className={styles.termHeader} colSpan={4}>
                  {term.term} ({term.examPeriod})
                </td>
              </tr>
              {term.courses.map((course, courseIndex) => (
                <tr key={courseIndex}>
                  <td className={styles.tableData}>{course.name}</td>
                  {/* <td className={styles.tableResult}>{course.result}</td> */}
                  {/* <td className={styles.tableResult}><a className={styles.animation} href={course.link} target="_blank" rel="noopener noreferrer">{course.avg}</a></td> */}
                  <td className={styles.tableResult}>{course.ects}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesTable;
