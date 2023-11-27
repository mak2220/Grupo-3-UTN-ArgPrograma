import React from "react";

function CardDestinatario({enviarDestinatario}) {
    return(
        <>
            <section>
                <div className="center">
                    <h1 className="destinatario">
                        {enviarDestinatario}                        
                    </h1>
                </div>
            </section>
        </>
    )
}

export default CardDestinatario