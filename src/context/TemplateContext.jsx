import { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

// Estado inicial básico, para que la app no falle aunque no uses creación de sitios
const initialContent = {
  titulo: "",
  subtitulo: "",
  descripcion: "",
  menu: [],
  footer: "",
  imagenPrincipal: "",
};

export const TemplateProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [templateSeleccionado, setTemplateSeleccionado] = useState(null);
  const [contenido, setContenido] = useState(initialContent);

  return (
    <TemplateContext.Provider
      value={{
        prompt,
        setPrompt,
        templateSeleccionado,
        setTemplateSeleccionado,
        contenido,
        setContenido,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);
