import useSaves from "@/hooks/useSaves";

export default function Saved() {
  const { saves, remove } = useSaves();
  return (
    <div>
      <h2 className="font-bold text-xl">Elenco dei calcoli salvati</h2>
      <div className="flex flex-col">
        {saves.map((s) => (
          <div key={s.id}>
            <p>
              {s.nota} | Misura: {s.misura} |{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
