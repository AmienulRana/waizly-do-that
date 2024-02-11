import { IPropsTabs } from "@/types";
import { useEffect, useRef, useState } from "react";


export default function Tabs({
  labels,
  classNameWrapper,
  onChangeTabs,
  defaultActive = 0,
}: IPropsTabs) {

  const [tabActive, setTabActive] = useState("");

  const [indicator, setIndicator] = useState({
    width: 0,
    position: 0,
  });

  const buttonRefs = useRef<HTMLButtonElement[]>([]);

  const handleNavigateTabs = (event: any, tab: string) => {
    const buttonWidth: number = event.target.clientWidth;
    const buttonPosition: number = event.target.offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
    setTabActive(tab);
    onChangeTabs?.(tab);
  };
  useEffect(() => {
    setTabActive(labels[defaultActive]);
    onChangeTabs?.(labels[defaultActive]);
  }, [labels]);

  useEffect(() => {
    const buttonWidth = buttonRefs.current[defaultActive].clientWidth;
    const buttonPosition = buttonRefs.current[defaultActive].offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
  }, [labels]);
  return (
    <section className={`flex gap-5 min-w-max overflow-x-auto hide-scrollbar relative py-4 ${classNameWrapper}`}>
      {tabActive && (
        <span
          className="absolute bottom-0 border-2 rounded-t-md border-primary duration-300"
          style={{
            left: `${indicator.position}px`,
            width: `${indicator.width}px`,
          }}
        />
      )}
      {labels.map((data, index) => (
        <button
          key={index}
          ref={(el) => (buttonRefs.current[index] = el!)}
          className={[
            "text-md mr-6 bg-transparent min-w-max duration-300 font-bold",
            tabActive === data ? "text-primary" : "text-gray-300",
          ].join(" ")}
          onClick={(e) => handleNavigateTabs(e, data)}
        >
          {data}
        </button>
      ))}
    </section>
  );
}
