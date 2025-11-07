import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const Erorr = () => {
  // this hook gives access to the status and statusText of the error thrown in loader
  const error = useRouteError();

  // let errorStatus: number;

  // let errorStatusText: string;
  // if erorr come from loader get status and statusText from there
  //else set default 404 values
  //   if (isRouteErrorResponse(error)) {
  //     errorStatus = error.status;
  //     errorStatusText = error.statusText;
  //   } else {
  //     errorStatus = 404;
  //     errorStatusText = "Page Not Found";
  //   }

  // if erorr come from loader get status and statusText from there
  //else set default 404 values

  let { errorStatus, errorStatusText } = isRouteErrorResponse(error)
    ? { errorStatus: error.status, errorStatusText: error.statusText }
    : { errorStatus: 404, errorStatusText: "Page Not Found" };

  return (
    <section className="container mx-auto flex flex-col justify-center items-center h-lvh">
      <h1 className="text-cyan-400 font-bold text-5xl">{errorStatus}</h1>
      <h2 className="text-2xl ml-4 mt-3">{errorStatusText}</h2>
      <Link to="/" className="text-blue-500" replace={true}>
        How about going back to the homepage?
      </Link>
    </section>
  );
};

export default Erorr;
