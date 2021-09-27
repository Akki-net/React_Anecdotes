import React, { useState } from 'react';

const MostVoted = ({ vote,anecdotes }) => {
  let max = -Infinity;
  for(let i=0;i<vote.length;i++){
    if(max<vote[i]){
      max = vote[i]
    }
  }

  let index = vote.findIndex((value) => {
    if(max == value)
    return value;
  })

  if(max!==0){
    return(
      <div>
        <h1>Anecdotes with most votes</h1>
        <p> {anecdotes[index]} </p>
      </div>
    )
  }
  else{
   return(
     <div></div>
   )
  }
 
};

const Display = ({ anecdotes,selected,vote }) => {
return(
  <div>
    <h1 className="font-weight-bold text-warning">Anecdotes</h1>
      <p className="bg-light text-info p-1">{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      
  </div>
)
};

const Button = ({ voteHandler, changeHandler }) => {
return(
  <div>
          <button className="btn btn-lg btn-success" onClick={voteHandler}>Vote</button>
      <button className="btn btn-lg float-right btn-success" onClick={changeHandler}>Next</button>
  </div>
)
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
   
  const [ selected, setSelected ] = useState(0);
  const [ vote, setVote ] = useState(new Array(7).fill(0));

  const changeHandler = () => {
    let rand = Math.floor(Math.random() * 7);
    setSelected(rand);
  };

  const voteHandler = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy)
  };

  return (
    <div className="container rounded bg-info mt-3 p-3">
      <Display anecdotes={anecdotes} selected={selected} vote={vote} />
      <Button voteHandler={voteHandler} changeHandler={changeHandler} />
      <MostVoted vote={vote} anecdotes={anecdotes} />
    </div>
  )
}

export default App;
