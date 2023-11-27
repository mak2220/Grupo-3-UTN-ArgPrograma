import { useState, useRef } from "react"
import CardTitulo from "../Cards/CardTitulo";
import CardEmpresa from "../Cards/CardEmpresa";
import CardDestinatario from "../Cards/CardDestinatario";
import CardDedicatoria from "../Cards/CardDedicatoria";

function Formulario(){
    
    const inputEmpresa = useRef();
    const inputTitulo = useRef();
    const inputDestinatario = useRef();
    const textArea = useRef();

    const [datos, datosPasados] = useState()
    const [datos2, datosPasados2] = useState()
    const [datos3, datosPasados3] = useState()
    const [datos4, datosPasados4] = useState()
    
    const [noteText, setNoteText] = useState('hidden');
    const [noteText2, setNoteText2] = useState('');
    
    
    const showCard = (e) =>{
        e.preventDefault();
        if( inputEmpresa.current.value ==""||
            inputTitulo.current.value ==""||
            inputDestinatario.current.value ==""||
            noteBg ==""){
            alert("Todos los campos son obligatorios")
        }else{
            setNoteText2((noteText2)=>"hidden")
            setNoteText((noteText)=>"show")
        }
        
    }
    
    const [noteBg, setNoteBg] = useState('');
    
    const handleInput= (e) =>{
        let index = e.target.selectedIndex;
        console.log (e.target.options[index].value);
        setNoteBg((noteBg)=>e.target.options[index].value)    
    }

    
    const enviarEmpresa = () =>{
        datosPasados(inputEmpresa.current.value)
    }
    
    const enviarTitulo = () =>{
        datosPasados2(inputTitulo.current.value)
    }
    const enviarDestinatario = () =>{
        datosPasados3(inputDestinatario.current.value)
    }

    const enviarTextArea = (e) =>{
        datosPasados4(e.target.value)
    }

return(
        <>
            <section className={ noteText2 }>

                <form className="principal">
                    <label htmlFor="name">Nombre de la Empresa</label>
                    <input  type="text" 
                            name="name"
                            ref={inputEmpresa}
                            onChange={enviarEmpresa}
                            maxLength={30}
                            >
                    </input>
                    
                    <label htmlFor="logo">Titulo de la Tarjeta</label>
                    <input  type="text" 
                            name="logo"
                            ref={inputTitulo}
                            onChange={enviarTitulo}
                            maxLength={30}
                            >
                    </input>
                    
                    <label htmlFor="destinatarios">Destinatario</label>
                    <input  type="text" 
                            name="destinatarios"
                            ref={inputDestinatario}
                            onChange={enviarDestinatario}
                            maxLength={30}
                            >
                    </input>
                    
                    <label htmlFor="motivos">Motivos:</label>
                    <select name="motivos"
                            onChange={handleInput}
                            >
                        <option value="bg-empty"> </option>
                        <option value="bg-holidays">Feliz Navidad y Año Nuevo</option>
                        <option value="bg-aniversary">Cena Aniversario</option>
                        <option value="bg-jobReunion">Reunión de Trabajo</option>
                    </select>
                    
                    <textarea   name="dedicatoria" 
                                placeholder={"Escriba la dedicatoria"}
                                ref={textArea}
                                value={datos4} 
                                onChange={enviarTextArea}
                                maxLength={100}
                                rows={10} 
                                cols={40}

                    />
                    
                    <button onClick={showCard}
                            className="btn"
                            >Generar Tarjeta</button>
                </form>
            </section>
            <section className={noteText}>
                    <div className={noteBg}>
                        <CardDestinatario enviarDestinatario={datos3}></CardDestinatario>
                        <CardTitulo enviarTitulo={datos2}></CardTitulo>
                        <CardDedicatoria enviarTextArea={datos4}></CardDedicatoria>
                        <CardEmpresa enviarEmpresa={datos}></CardEmpresa>
                    </div>
                    <div className="center">
                        <button onClick={() => window.location.reload()}
                                className="btnCenter"
                                >Generar otra tarjeta</button>
                    </div>
            </section>
            
        </>
    )
    
}

export default Formulario