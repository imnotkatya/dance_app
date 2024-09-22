import React, { useState, useEffect } from 'react';
import './Styles.css';

const DateComponent = () => {
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [isEditing, setEditing] = useState(!localStorage.getItem("date"));

  const PassDate = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    localStorage.setItem("date", newDate);
    setEditing(false);
  };

  const ChangeData = () => {
    setEditing(true);
  };

  return (
    <h2 id="day_is">Week of:
      {isEditing ? (
        <input id="date" autoFocus={true} onBlur={PassDate} defaultValue={date} />
      ) : (
        <p onClick={ChangeData}>{date || "No date entered"}</p>
      )}
    </h2>
  );
};

const TopPrior = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : ["", "", ""]; // Default to 3 empty strings
  });

  const SetNote = (e) => {
    const index = parseInt(e.target.id);
    const updatedNotes = [...notes];
    updatedNotes[index] = e.target.value;
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="prio">
      <h1>Top Priorities</h1>
      <div className="top_prior">
        {notes.map((note, index) => (
          <div className="priority" key={index}>
            <div className="before_line">
              <h6>priority</h6>
              <h5 className="title_prior">{index + 1}</h5>
              <textarea
                id={index.toString()}
                value={note}
                onChange={SetNote}
                rows="5"
                cols="30"
                className="text"
                placeholder="Type here"
              />
            </div>
            {index < notes.length - 1 && <hr className="vertical-line-hr" />}
          </div>
        ))}
      </div>
    </div>
  );
};
const ShoppingList = () => {
  const [FieldAmount, SetFA] = useState(() => {
   
      const savedFields = localStorage.getItem("FieldAmount");
      return savedFields ? JSON.parse(savedFields) : [""]; // Default to one empty string
  

      
  });
  const [savedShopListInfo,setsavedShopListInfo]=useState(()=>{
   const savedinfo= localStorage.getItem("ShopInfo");
   return savedinfo? JSON.parse(savedinfo) : [""]; 
  }
)
const [savedCheckBox, setsavedCheckbox] = useState(() => {
  const savedCheck = localStorage.getItem("updatedCheckbox");
  return savedCheck ? JSON.parse(savedCheck) : [""]; 
});

 
  const SetShopInfo=(e,index)=>
    {const updatedinfo =[...savedShopListInfo];
      updatedinfo[index]=e.target.value;
      setsavedShopListInfo(updatedinfo);
      localStorage.setItem("ShopInfo", JSON.stringify(updatedinfo));
    }
    const SetChackBox=(e,index)=>
      {const updatedCheckbox =[...savedCheckBox];
        updatedCheckbox[index]=e.target.checked;
        setsavedCheckbox(updatedCheckbox);
        localStorage.setItem("updatedCheckbox", JSON.stringify(updatedCheckbox));
      }
  const AddField = () => {
    const updatedFields = [...FieldAmount, ""]; // Add a new empty field
    SetFA(updatedFields);
    localStorage.setItem("FieldAmount", JSON.stringify(updatedFields));
  };
const ClearFields=()=>
{
  SetFA([""]);
    setsavedShopListInfo([""]);
    setsavedCheckbox([false]);
    localStorage.setItem("FieldAmount", JSON.stringify([""]));
    localStorage.setItem("ShopInfo", JSON.stringify([""]));
    localStorage.setItem("updatedCheckbox", JSON.stringify([false]));
}
  return (
    <div class="trio">
    <div className="shopping_list">
      <h1>Shopping list</h1>

      <button onClick={AddField} id="shop">Add</button>
      <button onClick={ClearFields} id="shop">Clear</button>
      {FieldAmount.map((field, index) => (
    <p className="ingridients" key={index}>
    <input 
    type="checkbox" 
    name="done" 
    id={`shopping_busk_${index}`}
    onChange={(e) => SetChackBox(e, index)} // Передаем индекс
    checked={savedCheckBox[index]} />
    <input 
      onChange={(e) => SetShopInfo(e, index)} // Передаем индекс
      value={savedShopListInfo[index]} // Значение конкретного элемента массива
      id={`food_input_${index}`} 
      placeholder="Type here" 
    />
  </p>
      ))}
    </div>
    </div>
  );
};

const Habbits = () => {
  const [FieldAmountHabbits, SetFAH] = useState(() => {
    const savedFieldsh = localStorage.getItem("FieldAmountHabbits");
    return savedFieldsh ? JSON.parse(savedFieldsh) : [""]; // Default to one empty string
  });

  const [Habits, setHabits] = useState(() => {
    const savedHabit = localStorage.getItem("Habits");
    return savedHabit ? JSON.parse(savedHabit) : [""];
  });

  const [check, setCheck] = useState(() => {
    const savedCheck = localStorage.getItem("check");
    return savedCheck ? JSON.parse(savedCheck) : []; // Инициализируем пустым массивом
  });

  const AddField = () => {
    const updatedFieldsH = [...FieldAmountHabbits, ""]; // Add a new empty field
    SetFAH(updatedFieldsH);
    setCheck([...check, Array(7).fill(false)]); // Добавляем новый массив для чекбоксов
    localStorage.setItem("FieldAmountHabbits", JSON.stringify(updatedFieldsH));
    localStorage.setItem("check", JSON.stringify([...check, Array(7).fill(false)]));
  };

  const ClearFields = () => {
    SetFAH([""]);
    setHabits([""]);
    setCheck([Array(7).fill(false)]); // Сбрасываем в массив с одним пустым массивом
    localStorage.setItem("Habits", JSON.stringify([""]));
    localStorage.setItem("FieldAmountHabbits", JSON.stringify([""]));
    localStorage.setItem("check", JSON.stringify([Array(7).fill(false)]));
  };

  const AddHabbitTracker = (e, index) => {
    const updatehabbit = [...Habits];
    updatehabbit[index] = e.target.value;
    setHabits(updatehabbit);
    localStorage.setItem("Habits", JSON.stringify(updatehabbit));
  };

  const HabbitCheck = (e, index, dayIndex) => {
    const updatedChecks = [...check];
    if (!Array.isArray(updatedChecks[index])) {
      updatedChecks[index] = Array(7).fill(false); // Инициализируем, если нет
    }
    updatedChecks[index][dayIndex] = e.target.checked; // Устанавливаем значение для соответствующего дня
    setCheck(updatedChecks);
    localStorage.setItem("check", JSON.stringify(updatedChecks));
  };

  return (
    <div className="hab_plus_note">
      <div className="habbit_tracker">
        <div className="habit_var">
          <h1 className="label">Habit Tracker</h1>
          <div className="week_days">
            <h1 id="en">M</h1>
            <h1 id="en">T</h1>
            <h1 id="en">W</h1>
            <h1 id="en">T</h1>
            <h1 id="en">F</h1>
            <h1 id="en">S</h1>
            <h1 id="en">S</h1>
          </div>
        </div>
        <div className='add_clear'>
        <button onClick={AddField} id="shop">Add</button>
        <button onClick={ClearFields} id="shop">Clear</button>
        </div>
        {FieldAmountHabbits.map((field, index) => (
          <div className="habit_var" key={index}>
            <h1 className="label">
              <input
                onChange={(e) => AddHabbitTracker(e, index)}
                value={Habits[index]}
                placeholder="Type here"
                id="ur_hobby"
              />
            </h1>
            <div className="week_days">
              {Array.from({ length: 7 }, (_, dayIndex) => (
                <h1 key={dayIndex} id="en">
                  <input
                    type="checkbox"
                    onChange={(e) => HabbitCheck(e, index, dayIndex)} // Передаем индекс дня
                    checked={check[index] ? check[index][dayIndex] : false} // Проверяем значение
                  />
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const Notes=()=>
{

const[NoteLast,SetNoteLast]=useState(()=>
{
const saved=localStorage.getItem("NoteLast");
return saved?localStorage.getItem("NoteLast"):("")}

)
const AddNoteLast=(e)=>
{
  const last_notes=e.target.value;
  SetNoteLast(last_notes);
  localStorage.setItem("NoteLast",last_notes)
}

  return(
    <div class="notes_block">
    <h1 id="notes_title">Notes</h1>
    <textarea rows="5" cols="30" class="note" placeholder="Type here"
    onChange={AddNoteLast} 
    value={NoteLast}></textarea>
   </div>
  );

}

const App = () => (
  <div>
    <DateComponent />
    <TopPrior />
    <div class="trio">
    <ShoppingList />
    <div class="hab_plus_note">
    <Habbits/>
    <Notes/>
    </div>
    </div>
  </div>
);

export default App;
