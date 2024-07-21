import create from 'zustand';

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: 'Income' | 'Expense';
  currency: string;
  title: string;
  note?: string;
}

interface StoreState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  editTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: number) => void;
}

// Function to load initial state from local storage
const loadState = (): StoreState => {
  const state = localStorage.getItem('transactions-storage');
  return state ? JSON.parse(state) : { transactions: [] };
};

// Function to save state to local storage
const saveState = (state: StoreState) => {
  localStorage.setItem('transactions-storage', JSON.stringify(state));
};

const useStore = create<StoreState>((set) => {
  const initialState = loadState();

  // Save state to local storage whenever it changes
  set(() => initialState);

  return {
    ...initialState,
    addTransaction: (transaction: Transaction) =>
      set((state) => {
        const newState = { transactions: [...state.transactions, transaction] };
        saveState(newState);
        return newState;
      }),
    editTransaction: (updatedTransaction: Transaction) =>
      set((state) => {
        const newState = {
          transactions: state.transactions.map((transaction) =>
            transaction.id === updatedTransaction.id ? updatedTransaction : transaction
          ),
        };
        saveState(newState);
        return newState;
      }),
    removeTransaction: (id: number) =>
      set((state) => {
        const newState = {
          transactions: state.transactions.filter((transaction) => transaction.id !== id),
        };
        saveState(newState);
        return newState;
      }),
  };
});

export default useStore;
