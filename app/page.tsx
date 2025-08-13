import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Carrossel from '@/components/Carrossel';
import Depoimentos from '@/components/Depoimentos';
import LabialInfo from '@/components/LabialInfo';
import PorqueEscolher from '@/components/PorqueEscolher';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget/ChatWidget';

export const metadata = {
  title: 'DamaFace Vinhedo – Rinomodelação em Vinhedo/SP | Nariz Harmonioso e Natural',
  description: 'DamaFace em Vinhedo/SP — referência em rinomodelação não cirúrgica para corrigir pequenas imperfeições, equilibrar o perfil e valorizar a harmonia facial. +8 anos de experiência e +3.000 procedimentos realizados. Resultados naturais e seguros. Agende sua avaliação!',
  keywords: 'rinomodelação Vinhedo, nariz sem cirurgia, harmonização nasal, correção imperfeições nariz, nariz natural Vinhedo, clínica estética Vinhedo, DamaFace, nariz harmônico',
  openGraph: {
    title: 'DamaFace Vinhedo – Rinomodelação Não Cirúrgica',
    description: 'Clínica especializada em rinomodelação em Vinhedo/SP. Procedimento seguro e personalizado para corrigir imperfeições do nariz sem cirurgia. Agende sua avaliação!',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ChatWidget />
      <Carrossel />
      <Depoimentos />
      <LabialInfo />
      <PorqueEscolher />
      <FAQ />
      <Footer />
    </main>
  );
}
