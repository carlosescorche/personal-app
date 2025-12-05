import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { WelcomeSection } from '@/components/home/WelcomeSection'

const Page = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <WelcomeSection />
      <Footer />
    </div>
  )
}

export default Page
