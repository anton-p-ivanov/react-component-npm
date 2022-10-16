import { ChangeEvent, useState } from 'react';
import './styles.scss'

const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  }

  return (
    <>
      <input type="text" name="email" value={value} onChange={onChangeHandler} />
      <div>You have typed: {value}</div>
    </>
  )
}

export default App
