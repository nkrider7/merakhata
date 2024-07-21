import React, { useState } from 'react';
import useStore from '@/store';
import { Transaction } from '@/store';
import EditTransaction from '@/components/Custom/EditTransaction';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransactionList: React.FC = () => {
  const transactions = useStore((state) => state.transactions);
  const removeTransaction = useStore((state) => state.removeTransaction);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  return (
    <div>
      <h2>Transactions</h2>
      <Table className='w-[50vw]'>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.title}</TableCell>
              <TableCell className="text-right">{transaction.amount}</TableCell>
              <TableCell>{transaction.currency}</TableCell>
              <TableCell className="text-right">
                <button
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setEditingTransaction(transaction)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => removeTransaction(transaction.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingTransaction && (
        <EditTransaction
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
        />
      )}
    </div>
  );
};

export default TransactionList;
