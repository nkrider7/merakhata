import React, { useState, ChangeEvent, FormEvent } from 'react';
import useStore from '@/store';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AddTransaction: React.FC = () => {
  const addTransaction = useStore((state) => state.addTransaction);
  const [transaction, setTransaction] = useState({
    date: '',
    amount: 0,
    category: 'Expense' as 'Income' | 'Expense',
    currency: 'USD',
    title: '',
    note: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.values(transaction).some((value) => value === '')) {
      alert('All fields are required!');
      return;
    }
    addTransaction({ ...transaction, id: Date.now() });
    setTransaction({
      date: '',
      amount: 0,
      category: 'Expense',
      currency: 'USD',
      title: '',
      note: '',
    });
  };

  return (
    <Tabs defaultValue="expense" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="expense">Expense</TabsTrigger>
        <TabsTrigger value="income">Income</TabsTrigger>
      </TabsList>
      <TabsContent value="expense">
        <form onSubmit={handleSubmit}>
          <div className='flex gap-x-2'>
            <Label>
              Date:
              <Input type="date" name="date" value={transaction.date} onChange={handleChange} required />
            </Label>
            <Label className='flex gap-x-2 items-center'>
              Amount:
              <Input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
              <select name="currency" value={transaction.currency} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </Label>
          </div>
          <div className='flex flex-col gap-y-2 my-2'>
            <Label className='flex flex-col gap-2'>
              Title:
              <Input type="text" name="title" value={transaction.title} onChange={handleChange} required />
            </Label>
            <Label className='flex flex-col gap-2'>
              Note:
              <Input type="text" name="note" value={transaction.note} onChange={handleChange} />
            </Label>
          </div>
          <Button type="submit" onClick={() => setTransaction({ ...transaction, category: 'Expense' })}>Add Expense</Button>
        </form>
      </TabsContent>
      <TabsContent value="income">
        <form onSubmit={handleSubmit}>
          <div className='flex gap-x-2'>
            <Label>
              Date:
              <Input type="date" name="date" value={transaction.date} onChange={handleChange} required />
            </Label>
            <Label className='flex gap-x-2 items-center'>
              Amount:
              <Input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
              <select name="currency" value={transaction.currency} onChange={handleChange}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </Label>
          </div>
          <div className='flex flex-col gap-y-2 my-2'>
            <Label className='flex flex-col gap-2'>
              Title:
              <Input type="text" name="title" value={transaction.title} onChange={handleChange} required />
            </Label>
            <Label className='flex flex-col gap-2'>
              Note:
              <Input type="text" name="note" value={transaction.note} onChange={handleChange} />
            </Label>
          </div>
          <Button type="submit" onClick={() => setTransaction({ ...transaction, category: 'Income' })}>Add Income</Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default AddTransaction;
