import useSaves from "@/hooks/useSaves";
import { faAt, faHashtag, faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SyntheticEvent, useState } from "react";
import { v4 } from "uuid";

export default function Calculate() {
  const { add } = useSaves();
  const [formData, setFormData] = useState({
    nota: "Calcolo",
    misura: 0,
    nrPezzi: 0,
  });

  const [result, setResult] = useState({
    guid: v4(),
    nrBattute: 0,
    nrBarre: 0,
  });

  const [saved, setSaved] = useState(false);

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    setSaved(false);
    // .. codice per il calcolo

    // salvataggio
    setResult({
      guid: v4(),
      nrBattute: 999,
      nrBarre: 999,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Esegui calcolo</h2>
      <form onSubmit={submit} className="mt-5">
        <div className="flex flex-row items-center">
          <label className="text-xl px-3">
            <FontAwesomeIcon icon={faAt} />
          </label>
          <input
            type="text"
            value={formData.nota}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nota: e.target.value }))
            }
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
            value={formData.misura}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, misura: +e.target.value }))
            }
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
            value={formData.nrPezzi}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, nrPezzi: +e.target.value }))
            }
            placeholder="Numero pezzi"
            className="ml-auto w-full lg:ml-0 bg-inherit outline-none focus:ring active:ring text-white text-xl px-3 py-4 border border-blue-200 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-3 w-full border px-5 py-3 rounded-lg mx-auto"
          >
            Calcola
          </button>
        </div>
      </form>
      {(result.nrBarre > 0 || result.nrBattute > 0) && (
        <div className="mt-5">
          <h3 className="text-lg font-bold">Il risultato è</h3>
          <ul>
            <li>
              Numero barre: <strong>{result.nrBarre}</strong>
            </li>
            <li>
              Numero battute: <strong>{result.nrBattute}</strong>
            </li>
          </ul>
          <button
            disabled={saved}
            onClick={() => {
              add({
                id: result.guid,
                misura: formData.misura,
                nota: formData.nota,
                nrPezzi: formData.nrPezzi,
                nrBarre: result.nrBarre,
                nrBattute: result.nrBattute,
              });
              setSaved(true);
            }}
            className="mt-3 disabled:text-gray-400 disabled:border-gray-300 border px-5 py-3 rounded mx-auto"
          >
            {!saved && (
              <>
                Salva `<strong>{formData.nota.trim()}</strong>`
              </>
            )}
            {saved && "Salvataggio completato!"}
          </button>
        </div>
      )}
    </div>
  );
}
