export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY_TITLE = 'UPDATE_ENTRY_TITLE';
export const UPDATE_ENTRY_HOURS = 'UPDATE_ENTRY_HOURS';
export const UPDATE_ENTRY_RATE = 'UPDATE_ENTRY_HUPDATE_ENTRY_RATEOURS';

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';

export const addEntry = () => {
  return { type: ADD_ENTRY };
};

export const updateEntryTitle = (id, title) => {
  return {
    type: UPDATE_ENTRY_TITLE,
    payload: { id, title },
  };
};

export const updateEntryHours = (id, hours) => {
  return {
    type: UPDATE_ENTRY_HOURS,
    payload: { id, hours },
  };
};

export const updateEntryRate = (id, rate) => {
  return {
    type: UPDATE_ENTRY_RATE,
    payload: { id, rate },
  };
};
