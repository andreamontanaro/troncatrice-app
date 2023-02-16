import { faAt, faHashtag, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Calculate() {
  return (
    <div>
      <h2 className="text-lg font-bold">Esegui calcolo</h2>
      <form className="mt-5">
        <div className="flex flex-row items-center">
          <label className="text-xl px-3">
            <FontAwesomeIcon icon={faAt} />
          </label>
          <input
            type="text"
            placeholder="Nota"
            className="bg-inherit w-full ml-auto lg:ml-0 outline-none focus:ring active:ring text-white text-xl px-3 py-4 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex mt-3 flex-row items-center">
          <label className="text-xl px-3">
            <FontAwesomeIcon icon={faRuler} />
          </label>
          <input
            type="number"
            placeholder="Misura"
            className="bg-inherit w-full ml-auto lg:ml-0 outline-none focus:ring active:ring text-white text-xl px-3 py-4 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="mt-3 flex flex-row items-center">
          <label className="text-2xl px-3">
            <FontAwesomeIcon icon={faHashtag} />
          </label>
          <input
            type="number"
            placeholder="Numero pezzi"
            className="ml-auto w-full lg:ml-0 bg-inherit outline-none focus:ring active:ring text-white text-xl px-3 py-4 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button className="mt-3 w-full border px-5 py-3 rounded-lg mx-auto">
            Calcola
          </button>
        </div>
      </form>
    </div>
  );
}
