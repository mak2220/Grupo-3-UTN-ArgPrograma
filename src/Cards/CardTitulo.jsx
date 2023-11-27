import React from "react";

function CardTitulo({enviarTitulo}) {
    return(
        <>
            <section className="">
                <div className="center">
                    <h1 className="titulo">
                        {enviarTitulo}                        
                    </h1>
                </div>
            </section>
        </>
    )
}

export default CardTitulo