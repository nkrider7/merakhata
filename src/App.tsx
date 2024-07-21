import './App.css'
import AddTransaction from './components/Custom/AddTransaction'
import Navbar from './components/Custom/Navbar'
import TransactionList from './components/Custom/TransactionList'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

function App() {

  return (
    <>
    <Navbar />
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <AddTransaction />
    </DialogHeader>
  </DialogContent>
</Dialog>
      <TransactionList />
      <Tab />
    </>
  )
}

export default App


const Tab = () => {
  return
  <>
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        acount
      </TabsContent>
      <TabsContent value="password">
       password
      </TabsContent>
    </Tabs>
  </>
}