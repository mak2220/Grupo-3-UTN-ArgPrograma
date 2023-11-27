import React from "react";

function CardDedicatoria({enviarTextArea}) {
    return(
        <>
            <section className="">
                <div className="center">
                    <p className="dedicatoriaCenter">
                        {enviarTextArea}                        
                    </p>
                </div>
            </section>
        </>
    )
}

export default CardDedicatoria