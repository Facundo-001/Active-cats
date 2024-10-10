import React from 'react'

const Mi_nivel = () => {
    const Colores_Programacion={
        Html: 'text-danger',
        Css: 'text-info',
        React: 'text-warning',
        Js: 'text-warning'
        
    }
    return (
        <div className='d-flex flex-column m-5 justify-content-center' style={{}}>
            <h2 className='m-auto' style={{color: '#1aff40', textShadow: '0 0 10px #1aff40'}}>Mi nivel segun yo en estos lenguajes</h2>
            <h4 className={Colores_Programacion.Html} style={{textShadow: '0 0 10px'}}>Html</h4>
            <div className="progress rounded-1" role="progressbar" style={{height: '23px'}} aria-label="Animated striped example" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '99%'}}>99%</div>
            </div>
            <h4 className={Colores_Programacion.Css} style={{textShadow: '0 0 10px'}}>Css</h4>
            <div className="progress" role="progressbar" style={{height: '23px'}} aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '100%'}}>100%</div>
            </div>
            <h4 className={Colores_Programacion.React} style={{textShadow: '0 0 10px'}}>React</h4>
            <div className="progress" role="progressbar" style={{height: '23px'}} aria-label="Animated striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '90%'}}>90%</div>
            </div>
            <h4 className={Colores_Programacion.Js} style={{textShadow: '0 0 10px'}}>Js</h4>
            <div className="progress" role="progressbar" style={{height: '23px'}} aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: '80%'}}>80%</div>
            </div>
        </div>
    )
}

export default Mi_nivel