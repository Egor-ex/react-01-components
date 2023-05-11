import PaintingList from './components/PaintingList';
import paintings from './paintings.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>

      {/* {paintings.map(painting => (
        <Painting
          key={painting.id}
          imgUrl={painting.url}
          title={painting.title}
          author={painting.author.tag}
          profileUrl={painting.author.url}
          price={painting.price}
          quantity={painting.quantity}
        />
      ))} */}
    </div>
  );
}

// значение id, key(ключя) обязательно для React(отслеживание элементов колекции), на самый верхний элемент колекции(внутри map())

//=================================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
