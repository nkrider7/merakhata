import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import useStore from '@/store';
import { Transaction} from '@/store';

interface EditTransactionProps {
  transaction: Transaction;
  onClose: () => void;
}

const EditTransaction: React.FC<EditTransactionProps> = ({ transaction, onClose }) => {
  const editTransaction = useStore((state) => state.editTransaction);
  const [updatedTransaction, setUpdatedTransaction] = useState(transaction);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedTransaction({
      ...updatedTransaction,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    editTransaction(updatedTransaction);
    onClose();
  };

  useEffect(() => {
    setUpdatedTransaction(transaction);
  }, [transaction]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={updatedTransaction.date} onChange={handleChange} required />
      <input type="number" name="amount" value={updatedTransaction.amount} onChange={handleChange} required />
      <select name="category" value={updatedTransaction.category} onChange={handleChange}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <select name="currency" value={updatedTransaction.currency} onChange={handleChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <input type="text" name="title" value={updatedTransaction.title} onChange={handleChange} required />
      <input type="text" name="note" value={updatedTransaction.note} onChange={handleChange} />
      <button type="submit">Update Transaction</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTransaction;
