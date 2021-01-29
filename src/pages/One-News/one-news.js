import React, {useEffect} from 'react';
import ThisHeader from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import RequestContact from '../../Components/Request-Contact/request-contact';
import newIMG1 from "../../Images/news-img.jpg";
import './one-news.css';


const OneNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="this-page-one-news-container">
      <ThisHeader/>
      <div className="this-title-header">Notícias</div>
      <div className="this-page-one-news-container-content">
        <h4>
          COMO MANTER A SEGURANÇA DURANTE A VOLTA DOS COLABORADORES AO AMBIENTE DE TRABALHO
        </h4>
        <p>
          <small>18/01/2021</small>
        </p>
        <img src={newIMG1} alt="Imagem Notícia"/>
        <p>As empresas no Brasil estão começando a voltar ao escritório e algumas já planejam fazê-lo nos próximos meses.</p>
        <p>Não há um guia de instruções claro para os desafios à frente, especialmente em meio às incertezas em torno da evolução da pandemia de COVID no Brasil.</p>
        <p>Organizações em todos os setores têm alguns desafios urgentes a superar quando se fala da volta ao trabalho.</p>
        <p>Muitas empresas e funcionários estão apreensivos quanto à segurança para a volta aos escritórios e por conta disso, cada vez mais organizações estão aderindo ao trabalho remoto e principalmente, adotando tecnologias para gerenciar e facilitar o dia a dia nas empresas.</p>
        <p>Algumas organizações já consideram adotar um modelo de trabalho 100% remoto, pois permite que os colaboradores sejam mais produtivos, fornece flexibilidade e evita o deslocamento para o escritório e o contato externo.</p>
        <p><span>A adoção do modelo híbrido de trabalho, uma combinação de trabalho remoto e trabalho in loco, continuará a aumentar no mundo pós-COVID.&nbsp;</span></p>
        <p><span >Segundo pesquisa realizada pela Zoho, empresa de softwares empresariais, com mais de mil brasileiros, 20% dos respondentes terá a oportunidade de trabalhar remotamente, a partir de agora e 13%.</span></p>
        <p><b>Mudança do trabalho remoto</b></p>
        <p>Com o trabalho remoto, um dos principais aspectos de negócios que foram consideravelmente alterados é o gerenciamento de desempenho e diversas organizações já começaram a medir o trabalho realizado em vez de horas trabalhadas.</p>
        <p>Algumas empresas estão fazendo avaliações de desempenho como um processo contínuo.</p>
        <p>O feedback contínuo se tornará um aspecto essencial da gestão de funcionários, o que ajudará os trabalhadores a orientar claramente suas responsabilidades e expectativas de trabalho quando trabalham remotamente.</p>
        <p>À medida que o trabalho remoto continua a decolar, a adoção de tecnologias de RH baseadas na nuvem aumentará para fornecer uma boa experiência aos funcionários enquanto trabalham remotamente e para manter os funcionários engajados e produtivos.</p>
        <p><span>Para facilitar a contratação virtual, integração, aprendizagem e desenvolvimento, gestão de desempenho e tomada de decisão inteligente, muitas organizações irão adotar tecnologia de RH baseada em nuvem.</span></p>
        <p><span>Habilidades como comunicação, colaboração, trabalho em equipe e adaptabilidade terão mais importância durante a avaliação dos candidatos.&nbsp;</span></p>
        <p><span >Diversidade e inclusão se tornarão parte integrante da estratégia de recrutamento e muitas organizações serão capazes de melhorar a diversidade da força de trabalho com trabalho remoto.&nbsp;</span></p>
        <p><span >Do ponto de vista do candidato, o melhor talento buscará empresas que ofereçam trabalho remoto, políticas flexíveis, melhor cobertura de saúde e possibilitem mais tempo para a família e menor custo de vida.</span></p>
        <p><span >Vantagens como lanchonetes gourmet, academias, salas de jogos, cápsulas de sesta e lanches gratuitos ilimitados perderão seu apelo.</span></p>
        <p><b>O ambiente de trabalho</b></p>
        <p>Algumas profissões não permitem trabalhar remotamente, então, como as empresas gerenciarão os riscos quando se trata de admitir pessoas no espaço de trabalho?</p>
        <p><span >É uma questão que alguns estão abordando com um processo de check-in mais detalhado, como pedir aos colaboradores que relatem viagens recentes, resultados de testes de Covid-19, sintomas ou exposição a alguém que esteve doente.</span></p>
        <p><span >Existem diversos softwares surgindo para ajudar as empresas a fazerem esse gerenciamento de informações, dando às organizações uma chance melhor de evitar riscos.</span></p>
        <p><span >Com novas informações se tornando disponíveis todos os dias sobre a Covid-19, é importante comunicar-se regularmente com os funcionários sobre as medidas que estão sendo tomadas para mantê-los seguros e manter o bom funcionamento dos negócios.</span></p>
        <p><span >As informações sobre licenças remuneradas, seguro saúde e políticas de trabalho em casa devem ser atualizadas e fáceis de encontrar no portal da intranet.</span></p>
        <p><span >Atualizações regulares por e-mail com as últimas notícias e quaisquer mudanças de política são normais.&nbsp;</span></p>
        <p><span >Ajudar as pessoas a se manterem informadas e estabelecer um diálogo com a administração também pode ajudar muito na construção de confiança.</span></p>
        <p><b>Mantendo uma cultura vibrante no local de trabalho e a privacidade</b></p>
        <p>A maioria das empresas está focada nos obstáculos mais imediatos de reabertura, como garantir a saúde e a segurança de seus funcionários, mas também é um desafio tentar descobrir como manter o ânimo enquanto o escritório se enche de novo.&nbsp;</p>
        <p><span >Acima de tudo, as empresas precisam estar em sintonia com sua empatia.</span></p>
        <p><span >Os funcionários têm preocupações bem fundamentadas sobre o que um retorno ao trabalho.</span></p>
        <p><span >Enfatizar a segurança, privacidade e transparência antes do desempenho pode ajudar a estabelecer a confiança de que todas as organizações precisam para seguir em frente, juntas.</span></p>
        <p><span >Com a entrada em vigor da LGPD, quando se trata de exames de saúde e prontuários médicos, os funcionários têm direito á privacidade.</span></p>
        <p><span >Todas as informações médicas sobre um determinado funcionário, incluindo resultados de verificações diárias de temperatura, devem ser armazenadas em um arquivo separado do arquivo pessoal do funcionário para manter a confidencialidade.</span></p>
        <p><span >Se houver suspeita ou confirmação de que um funcionário tem Covid-19, informe todos os funcionários que foram potencialmente expostos e instrua-os a ficar em casa por 14 dias sem revelar a identidade do indivíduo infectado.&nbsp;</span></p>
        <div><i>Fonte: Site - Jornal Contábil<br/><a target="blank" href="https://www.jornalcontabil.com.br/como-manter-a-seguranca-durante-a-volta-dos-colaboradores-ao-ambiente-de-trabalho/">https://www.jornalcontabil.com.br/como-manter-a-seguranca-durante-a-volta-dos-colaboradores-ao-ambiente-de-trabalho/</a></i></div>
      </div>
      <RequestContact/>
      <Footer/>
    </div>
  );
}

export default OneNews;