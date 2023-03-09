import { useState } from "react";
import style from "./Formularios.module.css";

export function Formulario (props){
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("");
    const [valido, setValido] = useState(true);

    const handleNombre = (e) => {
        setValido(true)
        setNombre(e.target.value)};

    const handleColor = (e) => {
        setValido(true)
        setColor(e.target.value)
    };

    function validar(nombre,color){
        if(nombre === "" || color === ""){
            console.log("entro aca");
            return false;
        }
        const nombreValido = nombre.replace(/^\s+|\s+$/gm,'');
        if(nombreValido.length < 3 || color.length < 6){
            return false;
        }
        return true;
    }

    function handleDatos(e){
        e.preventDefault();
        if(validar(nombre,color)){
            props.onSubmit({nombre,color,valido});
        } else {
            setValido(false);
        }
    }

    return (
    <>
        <form onSubmit={handleDatos} >  
        <div style={style.formulario}>
            <div>
                <label htmlFor="nombre">Nombre</label>  
                <input type="text" id="nombre" value={nombre} onChange={handleNombre} />
            </div>

            <div>
                <label htmlFor="color">Color</label>
                <input type="text" id="color" value={color} onChange={handleColor}/>
            </div>
            <div>
                <button type="submit">ENVIAR</button>
            </div>
            <div>
                {valido ? "" : "Por favor chequea que la informacion sea correcta"}
            </div>
            </div>
        </form>  
    </>
    )
}