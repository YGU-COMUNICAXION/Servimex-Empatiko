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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  };

  const handleCategoryClick = (categoria: string) => {
    setActiveCategory((prev) => (prev === categoria ? null : categoria));
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcat: string) => {
    setActiveSubcategory(subcat);
  };

  const getSubcategories = (categoria: string) => {
    const productos = data[categoria] ?? [];
    const subcatMap: { [sub: string]: Producto[] } = {};

    for (const p of productos) {
      const parts = p.id.split("/");
      const subcat = parts.length > 1 ? parts[0] : "default";
      if (!subcatMap[subcat]) subcatMap[subcat] = [];
      subcatMap[subcat].push(p);
    }

    return subcatMap;
  };

  const renderProductos = (productos: Producto[]) => (
    <div
      className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 transition-all
      duration-300 max-h-[400px] overflow-y-auto min-w-[250px] xl:min-w-[300px]"
    >
      {productos.map((producto) => (
        <a
          key={producto.id}
          href={`/productos/${producto.data.slug}`}
          className="block text-center hover:shadow-md hover:bg-gray-50 p-2 rounded-md transition"
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

  const subcategorias = activeCategory ? getSubcategories(activeCategory) : {};
  const soloDefault =
    Object.keys(subcategorias).length === 1 && subcategorias["default"];

  return (
    <div className="hidden lg:block relative">
      <button
        onClick={toggleMenu}
        className="text-primary-1 uppercase font-normal hover:cursor-pointer transition-all duration-300"
      >
        Productos
      </button>

      {isOpen && (
        <div
          className={clsx(
            "absolute top-full left-0 bg-white shadow-xl z-50 rounded-xl p-4 flex transition-all duration-500 overflow-hidden"
            // activeCategory && soloDefault
            //   ? "max-w-[880px]"
            //   : activeCategory && activeSubcategory
            //   ? "max-w-[1000px]"
            //   : activeCategory
            //   ? "max-w-[600px]"
            //   : "max-w-[560px]"
          )}
        >
          {/* Categorías */}
          <div
            className={clsx(
              "flex flex-col gap-2 pr-4 min-w-[300px] xl:min-w-[350px] max-w-[400px]",
              activeCategory && "border-r border-gray-200"
            )}
          >
            {Object.keys(data).map((categoria) => (
              <div
                key={categoria}
                onClick={() => handleCategoryClick(categoria)}
                className={clsx(
                  `cursor-pointer p-5 rounded-xl
                  text-secondary-1 text-start text-base font-inter font-medium hover:bg-blue-50 transition`,
                  {
                    "bg-blue-100 font-semibold": activeCategory === categoria,
                  }
                )}
              >
                {categoryLabels[categoria] ?? categoria}
              </div>
            ))}
          </div>

          {/* Subcategorías o productos directamente */}
          {activeCategory &&
            (() => {
              if (soloDefault) {
                return (
                  <div className="pl-4 border-l border-gray-200">
                    {renderProductos(subcategorias["default"])}
                  </div>
                );
              }

              return (
                <>
                  <div
                    className={clsx(
                      "flex flex-col gap-2 px-4 min-w-[180px] max-w-[200px]",
                      activeSubcategory && "border-r border-gray-200"
                    )}
                  >
                    {Object.keys(subcategorias).map((subcat) => (
                      <div
                        key={subcat}
                        onClick={() => handleSubcategoryClick(subcat)}
                        className={clsx(
                          `cursor-pointer p-3 rounded-xl font-inter text-base
                          text-gray-600 font-light hover:bg-blue-50 transition`,
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
                    <div className="pl-4 border-l border-gray-200">
                      {renderProductos(subcategorias[activeSubcategory])}
                    </div>
                  )}
                </>
              );
            })()}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
