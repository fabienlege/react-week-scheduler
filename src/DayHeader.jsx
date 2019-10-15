import React from 'react';

function DayHeader() {
  return (
    <thead>
      <tr>
        <th />
        <th>
          <span className="long">Lundi</span>
          <span className="short">Lun</span>
        </th>
        <th>
          <span className="long">Mardi</span>
          <span className="short">Mar</span>
        </th>
        <th>
          <span className="long">Mercredi</span>
          <span className="short">Mer</span>
        </th>
        <th>
          <span className="long">Jeudi</span>
          <span className="short">Jeu</span>
        </th>
        <th>
          <span className="long">Vendredi</span>
          <span className="short">Ven</span>
        </th>
        <th>
          <span className="long">Samedi</span>
          <span className="short">Sam</span>
        </th>
        <th>
          <span className="long">Dimanche</span>
          <span className="short">Dim</span>
        </th>
      </tr>
    </thead>
  );
}

export default DayHeader;
