import PaintingList from './components/Painting/PaintingList';
import paintings from './components/Painting/paintings.json';
import Section from './components/Painting/Section';

import ColorPicker from 'components/ColorPicker/ColorPicker';
import colorPickerOptions from './components/ColorPicker/colorPickerOptions.json';

import Alert from 'components/Alert/Alert';

import Container from 'components/Container/Container';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div className="App">
      <Container>
        <Section title="Топ недели">
          <PaintingList items={paintings} />
        </Section>
        <ColorPicker options={colorPickerOptions} />
        <Alert text="Ошибка!" />
        <Alert text="Ошибка!" type="success" />
        <Alert text="Ошибка!" type="warning" />
        <Alert text="Ошибка!" type="error" />
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />

        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}
