import type { Project } from "../types";
import KingLogo from "../assets/kingofmath.jpeg"
import WebEstoque from "../assets/webEstoque.jpg"
const projects: Project[] = [
  {
    id: "p1",
    title: "Gerenciador de Restaurante",
    description: `Sistema de gerenciamento para restaurantes desenvolvido como projeto de conclusão de curso (TCC), com controle de estoque, comandas, gerenciamento de funcionários e estatísticas do negócio.\n
    Para a constituição do projeto, foram utilizadas as linguagens de programação C# ASP.net, Ionic Angular, JavaScript, TypeScript, MySQL WorkBench, além das linguagens de marcação HTML 5 e CSS, para a construção e estruturação visual da interface e da ferramenta Figma para a criação do Design e Logotipo.`,
    image: WebEstoque,
    tech: [ "C# ASP.NET", "MySQL","Ionic Angular", "TypeScript"],
    demo: "https://github.com/ricardo08jr/restaurant-management-system?tab=readme-ov-file#solucao",
    repo: "https://github.com/ricardo08jr/restaurant-management-system?tab=readme-ov-file#sum%C3%A1rio",
    details: "Este projeto foi feito como TCC... "
  },
  {
    id: "p2",
    title: "King of Math | Enigma e Lógica",
    description: `O King of Math é um jogo mobile para Android que desafia os jogadores a reconhecer padrões, resolver enigmas e enfrentar quebra-cabeças matemáticos de diferentes níveis. Disponível na Google Play Store com classificação livre, o jogo foi criado para que pessoas de todas as idades possam exercitar a lógica e desenvolver raciocínio de forma divertida e descontraída.`,
    image: KingLogo,
    tech: ["Ionic Framework","Angular","+500 Downloads"],
    demo: "https://play.google.com/store/apps/details?id=com.kingssoftware.kingofmath&pcampaignid=web_share&pli=1",
    repo: "",
    video: "https://www.youtube.com/watch?v=R6BOlvQ1uR0",
    details: `Meu maior propósito sempre foi estimular o raciocínio lógico e a resolução de problemas. O projeto começou no Ensino Médio com amigos, evoluindo de uma brincadeira para algo com grande potencial, utilizando tecnologias e APIs para melhorar o jogo. `
  }
];

export default projects;
