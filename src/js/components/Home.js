import {select, templates} from './../settings.js';
import {app} from '../app.js';


class Home {
  constructor(element) {

    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.navigate();
  }

  render(element){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    element.innerHTML = generatedHTML;

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelector(select.nav.links);
    thisHome.dom.orderOnline = document.querySelector(select.home.orderButton);
    thisHome.dom.bookTable = document.querySelector(select.home.bookButton);
  }

  initWidgets() {
    const thisHome = this;

    thisHome.element = document.querySelector(select.widgets.carousel);
    // eslint-disable-next-line no-undef
    thisHome.flkty = new Flickity (thisHome.element,{
      cellAlign: 'left',
      contain: true,
      autoPlay: true, 
    });
  }

  navigate(){
    const thisHome = this;

    thisHome.dom.bookTable.addEventListener('click', function(){
      app.activatePage('booking');
      window.location.hash = '/#booking';
    });

    thisHome.dom.orderOnline.addEventListener('click', function(){
      app.activatePage('order');
      window.location.hasg = '/#order';
    });
  }
}

export default Home;