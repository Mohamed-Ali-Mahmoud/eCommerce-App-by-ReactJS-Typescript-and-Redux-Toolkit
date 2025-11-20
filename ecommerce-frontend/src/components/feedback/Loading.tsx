import type { TLoading } from "@customTypes/shared";

type LoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};
const Loading = ({ loading, error, children }: LoadingProps) => {
  // Handle loading states
  // if loading is "pending", show a loading message
  if (loading === "pending") {
    return <div>Loading... Please Wait</div>;
  }

  // if loading is "failed", show the error message
  if (loading === "failed") {
    return <div>{error}</div>;
  }
  return <>{children}</>;
};

export default Loading;
