import rinoAntes1 from 'public/antes-depois-img/rino-1.1.png'
import rinoDepois1 from 'public/antes-depois-img/rino-1.2.png'
import rinoAntes2 from 'public/antes-depois-img/rino-2.1.png'
import rinoDepois2 from 'public/antes-depois-img/rino-2.2.png'
import rinoAntes3 from 'public/antes-depois-img/rino-3.1.png'
import rinoDepois3 from 'public/antes-depois-img/rino-3.2.png'

import depoimento1 from 'public/depoimentos/depoimento-1.png'
import depoimento2 from 'public/depoimentos/depoimento-2.png'
import depoimento3 from 'public/depoimentos/depoimento-3.png'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: rinoAntes1.src,
    imagem_depois_url: rinoDepois1.src,
    legenda: "Transformação suave e natural com preenchimento labial"
  },
  {
    id: 2,
    imagem_antes_url: rinoAntes2.src,
    imagem_depois_url: rinoDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: rinoAntes3.src,
    imagem_depois_url: rinoDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];
// depoimentos
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Patrícia C.",
    foto_paciente_url: depoimento1.src,
    depoimento: "Eu sempre me sentia muito insegura por conta do formato do meu nariz. A rinomodelação que fiz na DamaFace transformou meu perfil de forma natural e equilibrada. Estou muito mais confiante!"
  },
  {
    id: 2,
    nome_paciente: 'Fernanda A.',
    foto_paciente_url: depoimento2.src,
    depoimento: "Meu nariz tinha pequenas imperfeições que me incomodavam. Após a rinomodelação na DamaFace, meu rosto ficou mais harmônico e meu sorriso muito mais bonito."
  },
  {
    id: 3,
    nome_paciente: "Carla P.",
    foto_paciente_url: depoimento3.src,
    depoimento: "A rinomodelação feita na DamaFace foi incrível. O resultado ficou natural, sem exageros, e mudou totalmente a minha autoestima."
  }
]

// Dados para a seção "Por que escolher a DamaFace?"
export const diferenciaisData = [
  {
    id: 1,
    titulo: "Naturalidade e Exclusividade",
    descricao: "Cada procedimento é personalizado para valorizar seus traços únicos — sem exageros, apenas realçando o que há de melhor em você."
  },
  {
    id: 2,
    titulo: "Segurança e Qualidade",
    descricao: "Utilizamos produtos certificados pela ANVISA e aplicamos técnicas avançadas para garantir sua segurança em todas as etapas."
  },
  {
    id: 3,
    titulo: "Experiência Comprovada",
    descricao: "Mais de 8 anos de experiência e 2.500 pacientes satisfeitos atestam nossa credibilidade."
  },
  {
    id: 4,
    titulo: "Acompanhamento Personalizado",
    descricao: "Cuidamos de você antes, durante e depois do procedimento para garantir sua total satisfação."
  }
];

export const faqData = [
  {
    id: 1,
    pergunta: "A rinomodelação dói?",
    resposta: "A rinomodelação é realizada com agulhas ou cânulas finas e geralmente causa apenas um leve desconforto. Utilizamos anestesia local para garantir maior conforto durante todo o procedimento."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o efeito da rinomodelação?",
    resposta: "O resultado da rinomodelação costuma durar de 12 a 18 meses, dependendo do metabolismo individual, do tipo de produto utilizado e dos cuidados após o procedimento."
  },
  {
    id: 3,
    pergunta: "Quando vejo o resultado da rinomodelação?",
    resposta: "Os resultados da rinomodelação são visíveis imediatamente após a aplicação, mas o efeito final é percebido em torno de 7 a 15 dias, quando o inchaço inicial diminui completamente."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após a rinomodelação?",
    resposta: "A recuperação é rápida e não exige afastamento das atividades. Pequenos inchaços ou hematomas podem ocorrer, mas desaparecem em poucos dias. Evite exercícios físicos intensos e exposição ao sol nas primeiras 24 horas."
  },
  {
    id: 5,
    pergunta: "A rinomodelação é segura?",
    resposta: "Sim, quando realizada por profissionais qualificados e utilizando produtos aprovados pela Anvisa. Na DamaFace seguimos protocolos rigorosos para garantir segurança e resultados naturais e harmoniosos."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de realizar a rinomodelação?",
    resposta: "Na maioria dos casos, não são necessários exames prévios. Realizamos uma avaliação completa para entender seus objetivos e verificar se a rinomodelação é indicada para você."
  },
  {
    id: 7,
    pergunta: "A rinomodelação pode corrigir imperfeições no nariz sem cirurgia?",
    resposta: "Sim, a rinomodelação é um procedimento não cirúrgico que corrige pequenas imperfeições, eleva a ponta, suaviza desníveis e harmoniza o nariz com o restante do rosto, oferecendo resultados naturais."
  },
  {
    id: 8,
    pergunta: "Quanto custa a rinomodelação em Vinhedo?",
    resposta: "O valor do procedimento varia conforme a necessidade e técnica utilizada. Durante a avaliação personalizada na DamaFace, explicamos todos os detalhes e apresentamos o investimento exato."
  }
];


export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
