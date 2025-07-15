import { useState } from "react";

const faqs = [
  {
    question: "¿Los equipos se entregan configurados?",
    answer:
      "Sí, todos nuestros equipos se entregan preconfigurados y listos para usarse, de acuerdo con las especificaciones del cliente. Esto reduce el tiempo de implementación y garantiza una experiencia fluida desde el primer momento.",
  },
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer:
      "El tiempo de entrega varía según el volumen del pedido y la ubicación, en la mayoría de los casos manejamos entregas entre 3 a 4 semanas hábiles a nivel nacional.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí, contamos con un equipo de soporte técnico especializado que brinda atención antes, durante y después de la compra en días y horas hábiles. El soporte incluye asistencia remota, orientación en configuración y resolución de incidencias.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes solicitar una cotización directamente a través de nuestro formulario de contacto en la web, por correo electrónico, por mensaje o llamada mediante atención personalizada con uno de nuestros asesores. Atendemos solicitudes tanto de minoristas como de grandes empresas.",
  },
  {
    question: "¿Puedo solicitar una demostración de los equipos o software?",
    answer:
      "Claro, ofrecemos una muestra en vivo bajo cita previa (se realizan de manera virtual). Ideal para conocer a fondo las funcionalidades antes de adquirirlo.",
  },
  {
    question: "¿Los productos tienen garantía?",
    answer:
      "Sí, todos nuestros productos cuentan con garantía por parte del fabricante y respaldo directo de nuestra empresa.",
  },
  {
    question: "¿Quién instala los equipos?",
    answer:
      "Ofrecemos servicio de instalación para proyectos institucionales o pedidos mayores, con técnicos certificados.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col divide-y divide-neutral-2/50 w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full hover:cursor-pointer
            text-left text-primary-1 font-inter  font-medium text-base md:text-lg lg:text-xl"
          >
            {faq.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="font-inter font-light mt-2 p-4 rounded bg-[#DBE6F7] text-primary-1 text-base leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
