import React from 'react'
import Navbar from '../components/Navbar'
import ChildSupport from '../components/childSupport'
import Footer from '../components/Footer'

function ChildSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-12">
          <ChildSupport />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ChildSupportPage