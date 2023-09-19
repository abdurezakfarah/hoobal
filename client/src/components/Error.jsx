import React from 'react';

const Error = ({ title, body }) => (
  <div
    className="w-full flex flex-col justify-center items-center gap-4"
  >
     <h2
      className="font-bolder text-xl text-center text-gray-50"
     >
       {
         title || "Error"
       }
     </h2>
       <p
      className="font-semilight text-sm text-center text-slate-200"
     >
       {
         body || "Something went wrong"
       }
     </p>
  </div>
);

export default Error;
