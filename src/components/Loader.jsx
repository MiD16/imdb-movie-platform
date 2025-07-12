import { Spinner } from "flowbite-react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-32">
      <Spinner color="purple" aria-label="Purple spinner example" size="l" className="w-10 h-10" />
    </div>
  );
}