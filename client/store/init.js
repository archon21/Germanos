const defaultState = {
  phone: '860.207.2018',
  company: 'Germanos Bar & Grill',
  email: '',
  address: ['493 Westchester Rd', 'Colchester, CT 06415-2434'],
  hours: {
    S: '11 AM - 1 AM',
    M: '11 AM - 1 AM',
    T: '11 AM - 1 AM',
    W: '11 AM - 1 AM',
    TH: '11 AM - 1 AM',
    F: '11 AM - 2 AM',
    SA: '11 AM - 2 AM'
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
