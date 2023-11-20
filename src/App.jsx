import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import ControlledForm from './components/Forms/ControledForm';
import UncontrolledForm from './components/Forms/UncontrolledForm';
import ContactList from './components/ContactList';


export default function App() {

  return (
    <div>
      <ContactList />
    </div>
  )
}