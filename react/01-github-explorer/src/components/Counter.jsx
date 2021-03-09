import { useState } from 'react';

// Imutabilidade = Copiar os valores que já existe e sobre escrever os valores existentes junto com um valor novo

export function Counter() {
  const [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(counter + 1)
  }
  
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
    
  )
}