import React from 'react';
import styles from './coursestable.module.css';

const UTTable = () => {
  const courses = [
    {
      term: '5th semester', examPeriod: 'Fall 2024', courses: [
        { name: '• Data Science Lab', result: "^", avg: "^", ects: 8, link: "https://kurser.dtu.dk/course/01005" },
        { name: '• Software Design and Implementation I (C Programming)', result: 7, avg: "6.9", ects: 6, link: "https://karakterer.dtu.dk/Histogram/1/01017/Winter-2022" },
        { name: '• Exploring User Interaction', result: 7, avg: "8.0", ects: 6, link: "https://karakterer.dtu.dk/Histogram/1/02461/Winter-2022" },
        { name: '• Communication for Executive Leadership', result: 12, avg: " ", ects: 6, link: "https://kurser.dtu.dk/course/02631" },
        { name: '• Visual Storytelling', result: 12, avg: " ", ects: 6, link: "https://kurser.dtu.dk/course/02631" },
        { name: ''},

      ]
    }
  ];
  

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Exchange Student</h2>
      <h6>The University of Texas at Austin</h6>
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

export default UTTable;
