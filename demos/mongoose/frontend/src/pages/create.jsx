import {useState} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const classes = [
  'CS 34800	Information Systems',
  'CS 38100	Introduction to the Analysis of Algorithms',
  'CS 44800	Introduction to Relational Databases',
  'CS 37300 Data Mining and Machine Learning',
  'CS 47300	 Web Information Search & Management',
  'CS 35200	Compilers: Principles and Practice',
   'CS 35400	Operating Systems',
   'CS 35500	Introduction to Cryptography',
   'CS 42600	Computer Security',
   'CS 42200	Computer Networks',
   'CS 47100	Introduction to Artificial Intelligence',
   'CS 47800	Introduction to Bioinformatics',
   'CS 49000 Senior Project',
   'EPICS 41100/41200 Senior Project (Must take both)',
   'CS 49700 Honors Research Project'
]; // Hardcoded list of classes
  const professorsByClass = {
    'CS 34800	Information Systems': ['H Benotman'],
  'CS 38100	Introduction to the Analysis of Algorithms': ['A Psomas', 'E Grigorescu'
],
  'CS 44800	Introduction to Relational Databases': ['E Bertino'],
  'CS 37300 Data Mining and Machine Learning': ['T Zhang', 'R A Khanna'],
  'CS 47300	 Web Information Search & Management': ['H Benotman'
  ],
  'CS 35200	Compilers: Principles and Practice': ['C Jung'],
   'CS 35400	Operating Systems': ['K Park'],
   'CS 35500	Introduction to Cryptography': ['V Zikas'],
   'CS 42600	Computer Security': ['M Taram'],
   'CS 42200	Computer Networks': ['M Shahbaz'],
   'CS 47100	Introduction to Artificial Intelligence': ['R A Yeh'],
   'CS 47800	Introduction to Bioinformatics': ['M R Gribskov, R Harding'],
   'CS 49000 Senior Project': ['Faculty Approval'],
   'EPICS 41100/41200 Senior Project (Must take both)': ['A L Pierce,W C Oakes,B R Stevens'],
   'CS 49700 Honors Research Project': ['P Sousa Da Fonseca']
    
  }; // Hardcoded list of professors by class
  const [title, setTitle] = useState("");
  const [prof, setProf] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, prof, content, date, rating});
    const headers = {"content-type": "application/json"};
    fetch("http://localhost:3000/blog/create-post", {method:"post", body:requestData,headers})
    .then(() => {
      setDone(true);
    });
    console.log(requestData);
  }

  if (done) {
    return (
      <div>
        <Link to="/view">Check out your review!</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Review</h1>
      <div></div>
      <select value={title} onChange={(e) => setTitle(e.currentTarget.value)}>
          <option value="" disabled>Select a class</option>
          {classes.map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>
        <div>
        </div>
        <select value={prof} onChange={(e) => setProf(e.target.value)}>
          <option value="" disabled>Select a professor</option>
          {professorsByClass[title] && professorsByClass[title].map((prof) => (
            <option key={prof} value={prof}>
              {prof}
            </option>
          ))}
        </select>
      <div>
      <p>Rating 1-5</p>
      <input
  type="number"
  min="1"
  max="5"
  value={rating}
  onChange={(e) => setRating(e.currentTarget.value)}

></input>
      </div>
      <div>
        <textarea
          placeholder="Review"
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        ></input>
      </div>
      <button>Post</button>
    </form>
  );
}
