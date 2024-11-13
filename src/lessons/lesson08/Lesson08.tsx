import React, { useEffect, useState } from 'react'
import MyButton from '../../components/myButton/MyButton';
import Counter from '../../components/counter/Counter';

export default function Lesson08(): JSX.Element {
  console.log('renrer!')

  const [toogle, setToogle] = useState(false);

  const handleToggle = ():void => {
    //!!!!!!!!!!!!!!!!
    setToogle(!toogle);
    // setToogle(!toogle);
    // setToogle(!toogle);
  }

  //
  useEffect(() => {
    console.log('render useEffect')
  }, [])
  
    return (
        <div className="lesson-container">
    <div>Lesson 8</div>
    <p>UseEffect() hook</p>
    <span>State: {`${toogle}`}</span>
    <MyButton func={handleToggle} isDanger={false} text={'change state'}/>
    <p>Мы можем проследить как Counter проходит все 3 этапа жизненного цикла</p>
    {toogle && <Counter/>}
    </div>
  )
}
