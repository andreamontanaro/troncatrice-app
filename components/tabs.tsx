type Props = {
  selectedTab: string;
  tabs: { label: string; value: string }[];
  onChange: (tab: string) => void;
};

export default function Tabs(props: Props) {
  return (
    <div className="flex flex-row justify-around mt-4">
      {props.tabs.map((t) => (
        <button
          key={t.value}
          onClick={() => props.onChange(t.value)}
          className={`${
            t.value === props.selectedTab && "font-bold border-b"
          } transition-all duration-100 px-3 py-4`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
