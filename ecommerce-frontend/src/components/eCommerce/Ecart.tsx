import { BsCart3 } from "react-icons/bs";
const Ecart = () => {
  return (
    <section className="relative">
      <BsCart3 className="size-10"></BsCart3>
      <span className="absolute -top-2 -right-2 bg-cyan-400 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
        3
      </span>
    </section>
  );
};

export default Ecart;
