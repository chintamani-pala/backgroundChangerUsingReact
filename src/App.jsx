import { useState } from 'react';

function App() {
  const [BgColor, setBgColor] = useState('bg-gray-800 duration-100')

  return (
    <>
       <div className={`${BgColor} w-screen h-screen  flex items-center justify-center flex-col`}>
         <div className="flex">
           <button 
           className="bg-red-500 p-4 m-2 rounded"
           onClick = {() => setBgColor('bg-red-500 duration-100')}
           >Red</button>
           <button 
           className="bg-blue-500 p-4 m-2 rounded"
           onClick={() => setBgColor('bg-blue-500 duration-100')}
           >Blue</button>
           <button 
           className="bg-yellow-500 p-4 m-2 rounded"
           onClick={() => setBgColor('bg-yellow-500 duration-100')}
           >Yellow</button>
           <button 
           className="bg-green-500 p-4 m-2 rounded"
           onClick={() => setBgColor('bg-green-500 duration-100')}
           >Green</button>
         </div>
         <div className="text-center text-white mt-4">Created by Chintamani Pala</div>
       </div>
    </>
  )
}

export default App
