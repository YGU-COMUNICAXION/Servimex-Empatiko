import { useState } from "react";
import caso1Img from "@assets/img/nosotros/caso1.jpg";
import caso2Img from "@assets/img/nosotros/caso2.jpg";
import caso3Img from "@assets/img/nosotros/caso3.jpg";
import liston from "@assets/svg/nosotros/liston.svg";

const casos = [
  {
    titulo: "Tecnología que salva vidas: CIAM lidera la revolución médica",
    descripcion:
      "CIAM optimizó su servicio radiológico con la implementación de Perenniy Enterprise PLUS, mejorando la atención médica con procesos más ágiles, precisos y seguros. Esta transformación digital elevó la eficiencia, redujo costos y mejoró la calidad del servicio.",
    desafio:
      "Procesos lentos, dependencia de terceros para radiología, burocracia, mala calidad del servicio y demoras en la atención a pacientes.",
    solucion:
      "Implementación de Perenniy Enterprise PLUS en diciembre de 2022, una plataforma integral para gestión de imágenes médicas (RIS/MWL, PACS y portal de resultados), con capacitación personalizada para el equipo médico.",
    impacto: [
      "Acceso inmediato a imágenes desde cualquier dispositivo.",
      "Reducción de costos operativos en un 30%.",
      "Ahorro de tiempo administrativo del 40%.",
      "Optimización del diagnóstico con informes automáticos y colaboración entre sedes.",
      "Mejora significativa en la experiencia del paciente y eficiencia del equipo.",
    ],
    testimonios: [
      {
        texto:
          "Desde que integramos Perenniy Enterprise PLUS, la velocidad y precisión en el diagnóstico se transformaron. Nuestro flujo de trabajo es 40% más eficiente.",
        autor: "Dra. Elizabeth Rivera, Jefatura de Radiología, CIAM.",
      },
      {
        texto:
          "Perenniy Enterprise PLUS destaca por su facilidad de uso, calidad en el flujo de trabajo y soporte constante.",
        autor: "Dr. Carlos Roberto Escobar López, Médico Radiólogo, CIAM.",
      },
      {
        texto:
          "El acceso seguro y la edición flexible de informes han mejorado sustancialmente nuestro servicio.",
        autor:
          "Dra. María Fernanda Melgar Torres, Radiología e Imágenes Diagnósticas.",
      },
    ],
    imagen: caso1Img,
  },
  {
    titulo: "CIMEN acelera el futuro del diagnóstico médico con Perenniy",
    descripcion:
      "CIMEN modernizó su servicio de imágenes radiológicas con Perenniy Enterprise PLUS, mejorando eficiencia, calidad y reduciendo costos, lo que fortaleció su liderazgo en la región.",
    desafio:
      "Retrasos y dificultades en el acceso y almacenamiento de imágenes médicas, lo que afectaba la eficiencia operativa y la experiencia del paciente.",
    solucion:
      "Implementación de Perenniy Enterprise PLUS en marzo de 2023, una plataforma avanzada de gestión radiológica que centralizó información, agilizó los procesos y mejoró la calidad del diagnóstico.",
    impacto: [
      "Acceso rápido y seguro a imágenes médicas.",
      "Reducción significativa en tiempos de espera y costos.",
      "Mejora en la experiencia de pacientes y médicos.",
      "Adaptación eficaz del sistema a las operaciones internas.",
      "Soporte técnico de alta calidad y acompañamiento cercano.",
    ],
    testimonios: [
      {
        texto:
          "La flexibilidad de Perenniy nos permitió adaptar la plataforma a nuestro entorno sin alterar nuestros flujos de trabajo.",
        autor: "Dr. Cleimin Ferrin, Director Médico, CIMEN.",
      },
      {
        texto:
          "El soporte y la personalización que ofrece Perenniy han sido fundamentales para el éxito de nuestra operación.",
        autor: "Lic. José Luis Rodríguez, Gerente de TI, CIMEN.",
      },
      {
        texto:
          "Perenniy se ha convertido en un aliado clave para la innovación y eficiencia de CIMEN.",
        autor: "Lic. Adderlyn Martínez, Gerente de Operaciones.",
      },
    ],
    imagen: caso2Img,
  },
  {
    titulo:
      "IMSS Bienestar digitaliza su diagnóstico: 7-90% más rápido y eficiente",
    descripcion:
      "En colaboración con Impulso Mexicano, el Hospital General de la Mujer y el Niño Oaxaqueño transformó su sistema de gestión de imágenes médicas. Gracias a la implementación de Perenniy Enterprise PLUS, se logró optimizar procesos, reducir costos y ofrecer un diagnóstico médico más ágil y seguro.",
    desafio:
      "Altos costos por almacenamiento físico de estudios médicos, dificultad de acceso y problemas en la organización de la información.",
    solucion:
      "Implementación de Perenniy Enterprise PLUS como sistema RIS/PACS, en colaboración con Impulso Mexicano, con una infraestructura robusta, automatización de procesos administrativos y clínicos, y cumplimiento con normativas internacionales de seguridad (HIPAA, GDPR).",
    impacto: [
      "70% menos tiempo en la recuperación de estudios.",
      "Diagnósticos más rápidos y accesibles desde cualquier dispositivo.",
      "Automatización en programación, facturación y reportes.",
      "Mejor comunicación con estándares internacionales.",
      "Interoperabilidad total entre departamentos clínicos.",
    ],
    testimonios: [
      {
        texto:
          "La solución RIS/PACS ofrecida por Perenniy es robusta, flexible y escalable. ¡Una implementación excelente!",
        autor: "Gerente de Impulso Mexicano.",
      },
      {
        texto:
          "Ahora brindamos diagnósticos más precisos y rápidos. La interoperabilidad del sistema cambió nuestra dinámica de trabajo por completo.",
        autor: "Ingenieros del Hospital IMSS Bienestar.",
      },
      {
        texto:
          "El acceso seguro y la edición flexible de informes han mejorado sustancialmente nuestro servicio.",
        autor:
          "Dra. María Fernanda Melgar Torres, Radiología e Imágenes Diagnósticas.",
      },
    ],
    imagen: caso3Img,
  },
];

export default function CasosDeExito() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % casos.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + casos.length) % casos.length);

  const caso = casos[index];

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div
          className=" rounded-xl p-6 md:p-8 bg-gradient-to-br from-[#DBE6F7]/40 to-[#F4F6F9]/10
        flex flex-col lg:flex-row items-center justify-center gap-6 relative shadow"
        >
          {/* Flecha izquierda */}
          <button
            onClick={prev}
            className="absolute -left-3 lg:left-0 xl:left-3  top-1/2 transform -translate-y-1/2
             shadow-md hover:shadow-lg p-2 rounded-full transition hover:cursor-pointer"
          >
            <svg width="16" height="16" fill="currentColor">
              <path
                d="M11 14L5 8l6-6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>

          {/* Contenido texto */}
          <div
            className="
          flex-1 space-y-4 font-inter font-light text-secondary-1 text-lg max-w-3xl"
          >
            <h2 className="text-secondary-1 font-medium font-inter text-base sm:text-lg mb-8 uppercase">
              Casos de Éxito
            </h2>
            <h3
              className="text-base md:text-lg text-secondary-1 font-medium font-inter
              flex items-center gap-4"
            >
              <img
                src={liston.src}
                alt="Liston"
                className="w-auto h-12 md:h-14"
              />
              {caso.titulo}
            </h3>

            <p className=" ">{caso.descripcion}</p>
            <p className="">
              <strong>Desafío:</strong> {caso.desafio}
            </p>
            <p className="">
              <strong>Solución:</strong> {caso.solucion}
            </p>
            <div>
              <strong className="">
                Impacto de implementación de Perenniy:
              </strong>
              <ul className="list-disc pl-4 ">
                {caso.impacto.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-shrink-0 w-full my-auto md:max-w-xl">
            <img
              src={caso.imagen.src}
              alt={caso.titulo}
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Flecha derecha */}
          <button
            onClick={next}
            className="absolute -right-3 lg:right-0 xl:right-3 top-1/2 transform -translate-y-1/2
             shadow-md hover:shadow-lg p-2 rounded-full transition hover:cursor-pointer"
          >
            <svg width="16" height="16" fill="currentColor">
              <path
                d="M5 2l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {caso.testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#DBE6F7]/40 to-[#F4F6F9]/10 rounded-xl p-12 text-left
              text-base lg:text-lg font-inter font-light text-secondary-1 shadow-sm"
            >
              <p className="mb-2">"{t.texto}"</p>
              <p className="font-normal">{t.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
