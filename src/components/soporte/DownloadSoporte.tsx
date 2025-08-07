import { useState } from "react";
import { ChevronRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

interface FileItem {
  nombre: string;
  link: string;
}

const filesData: Record<string, FileItem[]> = {
  "Software médicos": [
    { nombre: "Essential Suite", link: "#" },
    { nombre: "Advanced Suite", link: "#" },
    { nombre: "RIS", link: "#" },
    { nombre: "PACS", link: "#" },
    { nombre: "Modality Worklist", link: "#" },
    { nombre: "Portal del Paciente", link: "#" },
    { nombre: "Backup", link: "#" },
    { nombre: "Política de garantía", link: "#" },
  ],
  Servidores: [
    { nombre: "Dual Enterprise", link: "#" },
    { nombre: "Dual Plus", link: "#" },
    { nombre: "Dual Platinum", link: "#" },
    { nombre: "Dual Premium", link: "#" },
    { nombre: "RIS Enterprise", link: "#" },
    { nombre: "RIS Plus", link: "#" },
    { nombre: "PACS Enterprise", link: "#" },
    { nombre: "PACS Plus", link: "#" },
    { nombre: "PACS Platinum", link: "#" },
    { nombre: "Portal Enterprise", link: "#" },
    { nombre: "Portal Plus", link: "#" },
    { nombre: "Almacenamiento Enterprise", link: "#" },
    { nombre: "Almacenamiento Plus", link: "#" },
    { nombre: "Almacenamiento Platinum", link: "#" },
    { nombre: "Workstation Lite", link: "#" },
    { nombre: "Workstation Enterprise", link: "#" },
    { nombre: "Workstation Plus", link: "#" },
    { nombre: "Workstation Platinum", link: "#" },
    { nombre: "Workstation Premium", link: "#" },
    { nombre: "Política de garantía", link: "#" },
  ],
  Monitores: [
    { nombre: "C310S", link: "#" },
    { nombre: "C510S", link: "#" },
    { nombre: "C22S+", link: "#" },
    { nombre: "Política de garantía", link: "#" },
  ],
  Publicador: [
    { nombre: "Allegro 20", link: "#" },
    { nombre: "Allegro 100", link: "#" },
    { nombre: "Publicador de Memorias USB", link: "#" },
    { nombre: "Rimage Catalyst", link: "#" },
    { nombre: "Rimage Producer", link: "#" },
    { nombre: "Suministros", link: "#" },
    { nombre: "Política de garantía", link: "#" },
  ],
};

export default function DownloadsTabs() {
  const tabs = Object.keys(filesData);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="container max-w-7xl mx-auto rounded-[2rem] bg-[#F4F6F9] shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Tabs */}
        <div className="w-full md:max-w-80 bg-[#1E2A38] text-white py-12 pl-4 flex flex-col justify-between rounded-[2rem]">
          {tabs.map((tab) => (
            <div className="relative mb-4" key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full px-4 py-3
                  text-left font-semibold
                  rounded-full md:rounded-r-none hover:cursor-pointer
                  flex items-center justify-between transition-all duration-300 relative z-10 ${
                    activeTab === tab
                      ? "bg-[#45A39D] text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
              >
                <span>{tab}</span>
                {activeTab === tab && (
                  <span className="absolute right-0 md:right-[-20px] rotate-90 md:rotate-0 bg-[#1E2A38] rounded-full size-12 flex items-center justify-center">
                    <ChevronRightIcon className="ml-1 size-6 text-[#45A39D]" />
                  </span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="w-full flex-1 p-8 grid gap-3 min-h-[460px] transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 md:gap-x-16 lg:gap-x-24 max-w-3xl mx-auto">
            {filesData[activeTab].map((file) => (
              <div
                key={file.nombre}
                className="flex items-center justify-between w-full gap-x-4 text-sm text-secondary-1 px-2"
              >
                <span className="truncate">{file.nombre}</span>
                <a
                  href={file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-1 shrink-0"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
