import './CampoTexto.css'

import { ReactElement } from 'react'

interface CampoTextoProps{
    placeholder: ReactElement | string
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado, label, placeholder,valor, obrigatorio = false, tipo = 'text'} : CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => { 
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                placeholder={placeholderModificada}
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio}
                type ={tipo}
            />
        </div>
    )
}

export default CampoTexto