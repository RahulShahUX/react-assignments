import './App.css';
import UseStateHook from './Components/UseStateHook/UseStateHook';
import UseEffectHook from './Components/UseEffectHook/UseEffectHook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import { Container } from 'react-bootstrap';
import UseContextHook from './Components/UseContextHook/UseContextHook';
import UseRefHook from './Components/UseRefHook/UseRefHook';
import UseReducerHook from './Components/UseReducerHook/UseReducerHook';
import UseMemoHook from './Components/UseMemoHook/UseMemoHook';
import UseCallbackHook from './Components/UseCallbackHook/UseCallbackHook';
import CustomHook from './Components/CustomHook/CustomHook';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid className='py-3'>
        <Routes>
          <Route element={<UseStateHook />} path='/' />
          <Route element={<UseStateHook />} path='/usestate' />
          <Route element={<UseEffectHook />} path='/useeffect' />
          <Route element={<UseContextHook />} path='/usecontext' />
          <Route element={<UseRefHook />} path='/useref' />
          <Route element={<UseReducerHook />} path='/usereducer' />
          <Route element={<UseMemoHook/>} path='/usememo' />
          <Route element={<UseCallbackHook />} path='/usecallback' />
          <Route element={<CustomHook />} path='/customhook' />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
