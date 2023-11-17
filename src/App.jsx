import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import ControlledForm from './components/ControledForm';
import UncontrolledForm from './components/UncontrolledForm';

export default function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  )
}
