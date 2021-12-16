import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import React from 'react';
import you from './assets/you.png';
import queensgambit from './assets/queens-gambit.png';
import luther from './assets/luther.png';
import strangerthings from './assets/stranger-things.png';
import peakyblinders from './assets/peaky-blinders.png';
import rednotice from './assets/red-notice.png';
import squidgame from './assets/squid-game.png';

const Card = function () {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const cards = createCard();
  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'transparent' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {cards}
      </Tabs>
    </Box>
  );
};

function createCard() {
  return (
    data.map(
      (element) => (
        <Tab
          label={element.title}
          component={
         () => <img alt={element.title} className="App-card" src={element.img} />
      } />
      ),
    )
  );
}

const data = [
  {
    img: rednotice,
    title: 'Red Notice',
    match: '98%',
  },
  {
    img: you,
    title: 'You',
    match: '95%',
  },
  {
    img: queensgambit,
    title: 'Queens Gambit',
    match: '95%',
  },
  {
    img: strangerthings,
    title: 'Stranger Things',
    match: '95%',
  },
  {
    img: peakyblinders,
    title: 'Peaky Blinders',
    match: '95%',
  },
  {
    img: luther,
    title: 'Luther',
    match: '95%',
  },
  {
    img: squidgame,
    title: 'Squid Game',
    match: '95%',
  },
];

export default Card;
