import React from 'react';

function App() {
  const handleAgeCheck = () => {
    const age = prompt('Сколько вам лет?');
    if (age !== null) {
      if (parseInt(age) >= 18) {
        alert('Можно войти');
      } else {
        alert('Нельзя войти');
      }
    }
  };

  const handleDoubleClick = (event) => {
    event.target.style.transform = 'rotate(180deg)';
  };

  const handleInputChange = (event) => {
    console.log(parseInt(event.target.value) * 10);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title: 'Hello', body: 'world' });
  };

  const handleCancel = () => {
    console.log('Отменено');
  };

  return (
    <div>
      <button onClick={handleAgeCheck}>Сколько тебе лет</button>
      <div onDoubleClick={handleDoubleClick}>Двойной клик для поворота</div>
      <input
        type="number"
        onBlur={handleInputChange}
        placeholder="Введите число"
      />
      <form onSubmit={handleSubmit}>
        <button type="submit">Send</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default App;
