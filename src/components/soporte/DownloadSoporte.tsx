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
    {
      nombre: "RIS",
      link: "https://drive.google.com/file/d/1vJ8DwjtamwGy4G9pdh_CmNbr1m_66cZy/view?usp=drive_link",
    },
    { nombre: "PACS", link: "#" },
    {
      nombre: "Modality Worklist",
      link: "https://drive.google.com/file/d/1vJ8DwjtamwGy4G9pdh_CmNbr1m_66cZy/view?usp=drive_link",
    },
    {
      nombre: "Portal del Paciente",
      link: "https://drive.google.com/file/d/1t-P4FPpkK7i1NSXCOIl1Z30F6lugSAEf/view?usp=drive_link",
    },
    {
      nombre: "Backup",
      link: "https://drive.google.com/file/d/1EgpdM4z-33DKhrVl9EkarejRQp0gsnLG/view?usp=drive_link",
    },
    { nombre: "Política de garantía", link: "#" },
  ],
  Servidores: [
    {
      nombre: "Dual Enterprise",
      link: "https://drive.google.com/file/d/1i8RaCov0gYuGxAX4FMbQZlZcCdM5RfoE/view?usp=drive_link",
    },
    {
      nombre: "Dual Plus",
      link: "https://drive.google.com/file/d/1y00wAqxMOEpHfm5k_Y_vnPygMlGAvXKn/view?usp=drive_link",
    },
    {
      nombre: "Dual Platinum",
      link: "https://drive.google.com/file/d/1q6T81saAPvMyk5KmQAA7eYR5iLiSUxLa/view?usp=drive_link",
    },
    {
      nombre: "Dual Premium",
      link: "https://drive.google.com/file/d/1kaYdLJaSnKTcA6Kq1xDIKkzPLvBsnS9X/view?usp=drive_link",
    },
    {
      nombre: "RIS Enterprise",
      link: "https://drive.google.com/file/d/1pEzgkx7W-M7zzEQ1cMwMHck7XDoSHPuH/view?usp=drive_link",
    },
    {
      nombre: "RIS Plus",
      link: "https://drive.google.com/file/d/1p7zu6a6K375o79hgPQ6xX7WuPKA0Q08_/view?usp=drive_link",
    },
    {
      nombre: "PACS Enterprise",
      link: "https://drive.google.com/file/d/1NxfJFGl1UC2xKuhxzXoMxNZaNr_ekK_-/view?usp=drive_link",
    },
    {
      nombre: "PACS Plus",
      link: "https://drive.google.com/file/d/1sNNTUnsinDEO_cUe3c4-WNsx4kdLzrJX/view?usp=drive_link",
    },
    {
      nombre: "PACS Platinum",
      link: "https://drive.google.com/file/d/10LN-nIV9HwlaRcQWcTLixpmD9zHYu1lc/view?usp=drive_link",
    },
    {
      nombre: "Portal Enterprise",
      link: "https://drive.google.com/file/d/1JDupFuj1V-P3uL62RkW_BZyyFiu3t68s/view?usp=drive_link",
    },
    {
      nombre: "Portal Plus",
      link: "https://drive.google.com/file/d/1jdB69lkaTDFHQ2cdcXj81tNn-fLl_4kD/view?usp=drive_link",
    },
    {
      nombre: "Almacenamiento Enterprise",
      link: "https://drive.google.com/file/d/1EpZ5v7eGlcqGcNSkmMdNbupSfqqHHWEU/view?usp=drive_link",
    },
    {
      nombre: "Almacenamiento Plus",
      link: "https://drive.google.com/file/d/1pxHD6yMKgm68K6fsxQmH6wIhhVjuGlqV/view?usp=drive_link",
    },
    {
      nombre: "Almacenamiento Platinum",
      link: "https://drive.google.com/file/d/1CCB4DUfqYACbxdkH1pS77z3GzQKZwbTC/view?usp=drive_link",
    },
    {
      nombre: "Workstation Lite",
      link: "https://drive.google.com/file/d/17poTDoM--dOfJwzK-VWAvvOZocTua-nI/view?usp=drive_link",
    },
    {
      nombre: "Workstation Enterprise",
      link: "https://drive.google.com/file/d/1jhSp-pP_x8s9wF7OHTc1dON0qj1F3UCv/view?usp=drive_link",
    },
    {
      nombre: "Workstation Plus",
      link: "https://drive.google.com/file/d/1un8Zk-bNXkCHLYnRIpBiytRmR9j6BNsZ/view?usp=drive_link",
    },
    {
      nombre: "Workstation Platinum",
      link: "https://drive.google.com/file/d/1GNdX95iPLMmFPAJzGjsfTxLlFZZrb2OF/view?usp=drive_link",
    },
    {
      nombre: "Workstation Premium",
      link: "https://drive.google.com/file/d/1LHfZXAz31eAE0Hj9yr19TZJL3aM_2j2B/view?usp=drive_link",
    },
    { nombre: "Política de garantía", link: "#" },
  ],
  Monitores: [
    {
      nombre: "C310S",
      link: "https://drive.google.com/file/d/1vCJ10uXot-thg70DdxP5yFBGFT8ThkMP/view?usp=drive_link",
    },
    {
      nombre: "C510S",
      link: "https://drive.google.com/file/d/1FZJHZZQCVv-hebv2hh6IXVDyS42pFYnl/view?usp=drive_link",
    },
    {
      nombre: "C22S+",
      link: "https://drive.google.com/file/d/1VMjM3i1Iadw2egJsMpeJ9SXrAAx6OdjG/view?usp=drive_link",
    },
    { nombre: "Política de garantía", link: "#" },
  ],
  Publicador: [
    {
      nombre: "Allegro 20",
      link: "https://drive.google.com/file/d/1H_dz5cZQYvJmWMNqW0sTNXDjNkJho3zS/view?usp=drive_link",
    },
    {
      nombre: "Allegro 100",
      link: "https://drive.google.com/file/d/1H_dz5cZQYvJmWMNqW0sTNXDjNkJho3zS/view?usp=drive_link",
    },
    {
      nombre: "Publicador de Memorias USB",
      link: "https://drive.google.com/file/d/1Yd0puLh_mClu48RkbAV_Az7nJomLOEau/view?usp=drive_link",
    },
    {
      nombre: "Rimage Catalyst",
      link: "https://drive.google.com/file/d/13q67V66lwnR5nNUoY2w8rpJXApW0_pze/view?usp=drive_link",
    },
    {
      nombre: "Rimage Producer",
      link: "https://drive.google.com/file/d/1ugxidE-lqurcdJaw5JzEbJekXJJNUb6N/view?usp=drive_link",
    },
    {
      nombre: "Suministros",
      link: "https://drive.google.com/file/d/1H_dz5cZQYvJmWMNqW0sTNXDjNkJho3zS/view?usp=drive_link",
    },
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
