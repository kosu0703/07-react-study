import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Exam01 from './step09_list/Exam01';
import Exam02 from './step09_list/Exam02';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';
import SelectForm2 from './step10_form/SelectForm2';
import MultiSelectForm from './step10_form/MultiSelectForm';
import CheckBoxForm from './step10_form/CheckBoxForm';
import RadioButtonForm from './step10_form/RadioButtonForm';
import SignUpForm from './step10_form/SignUpForm';
import Calc from './step11_ShareState/Calc';
import Calc2 from './step11_ShareState/Calc2';
import Calc3 from './step11_ShareState/Calc3';
import Calc4 from './step11_ShareState/Calc4';

const root = ReactDOM.createRoot(document.getElementById('root'));

//  1초마다 랜더링되면서 새로운 엘리먼트가 생성됨
/*
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
  }, 1000);
*/

/* 
root.render(
  <React.StrictMode>
    <Customer id="koyechan@naver.com" name="ko" orders={['a001', 'b002', 'c003']} />
  </React.StrictMode>
);
 */

/* 
root.render(
  <React.StrictMode>
    <BookList books={Books} />
  </React.StrictMode>
);
 */

/* 
root.render(
    //  <Ex01 isLoggedIn=""/>      =>  false 
    //  <Ex01 isLoggedIn="내용"/>   => true 
    <Ex02 isLoggedIn={true}/>
);
 */

/* 
root.render(
    <Ex04 msg={[1,2,3]} />
);
 */ 

root.render(
  <CheckBoxForm />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

