import { UilInfoCircle } from "@iconscout/react-unicons";

interface Props {
  error: string | null;
  onDismiss: () => void;
}

const Alert = ({ error, onDismiss }: Props) => {
  return (
    <div className="bg-white shadow-lg w-90 rounded-lg" role="alert">
      <div className="p-10">
        <div className="text-red-600 flex flex-col justify-center items-center">
          <div>
            <UilInfoCircle />
          </div>
          <h3 className="font-semibold text-sm">Something went wrong!</h3>
        </div>
        <div className="pt-3 text-lg">{error ? error.toString() : "Error"}</div>

        <div>
          <button
            onClick={onDismiss}
            className="px-5 py-1 bg-blue-500 text-white rounded-lg mt-7"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
