import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import reportWebVitals from './reportWebVitals';

//свойства для компонентов ArticleText и ActionButton в main
const propsMain = {
  ArticleText : {
    h3 : {
      InnetText : 'We help you find the best solution'
    } ,
    p : {
      InnetText : 'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.' ,
      marginTop : '40px'
    }
  } ,

  ActionButton : {
    InnerText : 'Start free trial' ,
    marginTop : '56px'
  }
}

//свойства для компонентов ArticleText и ActionButton в footer
const propsFooter = {
  ArticleText : {
    h3 : {
      InnetText : 'Ready to get started?',
      maxWidth : '920px'
    } ,
    p : {
      InnetText : <>'Take control of your Business Data.'<br/>'Try saas to make your business better'</> ,
      maxWidth : '540px' ,
      marginTop : '32px'
    }
  } ,

  ActionButton : {
    InnerText : 'Get Started' ,
    marginTop : '56px'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main {...propsMain} />
    <Footer {...propsFooter} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
