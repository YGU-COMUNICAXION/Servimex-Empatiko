import React, { useState } from "react";
import clsx from "clsx";
import type { CollectionEntry } from "astro:content";

type Producto =
  | CollectionEntry<"software">
  | CollectionEntry<"servidores">
  | CollectionEntry<"monitores">
  | CollectionEntry<"publicadores">;

type MegaMenuProps = {
  data: {
    [categoria: string]: Producto[];
  };
};

const categoryLabels: Record<string, string> = {
  software: "Software Médico",
  servidores: "Servidores",
  monitores: "Monitores de Grado Médico",
  publicadores: "Publicadores",
};

const MegaMenu: React.FC<MegaMenuProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );

  // Mapa manual de orden para subcategorías
  const subcategoryOrderMap: Record<string, number> = {
    risPacs: 1,
    ris: 2,
    pacs: 3,
    portal: 4,
    historico: 5,
    workstation: 6,
  };

  const handleMouseEnterMenu = () => {
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    setIsOpen(false);
    setActiveCategory(null);
    setActiveSubcategory(null);
  };

  const handleCategoryHover = (categoria: string) => {
    setActiveCategory((prev) => (prev === categoria ? null : categoria));
    setActiveSubcategory(null);
  };

  const handleSubcategoryHover = (subcat: string) => {
    setActiveSubcategory((prev) => (prev === subcat ? null : subcat));
  };

  // Agrupa subcategorías según frontmatter y orden interno
  const getSubcategories = (categoria: string) => {
    const productos = data[categoria] ?? [];
    const subcatMap: Record<string, Producto[]> = {};
    productos.forEach((p) => {
      const sub = p.data.category || "default";
      (subcatMap[sub] ??= []).push(p);
    });
    Object.values(subcatMap).forEach((arr) =>
      arr.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0))
    );
    return subcatMap;
  };

  const renderProductos = (productos: Producto[]) => {
    const sorted = [...productos].sort(
      (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0)
    );
    return (
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto min-w-[250px] xl:min-w-[300px] transition-opacity duration-300 ease-in-out">
        {sorted.map((producto) => (
          <a
            key={producto.id}
            href={`/productos/${producto.data.slug}`}
            className="block text-center p-2 rounded-md transition-shadow hover:shadow-md hover:bg-gray-50"
          >
            {producto.data.image && (
              <img
                src={producto.data.image.src}
                alt={producto.data.name}
                className="h-16 mx-auto mb-2 object-contain"
              />
            )}
            <p className="text-sm font-medium text-primary-1">
              {producto.data.name}
            </p>
          </a>
        ))}
      </div>
    );
  };

  const subcategorias = activeCategory ? getSubcategories(activeCategory) : {};
  const subKeys = Object.keys(subcategorias);
  const orderedSubKeys = [...subKeys].sort((a, b) => {
    const oa = subcategoryOrderMap[a] ?? Number.MAX_SAFE_INTEGER;
    const ob = subcategoryOrderMap[b] ?? Number.MAX_SAFE_INTEGER;
    return oa - ob;
  });
  const soloUnaSub = orderedSubKeys.length <= 1;
  const firstKey = orderedSubKeys[0];

  return (
    <div
      className="hidden lg:block relative"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      <button className="text-primary-1 uppercase font-normal transition-colors duration-200 hover:text-primary-2 hover:cursor-pointer">
        Productos
      </button>

      <div
        className={clsx(
          "absolute top-full left-0 bg-white shadow-xl z-50 rounded-xl p-4 flex overflow-hidden transform transition-all duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0 visible": isOpen,
            "opacity-0 -translate-y-2 invisible": !isOpen,
          }
        )}
      >
        {/* Categorías */}
        <div
          className={clsx(
            "flex flex-col gap-2 pr-4 min-w-[300px] xl:min-w-[350px] max-w-[400px] transition-opacity duration-300 ease-in-out",
            activeCategory && "border-r border-gray-200",
            { "opacity-100": activeCategory, "opacity-50": !activeCategory }
          )}
        >
          {Object.keys(data).map((categoria) => (
            <div
              key={categoria}
              onMouseEnter={() => handleCategoryHover(categoria)}
              className={clsx(
                "cursor-pointer p-5 rounded-xl text-secondary-1 text-start text-base font-inter font-medium hover:bg-blue-50 transition-colors duration-200",
                { "bg-blue-100 font-semibold": activeCategory === categoria }
              )}
            >
              {categoryLabels[categoria] ?? categoria}
            </div>
          ))}
        </div>

        {/* Subcategorías o grid */}
        {activeCategory &&
          (soloUnaSub ? (
            <div className="pl-4 border-l border-gray-200 transition-opacity duration-300 ease-in-out opacity-100">
              {renderProductos(subcategorias[firstKey] || [])}
            </div>
          ) : (
            <>
              <div
                className={clsx(
                  "flex flex-col gap-2 px-4 min-w-[180px] max-w-[200px] transition-opacity duration-300 ease-in-out",
                  activeSubcategory && "border-r border-gray-200",
                  {
                    "opacity-100": activeSubcategory,
                    "opacity-50": !activeSubcategory,
                  }
                )}
              >
                {orderedSubKeys.map((subcat) => (
                  <div
                    key={subcat}
                    onMouseEnter={() => handleSubcategoryHover(subcat)}
                    className={clsx(
                      "cursor-pointer p-3 rounded-xl font-inter text-base text-gray-600 font-normal hover:bg-blue-50 transition-colors duration-200",
                      {
                        "bg-blue-100 font-medium text-primary-1":
                          activeSubcategory === subcat,
                      }
                    )}
                  >
                    {subcat}
                  </div>
                ))}
              </div>
              {activeSubcategory && (
                <div className="pl-4 border-l border-gray-200 transition-opacity duration-300 ease-in-out opacity-100">
                  {renderProductos(subcategorias[activeSubcategory] || [])}
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
