import { useState } from "react"
import "./style.css"


export default function Dashboard() {
  const [dia, setDia] = useState()
  const [horario, setHorario] = useState()
  return (
    <div>
      <form >
        <label htmlFor="dia">Dia</label>
        <select id="dia" name="dia" value={dia} onChange={(e) => setDia(e.target.value)}>
          <option value="">Selecione um dia</option>
          <option value="segunda">Segunda</option>
          <option value="terça">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sábado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>

        <label htmlFor="horario">Horário</label>
        <input
          type="time"
          id="horario"
          name="horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}