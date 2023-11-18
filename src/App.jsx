import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import ControlledForm from './components/Forms/ControledForm';
import UncontrolledForm from './components/Forms/UncontrolledForm';

export default function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
    </>
  )
}
