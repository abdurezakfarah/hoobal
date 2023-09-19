import {
  loader
} from "../assets"

const Loader = ({ title }) => (
  <div
   className="w-full flex flex-col justify-center items-center gap-4"
  >
   <img
     src={loader}
     alt="Loader svg"
     className="w-32 h-32 object-contain"
    />
    <h2
      className="font-bolder text-center text-slate-200"
    >
     { title || "Loading..."}
    </h2>
  </div>
);

export default Loader;
