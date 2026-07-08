const DECKS = [
  {
    id: "alphabet",
    title: "Alphabet",
    icon: "🔤",
    cards: [
      { name: "A", display: "A", type: "text" },
      { name: "B", display: "B", type: "text" },
      { name: "C", display: "C", type: "text" },
      { name: "D", display: "D", type: "text" },
      { name: "E", display: "E", type: "text" },
      { name: "F", display: "F", type: "text" },
      { name: "G", display: "G", type: "text" },
      { name: "H", display: "H", type: "text" },
      { name: "I", display: "I", type: "text" },
      { name: "J", display: "J", type: "text" },
      { name: "K", display: "K", type: "text" },
      { name: "L", display: "L", type: "text" },
      { name: "M", display: "M", type: "text" },
      { name: "N", display: "N", type: "text" },
      { name: "O", display: "O", type: "text" },
      { name: "P", display: "P", type: "text" },
      { name: "Q", display: "Q", type: "text" },
      { name: "R", display: "R", type: "text" },
      { name: "S", display: "S", type: "text" },
      { name: "T", display: "T", type: "text" },
      { name: "U", display: "U", type: "text" },
      { name: "V", display: "V", type: "text" },
      { name: "W", display: "W", type: "text" },
      { name: "X", display: "X", type: "text" },
      { name: "Y", display: "Y", type: "text" },
      { name: "Z", display: "Z", type: "text" }
    ]
  },
  {
    id: "numbers",
    title: "Numbers",
    icon: "🔢",
    cards: [
      { name: "Zero", display: "0", type: "text" },
      { name: "One", display: "1", type: "text" },
      { name: "Two", display: "2", type: "text" },
      { name: "Three", display: "3", type: "text" },
      { name: "Four", display: "4", type: "text" },
      { name: "Five", display: "5", type: "text" },
      { name: "Six", display: "6", type: "text" },
      { name: "Seven", display: "7", type: "text" },
      { name: "Eight", display: "8", type: "text" },
      { name: "Nine", display: "9", type: "text" },
      { name: "Ten", display: "10", type: "text" },
      { name: "Eleven", display: "11", type: "text" },
      { name: "Twelve", display: "12", type: "text" },
      { name: "Thirteen", display: "13", type: "text" },
      { name: "Fourteen", display: "14", type: "text" },
      { name: "Fifteen", display: "15", type: "text" },
      { name: "Sixteen", display: "16", type: "text" },
      { name: "Seventeen", display: "17", type: "text" },
      { name: "Eighteen", display: "18", type: "text" },
      { name: "Nineteen", display: "19", type: "text" },
      { name: "Twenty", display: "20", type: "text" }
    ]
  },
  {
    id: "objects",
    title: "Objects",
    icon: "🧸",
    cards: [
      { name: "Ball", file: "Football Pallo valmiina-cropped.jpg" },
      { name: "Book", file: "Open book nae 02.svg" },
      { name: "Chair", file: "Chair icon.svg" },
      { name: "Clock", file: "Analog Clock.svg" },
      { name: "Umbrella", file: "Umbrella icon.svg" },
      { name: "Toy", file: "Toy blocks.jpg" }
    ]
  },
  {
    id: "colors",
    title: "Colors",
    icon: "🎨",
    cards: [
      { name: "Red", file: "Red pog.svg" },
      { name: "Blue", file: "Blue pog.svg" },
      { name: "Green", file: "Green pog.svg" },
      { name: "Yellow", file: "Yellow pog.svg" },
      { name: "Orange", file: "Orange pog.svg" },
      { name: "Purple", file: "Purple pog.svg" }
    ]
  },
  {
    id: "kitchen",
    title: "Kitchen Items",
    icon: "🍽️",
    cards: [
      { name: "Spoon", file: "Spoon 01 Pengo.jpg" },
      { name: "Fork", file: "Fork - The Noun Project.svg" },
      { name: "Plate", file: "Plate.svg" },
      { name: "Cup", file: "Coffee cup icon.svg" },
      { name: "Pan", file: "Frying pan.svg" },
      { name: "Apple", file: "Red Apple.jpg" }
    ]
  },
  {
    id: "clothes",
    title: "Clothes",
    icon: "👕",
    cards: [
      { name: "Shirt", file: "T-shirt.svg" },
      { name: "Pants", file: "Jeans for men.jpg" },
      { name: "Shoes", file: "Shoes icon.svg" },
      { name: "Hat", file: "Hat icon.svg" },
      { name: "Socks", file: "Socks icon.svg" },
      { name: "Jacket", file: "Jacket icon.svg" }
    ]
  },
  {
    id: "vehicles",
    title: "Vehicles",
    icon: "🚗",
    cards: [
      { name: "Car", file: "Car icon 2.svg" },
      { name: "Bus", file: "Bus-logo.svg" },
      { name: "Train", file: "Train icon.svg" },
      { name: "Airplane", file: "Airplane silhouette.svg" },
      { name: "Boat", file: "Boat icon.svg" },
      { name: "Bicycle", file: "Bicycle icon.svg" }
    ]
  },
  {
    id: "outside",
    title: "Outside Things",
    icon: "🌳",
    cards: [
      { name: "Tree", file: "Simple tree.svg" },
      { name: "Flower", file: "Flower icon.svg" },
      { name: "Sun", file: "Sun symbol.svg" },
      { name: "Cloud", file: "Cloud icon.svg" },
      { name: "Rock", file: "Rock icon.svg" },
      { name: "House", file: "Home icon.svg" }
    ]
  },
  {
    id: "fruits-vegetables",
    title: "Fruits & Vegetables",
    icon: "🍎",
    cards: [
      { name: "Apple", file: "Red Apple.jpg" },
      { name: "Banana", file: "Banana-Single.jpg" },
      { name: "Carrot", file: "Carrot.svg" },
      { name: "Tomato", file: "Tomato je.jpg" },
      { name: "Strawberry", file: "Garden strawberry (Fragaria × ananassa) single.jpg" },
      { name: "Corn", file: "Corncobs.jpg" }
    ]
  },
  {
    id: "animals",
    title: "Animals",
    icon: "🐶",
    cards: [
      { name: "Dog", file: "Golden Retriever standing Tucker.jpg" },
      { name: "Cat", file: "Cat August 2010-4.jpg" },
      { name: "Bird", file: "House Sparrow male.jpg" },
      { name: "Fish", file: "Goldfish3.jpg" },
      { name: "Rabbit", file: "Rabbit in montana.jpg" },
      { name: "Turtle", file: "Florida Red-bellied Turtle KSC00pp0306.jpg" }
    ]
  },
  {
    id: "farm-animals",
    title: "Farm Animals",
    icon: "🐮",
    cards: [
      { name: "Cow", file: "Cow female black white.jpg" },
      { name: "Horse", file: "Nokota Horses cropped.jpg" },
      { name: "Pig", file: "Pig farm animals.jpg" },
      { name: "Chicken", file: "Brown chicken.jpg" },
      { name: "Sheep", file: "Sheep in pasture.jpg" },
      { name: "Duck", file: "Male mallard duck 2.jpg" }
    ]
  }
];
