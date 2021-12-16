import './App.css';
import React, {useState} from 'react';
import ListItem from './components/ListItem';

function App() {

  const [list, setList] = useState([
    {
      name: 'bob',
      percentage: 30,
      id: 1
    },
    {
      name: 'dan',
      percentage: 70,
      id: 2
    }
  ]);

  const onUpdatePercentage = (e, id) => {
    setList((prevState) => {
      const state = [...prevState];

     const x = state.find((item) => item.id === id );

     x.percentage = parseInt(e.target.value);

      return state;
    })
  }


  return (
    <div className="App">
      {list?.map(({name, percentage, id}) => {
        return (
          <ListItem key={`${name}-${id}`} name={name} percentage={percentage} onUpdatePercentage={onUpdatePercentage} id={id}/>
        )
      })}
    </div>
  );
}

export default App;

// function App() {

//   const [list, setList] = useState([
//     {
//       name: 'bob',
//       percentage: 30
//     },
//     {
//       name: 'dan',
//       percentage: 70
//     }
//   ]);

//   const onUpdatePercentage = (e, id) => {
//     setList((prevState) => {
//       const state = [...prevState];

//       state[id].percentage = parseInt(e.target.value);

//       return state;
//     })
//   }


//   return (
//     <div className="App">
//       {list?.map(({name, percentage}, idx) => {
//         return (
//           <ListItem key={`${name}-${idx}`} name={name} percentage={percentage} onUpdatePercentage={onUpdatePercentage} id={idx}/>
//         )
//       })}
//     </div>
//   );
// }

// export default App;
