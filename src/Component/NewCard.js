import React from 'react';

const Card = ({ children, title,discription,currentstate,time}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-1 flex flex-col justify-between h-full">
      <h3 className='text-green-900 mb-4 text-center text-lg font-extrabold p-2'>{title}</h3>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{children}</div>
         {
        currentstate!=undefined?(<div
              className={`text-2xl font-bold ${
                currentstate === 1 ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {currentstate===1?"Running":"IDLE"}
            </div>):""
      }
      {
        time!=undefined?(
          <h2 className='text-blue-400 mb-4 text-center text-lg font-extrabold'>{time}</h2>
        ):""
      }
      <p className="text-gray-600 mb-4 text-center">{discription}</p>
      
    </div>
  );
};

export default Card;
