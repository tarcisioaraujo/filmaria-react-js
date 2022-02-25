import { Body, Wrap } from './styles.js';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
 return (
   <Wrap width="100">
     <Routes/>
     <ToastContainer autoClose={3000} />
   </Wrap>
 );
}