import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = ({name, setSelectedOption1,setSelectedOption2 ,setSelectedOption3, setSelectedOption4, setSelectedOption5, setSelectedOption6, setSelectedOption7, setSelectedOption8, setSelectedOption9, setSelectedOption10, setSelectedOption11, setSelectedOption12, setSelectedOption13, setSelectedOption14, setSelectedOption15, setSelectedOption16, setSelectedOption17, setSelectedOption18, setSelectedOption19, setSelectedOption20, selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5, selectedOption6, selectedOption7, selectedOption8, selectedOption9, selectedOption10, selectedOption11, selectedOption12, selectedOption13, selectedOption14, selectedOption15, selectedOption16, selectedOption17, selectedOption18, selectedOption19, selectedOption20 }) => {
  // const [selectedOption1, setSelectedOption1] = useState('');
  // const [selectedOption2, setSelectedOption2] = useState('');
  // const [selectedOption3, setSelectedOption3] = useState('');
  // const [selectedOption4, setSelectedOption4] = useState('');
  // const [selectedOption5, setSelectedOption5] = useState('');
  // const [selectedOption6, setSelectedOption6] = useState('');
  // const [selectedOption7, setSelectedOption7] = useState('');
  // const [selectedOption8, setSelectedOption8] = useState('');
  // const [selectedOption9, setSelectedOption9] = useState('');
  // const [selectedOption10, setSelectedOption10] = useState('');
  // const [selectedOption11, setSelectedOption11] = useState('');
  // const [selectedOption12, setSelectedOption12] = useState('');
  // const [selectedOption13, setSelectedOption13] = useState('');
  // const [selectedOption14, setSelectedOption14] = useState('');
  // const [selectedOption15, setSelectedOption15] = useState('');
  // const [selectedOption16, setSelectedOption16] = useState('');
  // const [selectedOption17, setSelectedOption17] = useState('');
  // const [selectedOption18, setSelectedOption18] = useState('');
  // const [selectedOption19, setSelectedOption19] = useState('');
  // const [selectedOption20, setSelectedOption20] = useState('');

  const navigate = useNavigate();

  const rot = ()=>{
    navigate("/");
    console.log(name);
  }
  if(name==undefined){
    rot();
  }

  
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOptions, setSelectedOptions] = useState();

  const Question = ({ number, text, options, setOption }) => (
    <div className="form-group" style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <label htmlFor={`q${number}`}>{number}. {text}</label>
      {options.map((option, index) => (
        <div className="form-check" key={`q${number}Option${index + 1}`}>
          <input
            type="radio"
            className="form-check-input"
            id={`q${number}Option${index + 1}`}
            name={`q${number}`}
            value={option}
            // checked={eval(`selectedOption${number}`) === `option${index + 1}`}
            checked={eval(`selectedOption${number}`) === option}
            onChange={() => handleRadioChange(number, option)}
          />
          <label className="form-check-label" htmlFor={`q${number}Option${index + 1}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
  
  const handleRadioChange = (questionNumber, optionValue) => {


    switch (questionNumber) {
      case 1:
        setSelectedOption1(optionValue);
        break;
      case 2:
        setSelectedOption2(optionValue);
        break;
      case 3:
        setSelectedOption3(optionValue);
        break;
      case 4:
        setSelectedOption4(optionValue);
        break;
      case 5:
        setSelectedOption5(optionValue);
        break;
      case 6:
        setSelectedOption6(optionValue);
        break;
      case 7:
        setSelectedOption7(optionValue);
        break;
      case 8:
        setSelectedOption8(optionValue);
        break;
      case 9:
        setSelectedOption9(optionValue);
        break;
      case 10:
        setSelectedOption10(optionValue);
        break;
      case 11:
        setSelectedOption11(optionValue);
        break;
      case 12:
        setSelectedOption12(optionValue);
        break;
      case 13:
        setSelectedOption13(optionValue);
        break;
      case 14:
        setSelectedOption14(optionValue);
        break;
      case 15:
        setSelectedOption15(optionValue);
        break;
      case 16:
        setSelectedOption16(optionValue);
        break;
      case 17:
        setSelectedOption17(optionValue);
        break;
      case 18:
        setSelectedOption18(optionValue);
        break;
      case 19:
        setSelectedOption19(optionValue);
        break;
      case 20:
        setSelectedOption20(optionValue);
        break;
      default:
        break;
    }

    
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('subing');
    setErrorMessage('');

    
    const isAllQuestionsAnswered = [selectedOption1, selectedOption2, selectedOption3, selectedOption4, selectedOption5, selectedOption6, selectedOption7, selectedOption8, selectedOption9, selectedOption10, selectedOption11, selectedOption12, selectedOption13, selectedOption14, selectedOption15, selectedOption16, selectedOption17, selectedOption18, selectedOption19, selectedOption20]
      .every((option) => option !== '');

    if (!isAllQuestionsAnswered) {
      setErrorMessage('Please answer all questions.');
      return;
    }
    navigate('/test1')
  };

  const questions = [
    { number: 1, text: 'Your intelligence is something very basic about you that', options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 2, text: 'No matter how much intelligence you have, you can always change it quite a bit', options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 3, text: 'You can always substantially change how intelligent you are', options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree']  },
    { number: 4, text: 'You are a certain kind of person, and there is not much that can be done to really change that',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 5, text: 'You can always change basic things about the kind of person you are.',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree']},
    { number: 6, text: 'Music talent can be learned by anyone',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 7, text: 'Math is much easier to learn if you are male or maybe come from a culture that values math',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 8, text: 'Only a few people will be truly good at sports – you have to be “born with it.”',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 9, text: 'Only a few people will be truly good at sports – you have to be “born with it.”',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 10, text: 'The harder you work at something, the better you will be at it',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 11, text: 'Trying new things is stressful for me and I avoid it ', options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 12, text: 'No matter what kind of person you are, you can always change substantially',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree']},
    { number: 13, text: 'Some text goes here',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] }, // Corrected text
    { number: 14, text: 'I appreciate when parents, coaches, teachers give me feedback about my performance',  options: [' Strongly Agree','Agree','Strongly Degree', 'Disagree'] },
    { number: 15, text: 'I often get angry when I get feedback about my performance', options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 16, text: 'All human beings without a brain injury or birth defect are capable of the same amount of learning',  options: [' Strongly Agree','Agree','Strongly Degree', 'Disagree'] },
    { number: 17, text: 'You can learn new things, but you can’t really change how intelligent you are',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 18, text: 'You can do things differently, but the important part of who you are can’t really be changed ',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 19, text: 'Human beings are basically good, but sometimes make terrible decisions',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
    { number: 20, text: 'An important reason why I do my schoolwork is that I like to learn new things',  options: ['4. Strongly Agree',' 3.Agree',' 2.Strongly Degree', '1.Disagree'] },
  ];
  return (
    <div className="container mt-5" style={{ backgroundColor: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
      <center style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>
        Answer The Questions
      </center>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <Question key={question.number} {...question} setOption={(option) => handleRadioChange(question.number, option)} />
        ))}
        {errorMessage && (
          <div style={{ margin: '20px auto' }} className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button
  id="submitButton"
  type="submit"
  className="btn btn-primary"
  style={{
    backgroundColor: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: '18px',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer',
  }}
  disabled={[
    selectedOption1,
    selectedOption2,
    selectedOption3,
    selectedOption4,
    selectedOption5,
    selectedOption6,
    selectedOption7,
    selectedOption8,
    selectedOption9,
    selectedOption10,
    selectedOption11,
    selectedOption12,
    selectedOption13,
    selectedOption14,
    selectedOption15,
    selectedOption16,
    selectedOption17,
    selectedOption18,
    selectedOption19,
    selectedOption20,
  ].some((option) => option === '')}
>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;