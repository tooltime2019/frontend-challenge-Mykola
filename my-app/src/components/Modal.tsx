import { ReactElement } from 'react';
import './Modal.css';

export function Modal(children: ReactElement ) {
    return (
      <div className='overlay'>
        <div className='modal'>
          {children}
          <button className='closeButton' onClick={() => {}}>X</button>
        </div>
      </div>
    );
  }
  