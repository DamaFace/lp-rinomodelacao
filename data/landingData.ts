import labialAntes1 from '@/assets/ante-x-depois-img/labial-1.1.png'
import labialDepois1 from '@/assets/ante-x-depois-img/labial-1.2.png'
import labialAntes2 from '@/assets/ante-x-depois-img/labial-2.1.png'
import labialDepois2 from '@/assets/ante-x-depois-img/labial-2.2.png'
import labialAntes3 from '@/assets/ante-x-depois-img/labial-3.1.png'
import labialDepois3 from '@/assets/ante-x-depois-img/labial-3.2.png'
import labialAntes4 from '@/assets/ante-x-depois-img/labial-4.1.png'
import labialDepois4 from '@/assets/ante-x-depois-img/labial-4.2.png'

// Dados para o carrossel (antes x depois)
export const carrosselData = [
  {
    id: 1,
    imagem_antes_url: labialAntes1.src,
    imagem_depois_url: labialDepois1.src,
    legenda: "Transformação suave e natural com preenchimento labial"
  },
  {
    id: 2,
    imagem_antes_url: labialAntes2.src,
    imagem_depois_url: labialDepois2.src,
    legenda: "Harmonização completa realçando a beleza natural"
  },
  {
    id: 3,
    imagem_antes_url: labialAntes3.src,
    imagem_depois_url: labialDepois3.src,
    legenda: "Resultado equilibrado e sofisticado"
  },
    {
    id: 4,
    imagem_antes_url: labialAntes4.src,
    imagem_depois_url: labialDepois4.src,
    legenda: "Resultado equilibrado e sofisticado"
  }
];
// depoimentos
export const depoimentosData = [
  {
    id: 1,
    nome_paciente: "Ana F.",
    foto_paciente_url: labialDepois3.src,
    depoimento: "Eu sempre me sentia muito insegura por conta do formato do meu nariz. A rinomodelação que fiz na DamaFace transformou meu perfil de forma natural e equilibrada. Estou muito mais confiante!"
  },
  {
    id: 2,
    nome_paciente: 'Ana Maria',
    foto_paciente_url: labialDepois3.src,
    depoimento: "Meu nariz tinha pequenas imperfeições que me incomodavam. Após a rinomodelação na DamaFace, meu rosto ficou mais harmônico e meu sorriso muito mais bonito."
  },
  {
    id: 3,
    nome_paciente: "Luiza",
    foto_paciente_url: labialDepois3.src,
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
    pergunta: "O preenchimento labial dói?",
    resposta: "O preenchimento labial é realizado com agulhas ou cânulas finas e geralmente causa apenas um leve desconforto. Utilizamos anestesia local para garantir o máximo de conforto durante todo o procedimento."
  },
  {
    id: 2,
    pergunta: "Quanto tempo dura o efeito do preenchimento labial?",
    resposta: "A duração média do preenchimento labial é de 8 a 12 meses, podendo variar conforme o metabolismo individual, o tipo de ácido hialurônico utilizado e os cuidados pós-procedimento."
  },
  {
    id: 3,
    pergunta: "Quando vejo o resultado do preenchimento labial?",
    resposta: "Os resultados do preenchimento labial são visíveis imediatamente após a aplicação, mas o efeito final é percebido após cerca de 7 dias, quando o inchaço inicial diminui."
  },
  {
    id: 4,
    pergunta: "Qual é o tempo de recuperação após o preenchimento labial?",
    resposta: "A recuperação do preenchimento labial é rápida. Pequenos inchaços ou hematomas podem ocorrer, mas desaparecem em poucos dias. É recomendado evitar exercícios físicos intensos e exposição ao sol nas primeiras 24 horas."
  },
  {
    id: 5,
    pergunta: "O preenchimento labial é seguro?",
    resposta: "Sim, desde que realizado por profissionais qualificados e utilizando produtos aprovados pela Anvisa. Na DamaFace seguimos protocolos rigorosos para garantir sua segurança e resultados naturais."
  },
  {
    id: 6,
    pergunta: "Preciso fazer exames antes de realizar o preenchimento labial?",
    resposta: "Na maioria dos casos não há necessidade de exames prévios. Realizamos uma avaliação completa para entender seus objetivos e verificar se o preenchimento labial é indicado para você."
  }
];

export const unidadesData = [
  { value: "vinhedo", label: "Unidade 1 - Vinhedo" },
  { value: "jaguariuna", label: "Unidade 2 - Jaguariúna" },
  { value: "cerquilho", label: "Unidade 3 - Cerquilho" }
];
