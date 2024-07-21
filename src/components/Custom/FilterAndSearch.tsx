// import React, { useState, ChangeEvent } from 'react';
// import useStore from '@/store';

// const FilterAndSearch: React.FC = () => {
//   const transactions = useStore((state) => state.transactions);
//   const [filteredTransactions, setFilteredTransactions] = useState(transactions);
//   const [filters, setFilters] = useState({
//     type: '',
//     currency: '',
//     category: '',
//     search: '',
//   });

//   const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value,
//     });
//     filterTransactions({ ...filters, [name]: value });
//   };

//   const filterTransactions = (filters: typeof filters) => {
//     let filtered = transactions;

//     if (filters.type) {
//       filtered = filtered.filter((transaction) => transaction.category === filters.type);
//     }

//     if (filters.currency) {
//       filtered = filtered.filter((transaction) => transaction.currency === filters.currency);
//     }

//     if (filters.category) {
//       filtered = filtered.filter((transaction) => transaction.category === filters.category);
//     }

//     if (filters.search) {
//       filtered = filtered.filter((transaction) =>
//         transaction.title.toLowerCase().includes(filters.search.toLowerCase())
//       );
//     }

//     setFilteredTransactions(filtered);
//   };

//   return (
//     <div>
//       <h2>Filter and Search</h2>
//       <select name="type" value={filters.type} onChange={handleFilterChange}>
//         <option value="">All</option>
//         <option value="Income">Income</option>
//         <option value="Expense">Expense</option>
//       </select>
//       <select name="currency" value={filters.currency} onChange={handleFilterChange}>
//         <option value="">All</option>
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//       </select>
//       <input type="text" name="search" value={filters.search} onChange={handleFilterChange} placeholder="Search by title" />
//       <div>
//         <h3>Filtered Transactions</h3>
//         {filteredTransactions.map((
