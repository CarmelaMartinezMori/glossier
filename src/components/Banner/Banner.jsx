import React from 'react';
import './Banner.css'

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 bg-image ' /* Elimina la clase 'text-center' para alinear a la izquierda */
        style={{ backgroundImage: "url('https://glossier-prod.imgix.net/files/glossier-futuredew-hp-desktop.png?auto=compress,format&cs=srgb&w=2592')", height: 700 }}
      >
        <div className='mask'> {/* Elimina la propiedad 'backgroundColor' */}
          <div className='d-flex justify-content-center align-items-center h-200'>
            <div className='text-black'>
              <h2 className='mb-2'>Embrace the dew</h2>
              <p className='mb-2'>Give your summer routine the glowy kick it needs with Futuredew. </p>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Show Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
