import React, { useState } from 'react';
import "./portpolio.css";
import Menu from './Menu';

const Portpolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section___title">Recent works</h2>

      <div className="work___filters">
        <span className="work___items" onClick={() => setItems(Menu)}>Everything</span>
       
        <span className="work___items" onClick={() => filterItem
          ("React & Node js")}>React & Node js</span>
        <span className="work___items" onClick={() => filterItem
          ("React")}>React</span>
        <span className="work___items" onClick={() => filterItem
          ("Html")}>Html</span>
      </div>
      <div className="work___container grid">
        {items.map((elem) => {
          const { id, image, title, category,href,link } = elem;
          return (<div>
            <div className="work___card" key={id}>
              <div className="work___thumbnail">
                <img src={image} alt="" className="work___img" />

                <div className="work___mask"></div>
              </div>
              <span className="work___category">{category} </span>
              <h3 className="work___title">{title}</h3>
              <a href={href} className="work___button"  target="_blank" rel="noreferrer">
                <i className="icon-link work___button-icon"></i>
              </a>
              </div>
              {link && (
                    <div>
                      <span className='work___label'>Link: </span>
                      <span className='work___link'>{link}</span>
                    </div>
)}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portpolio;
