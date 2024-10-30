const dataStructure = {
  firstGetUp: {
    text: "You are exhausted, do you want to go back to sleep or get up?",
    choices: {
      GoBackToSleep: {
        text: "Go back to sleep",
        next: "goBackToSleep",
      },
      GetUp: {
        text: "Get up",
        next: "getUp",
      },
    },
  },
  goBackToSleep: {
    text: "You went back to sleep...",
    choices: {},
  },
  getUp: {
    text: [
      "You got up and you are going to the kitchen.",
      "You are in the kitchen, do you want to eat something?",
    ],
    choices: {
      Yes: {
        text: "Yes",
        next: "eatSomething",
      },
      No: {
        text: "No",
        next: "dontEatSomething",
      },
    },
  },
};
