import React from "react"

function CardEmpresa({enviarEmpresa}){
    return(
        <>
            <section className="holidays">
                <div className="center">
                    <h1 className="empresa">
                        {enviarEmpresa}
                        
                    </h1>
                </div>
            </section>
        </>
    )
}

export default CardEmpresa