import React, { useState, useRef, useEffect } from "react";
import "./StateAnim.css";
import { useTransition, animated } from "react-spring";
import { v4 as uuidv4 } from "uuid";

export default function StateAnim() {
  // firstDisplay pour gérer le dernier élément animé à l'ajour ou suppression
  const [firstDisplay, setFirstDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstDisplay(false);
    }, 1000);
  }, []);

  const [inputData, setInputData] = useState([
    {
      id: uuidv4(),
      txt: "Chopin",
    },
    {
      id: uuidv4(),
      txt: "Mozart",
    },
    {
      id: uuidv4(),
      txt: "Bach",
    },
  ]);

  const inputRef = useRef();

  const handleData = (e) => {
    e.preventDefault();

    const newObj = {
      id: uuidv4(),
      txt: inputRef.current.value,
    };

    setInputData([...inputData, newObj]);

    inputRef.current.value = "";
  };

  // en 1er instancier l'input avec inputData pour avoir accès à tous nos items
  const listTransitions = useTransition(inputData, {
    // on instancie les animations :
    from: { opacity: 0, transform: "translateY(10px" },
    enter: { opacity: 1, transform: "translateY(0px" },
    // retour un tableau avec les différents id :
    keys: inputData.map((item) => item.id),
  });

  // useEffect(() =>{
  //   console.log(inputRef);
  // }, [])

  return (
    <form onSubmit={handleData}>
      <label htmlFor="piano">Renseigner vos pianistes favoris</label>
      <input ref={inputRef} type="text" id="piano" />

      {firstDisplay ? (
        // actualisation de la liste existante sans animations
        <ul>
          {inputData.map((item) => (
            <li key={item.id}>{item.txt}</li>
          ))}
        </ul>
      ) : (
        // sinon animer le dernier élément ajouté
        <ul>
          {listTransitions((styles, item) => {
            return <animated.li style={styles}>{item.txt}</animated.li>;
          })}
        </ul>
      )}
    </form>
  );
}


