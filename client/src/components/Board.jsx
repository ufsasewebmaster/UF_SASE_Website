import React from 'react';
import '../styles/Board.css';

const boardMembers = [
    {
        id: 1,
        name: 'Vincent Lin',
        title: 'President',
        imageUrl: 'assets/vincent-lin-headshot.png',
        email: 'ufsase.president@gmail.com'
    },
    {
        id: 2,
        name: 'Bryan Park',
        title: 'Internal Vice President (IVP)',
        imageUrl: 'assets/bryan-park-headshot.png',
        email: 'ufsase.vp@gmail.com'
    },
    {
        id: 3,
        name: 'Kayleen Diaz',
        title: 'External Vice President (EVP)',
        imageUrl: 'assets/kayleen-diaz-headshot.png',
        email: 'ufsase.evp@gmail.com'
    },
];


const Board = () => {
    return (
        <div className="board-container">
            {boardMembers.map(member => (
                <div key={member.id} className="board-item">
                    <img src={member.imageUrl} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
            ))}
        </div>
    );
};

export default Board;