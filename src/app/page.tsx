import { RiHandHeartFill } from "react-icons/ri"

export default function Home() {
  return (
    <main className="h-screen items-start flex flex-col justify-center">
      <div className="w-[632px] flex flex-col gap-y-8 ml-44">
        <RiHandHeartFill className="w-14 h-14 border-2 rounded-3xl border-[#262626] p-2 fill-green-500 bg-gradient-to-br from-[#2C2C2C]" />
        <p>Registrar os dados dos funcionários é essencial para um gerenciamento eficiente da equipe. Agora, com o CRUD de banco de funcionários baseado no GitHub, tornou-se ainda mais simples e prático.</p>
        <div>botoes</div>
      </div>
    </main>
  )
}
