interface bankProps {
  type: 'deposit' | 'withdraw';
  value: number;
}

function bankReducer(state: number, action: bankProps) {
  let newState = state;

  switch (action.type) {
    case 'deposit':
      newState = state + action.value;
      break;
    case 'withdraw':
      newState = state - action.value;
      break;
  }
  return newState;
}

export default bankReducer;
