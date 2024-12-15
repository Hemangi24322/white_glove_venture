import HeaderMenuBar from '@/components/header-menu-bar';
import HeroSection from '@/components/hero-section';
import IntroPage from '@/components/intro-page';
import NetworkDiagram from '@/components/network-diagram';
import ValueDrivenServices from '@/components/unique-value-proposition';
import FAQ from '@/components/faq';
import Quiz from '@/components/quiz';
import GetInTouch from '@/components/get-in-touch';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <main className="flex-grow">
        <HeaderMenuBar />
        <div className="container mx-auto px-4 lg:px-8">
          <section className="flex py-12">
            <HeroSection />
          </section>

          <section className="py-12">
            <IntroPage />
          </section>

           <section className="py-12">
            <NetworkDiagram />
          </section> 

          <section className="py-12">
            <ValueDrivenServices />
          </section>

          <section className="py-12">
            <FAQ />
          </section>

          <section className="py-12">
            <Quiz />
          </section>

          <section className="py-12">
            <GetInTouch />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
