'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, FileText } from 'lucide-react'
import { useState } from 'react'

const documents = [
  {
    id: 1,
    title: 'Agreement Form',
    description: 'Standard rental terms and conditions for all customers',
    filename: 'terms-and-conditions.pdf',
  },
]

export function Documents() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async (filename: string) => {
    try {
      setDownloading(true)
      
      // Check if file exists
      const response = await fetch(`/documents/${filename}`, {
        method: 'HEAD' // Just check if file exists without downloading content
      })
      
      if (!response.ok) {
        throw new Error(`File not found: ${filename}`)
      }
      
      // Create a temporary link element
      const link = document.createElement('a')
      link.href = `/documents/${filename}`
      link.download = filename
      link.target = '_blank' // Open in new tab as fallback
      
      // Append to body
      document.body.appendChild(link)
      
      // Trigger the download
      link.click()
      
      // Clean up
      document.body.removeChild(link)
      
      console.log(`Download initiated for: ${filename}`)
      
    } catch (error) {
      console.error('Download error:', error)
      alert(`Unable to download ${filename}. Please check if the file exists.`)
      
      // Alternative: Open in new tab
      window.open(`/documents/${filename}`, '_blank')
      
    } finally {
      setDownloading(false)
    }
  }

  return (
    <section id="documents" className="py-16 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Rental Documents
          </h2>
          <p className="text-muted-foreground max-w-2xl text-balance">
            Download our official rental documents. Review terms and agreements before making your rental inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-md">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl text-foreground">{doc.title}</CardTitle>
                  <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{doc.description}</p>
                <button
                  onClick={() => handleDownload(doc.filename)}
                  disabled={downloading}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloading ? (
                    'Downloading...'
                  ) : (
                    <>
                      <Download size={18} />
                      Download PDF
                    </>
                  )}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}