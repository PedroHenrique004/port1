import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus
      explicabo commodi vitae eos voluptatum ipsam assumenda numquam
      exercitationem tempore ad, veritatis illum similique, itaque quibusdam aut
      inventore?
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=PedroHenrique004&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PedroHenrique004&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
