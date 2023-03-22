import { React, useEffect } from 'react';
import ThorHeader from '../ThorHeader';
import ThorFooter from '../ThorFooter';
import style from "../../static/css/style.css"
import motor from "../../static/scripts/motor.js"

const NotFoundScreen = () => {
  useEffect(() => {
    document.title = '404 | Not found';
    document.body.setAttribute("class", "background-general");
  }, []);
  return (
    <div>
      <div className="errorHeader">
        <ThorHeader />
      </div>
      <div className="errorContent">
        <article id="" className="container ">
          <div className="row align-items-center align-content-end">
            <div className="col-12">
              <p id="errorText" className="ps-md-5 col-12 text-center">Error 404 - la página que buscas no existe</p>
            </div>
          </div>
        </article>
      </div>
      <div className="errorFooter">
        <ThorFooter />
      </div>
    </div>
  );
};

export default NotFoundScreen;
