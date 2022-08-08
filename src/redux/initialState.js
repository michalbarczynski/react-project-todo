const initialState = {
    columns: [
      {
        id: '1',
        listId: '1',
        title: 'Books',
        icon: 'book',
      },
      {
        id: '2',
        listId: '1',
        title: 'Movies',
        icon: 'film',
      },
      {
        id: '3',
        listId: '1',
        title: 'Games',
        icon: 'gamepad',
      },
      {
        id: '4',
        listId: '2',
        title: 'Whisky',
        icon: 'whiskey-glass-ice',
      },
      {
        id: '5',
        listId: '2',
        title: 'Tequilla',
        icon: 'martini-glass-citrus',
      },
      {      
        id: '6',
        listId: '2',
        title: 'Rum',
        icon: 'wine-bottle',
      },
    ],
  
    cards: [
      { id: '1', columnId: '1', title: 'This is Going to Hurt', isFavourite: false },
      { id: '2', columnId: '1', title: 'Interpreter of Maladies', isFavourite: false },
      { id: '3', columnId: '2', title: 'Harry Potter', isFavourite: false },
      { id: '4', columnId: '2', title: 'Star Wars', isFavourite: false },
      { id: '5', columnId: '3', title: 'The Witcher', isFavourite: false },
      { id: '6', columnId: '3', title: 'Skyrim', isFavourite: false },
      { id: '7', columnId: '4', title: 'Monkey Shoulder', isFavourite: false },
      { id: '8', columnId: '4', title: 'Glenlivet', isFavourite: false },
      { id: '9', columnId: '5', title: 'Olmeca', isFavourite: false },
      { id: '10', columnId: '6', title: 'Bacardi Spiced', isFavourite: false }
    ],

    searchString: {
      searchString: ''
    },

    lists: [
      {
        id: '1',
        title: 'Things to do',
        description: 'Interesting things I want to check out'
      },
     {
        id: '2',
        title: 'Drinks',
        description: 'Types of drinks to test'
     }
   ],
  
  };  
  
  export default initialState;