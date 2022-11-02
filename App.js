//import Header from './components/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';




export default function App() {


  return (
    
    <div className="page-container">
        <Header />
        <div className="content">
            <Content />
        </div>
        <div className="footer">
      <Footer />
    </div>
    </div >

  );
}