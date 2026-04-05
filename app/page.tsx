import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import VideoDemo from '@/components/VideoDemo'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <About />
        <VideoDemo />
        <Download />
      </main>
      <Footer />
    </>
  )
}
