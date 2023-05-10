import React, {useState} from 'react';
import logo from './logo.svg';
import InputForm from './components/input-form';
import InputTableItem from './types/InputTableItem';
import InputTable from './components/input-table';
import ButtonStyle from './tailwind-styles/button-style';
import OutPutTable from './components/output-table';

function App() {
  const [inputData, setInputData] = useState<InputTableItem[]>([]);

  return (
    <div className="App p-4 flex flex-col gap-8">
      <div className='flex justify-center'>
        <h1 className='text-3xl'>test-case automator 3000</h1>
      </div>
      <div className='flex justify-center'>
        <InputForm inputState={[inputData, setInputData]}/>
      </div>
      <div className='flex justify-center'>
        <InputTable values={inputData}/>
      </div>
      <div className='flex justify-center'>
        <button type='button' className={ButtonStyle}>Сгенерувати тест-кейси</button>
      </div>
      {inputData.length > 0 && <div>
        <div className='text-3xl flex justify-center'>Позитивні тест-кейси:</div>
        <OutPutTable data={inputData} isOkValues/>
        <div className='text-3xl flex justify-center'>Негативні тест-кейси:</div>
        <OutPutTable data={inputData} isOkValues={false}/>
      </div>}
    </div>
  );
}

export default App;
