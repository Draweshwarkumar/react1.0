import { useCallback, useState } from 'react';
import './App.css';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '@#$%^&*-_+=[]{}~\'`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); // Corrected logic
      pass += str.charAt(char); // Append character to pass
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 my-8 text-orange-500 bg-gray-700"
      >
        test
      </div>
    </>
  );
}

export default App;
