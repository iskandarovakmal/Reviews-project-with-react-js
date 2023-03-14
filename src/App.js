import React from 'react';
import Reviews from './components/Reviews';
import data from './data';
import './App.css';
//============================
//============================
function App() {
  const  [people,setPeople] = React.useState(data);
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Reviews people = {people}/>
      </section>
    </main>
  );
}

export default App;
//react icons it is for you to easy and clear write code , it is useful to leran react-javascript.
