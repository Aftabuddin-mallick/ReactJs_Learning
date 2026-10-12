import { useState , useCallback, useEffect , useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useref Hook

  const passwordRef = useRef(null);



  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+?><~?/`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor (Math.random() * str.length + 1)
      pass += str.charAt(char);
      
    }


    setPassword(pass);


  }, [length, numberAllowed, charAllowed, setPassword])
 
  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-6 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-2 py-3'>Password Generator</h1>
      <div className="flex items-center gap-2 shadow rounded-lg overflow-hidden md-4">
        <input
          type="text" 
          value={password}
          className='bg-white text-orange-500 placeholder:text-gray-400 broder broder-gray-300 focus:outline-none w-full py-2 px-4 my-5 rounded-xl'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg h-fit cursor-pointer hover:bg-blue-900 hover:shadow-lg">
            Copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={ (e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={ (e) => {
            setNumberAllowed( (prev) => !prev );
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput' 
          onChange={ () => {
            setCharAllowed( prev => !prev);
          }}/>
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
