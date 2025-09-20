import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Rocket, Globe, Presentation, MessageSquare, ExternalLink, CheckCircle, ArrowRight, Play } from 'lucide-react'

const Day3Module = ({ onComplete, onNext, onUpdateData, onUpdateLandingPage, onUpdatePitchDeck, data }) => {
  const [formData, setFormData] = useState({
    landingPageUrl: '',
    pitchSlide1: data.pitchSlide1 || '',
    pitchSlide2: data.pitchSlide2 || '',
    pitchSlide3: data.pitchSlide3 || '',
    reflection1: data.reflection1 || '',
    reflection2: data.reflection2 || '',
    reflection3: data.reflection3 || '',
    reflection4: data.reflection4 || '',
    reflection5: data.reflection5 || ''
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    
    if (field === 'landingPageUrl') {
      onUpdateLandingPage(value)
    } else if (field.startsWith('pitch')) {
      // Update pitch deck data
      const pitchData = {
        slide1: newData.pitchSlide1,
        slide2: newData.pitchSlide2,
        slide3: newData.pitchSlide3
      }
      onUpdatePitchDeck(pitchData)
    } else {
      onUpdateData(newData)
    }
  }

  const handleStepComplete = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
      onComplete()
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.landingPageUrl.length > 10
      case 2: return formData.pitchSlide1.length > 10 && formData.pitchSlide2.length > 10 && formData.pitchSlide3.length > 10
      case 3: return formData.reflection1.length > 5 && formData.reflection2.length > 5 && formData.reflection3.length > 5
      default: return false
    }
  }

  const landingPageElements = [
    { element: "Header", description: "Business name + slogan prominently displayed" },
    { element: "About Section", description: "What problem you solve and how" },
    { element: "Product/Service Section", description: "What you sell with descriptions" },
    { element: "Call to Action", description: "'Contact Us' or 'Order Now' button" },
    { element: "Contact Info", description: "How customers can reach you" }
  ]

  const pitchTips = [
    "Keep each slide simple with big, readable text",
    "Use your brand colors and include your logo",
    "Tell a story: Problem → Solution → Success",
    "Practice speaking for 2-3 minutes total"
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <Rocket className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Day 3: The Launchpad</h1>
              <p className="text-green-100">Build your online presence and create your business pitch</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-2 ${
                    step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 3: {
                currentStep === 1 ? 'Landing Page' :
                currentStep === 2 ? 'Pitch Deck' :
                'Reflection'
              }
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-500" />
              <span>Step 1: Create Your Landing Page</span>
            </CardTitle>
            <CardDescription>
              Build a simple one-page website that showcases your business and tells visitors what you do.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Google Sites Tutorial */}
            <Alert>
              <Globe className="w-4 h-4" />
              <AlertDescription>
                <strong>🌐 Ready to Build?</strong> Use Google Sites to create your free website!
                <div className="mt-2">
                  <a 
                    href="https://sites.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Google Sites (Free)</span>
                  </a>
                </div>
                <div className="mt-1">
                  <a 
                    href="https://www.youtube.com/watch?v=Mc_qYiBgYwk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch: Google Sites Tutorial</span>
                  </a>
                </div>
              </AlertDescription>
            </Alert>

            {/* Landing Page Checklist */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Your Landing Page Must Include:</h4>
              <div className="space-y-3">
                {landingPageElements.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-sm">{item.element}</h5>
                      <p className="text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Options */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Alternative Options:</h4>
              <div className="space-y-2 text-sm">
                <div>🎨 <strong>Canva Websites:</strong> Use Canva's website builder if you prefer their design tools</div>
                <div>📄 <strong>Single Page Design:</strong> Create a one-page graphic in Canva that looks like a website</div>
                <div>✏️ <strong>Paper Sketch:</strong> Draw your website layout on paper if you can't access the tools</div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Landing Page URL or Description *
              </label>
              <Input
                placeholder="Paste your Google Sites URL here, or describe your landing page design"
                value={formData.landingPageUrl}
                onChange={(e) => handleInputChange('landingPageUrl', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                If you created a website, paste the public URL. If you made a design or sketch, describe what it includes.
              </p>
            </div>

            <Button 
              onClick={handleStepComplete}
              disabled={!isStepValid()}
              className="w-full"
            >
              Next: Create Your Pitch <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Presentation className="w-5 h-5 text-green-500" />
              <span>Step 2: Build Your Pitch Deck</span>
            </CardTitle>
            <CardDescription>
              Create a 3-slide presentation that tells your business story and convinces people to support your idea.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pitch Resources */}
            <Alert>
              <PresentationChart className="w-4 h-4" />
              <AlertDescription>
                <strong>📊 Create Your Slides:</strong> Use Google Slides or Canva Presentations
                <div className="mt-2 space-y-1">
                  <a 
                    href="https://docs.google.com/presentation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📊 Google Slides (Free)
                  </a>
                  <a 
                    href="https://www.canva.com/create/presentations/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    🎨 Canva Presentations
                  </a>
                  <a 
                    href="https://www.ngpf.org/curriculum/entrepreneurship/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    🎯 NGPF: Analyze Elevator Pitches
                  </a>
                </div>
              </AlertDescription>
            </Alert>

            {/* Pitch Tips */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Pitch Presentation Tips:</h4>
              <div className="space-y-2">
                {pitchTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide 1 */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center space-x-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                <span>Slide 1: Problem + Business Idea</span>
              </h4>
              <Textarea
                placeholder="Describe what will be on your first slide. Include: The problem you're solving, your business name and concept. Example: 'Title: MathMate Tutoring. Problem: Students struggle with algebra. Solution: Affordable peer tutoring via video calls.'"
                value={formData.pitchSlide1}
                onChange={(e) => handleInputChange('pitchSlide1', e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            {/* Slide 2 */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center space-x-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                <span>Slide 2: Branding & Product Example</span>
              </h4>
              <Textarea
                placeholder="Describe your second slide. Include: Your logo, brand colors, and a mock product/service example. Show what customers will actually get from you."
                value={formData.pitchSlide2}
                onChange={(e) => handleInputChange('pitchSlide2', e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            {/* Slide 3 */}
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center space-x-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                <span>Slide 3: Target Audience & Reach</span>
              </h4>
              <Textarea
                placeholder="Describe your third slide. Include: Who you're serving (target audience) and how you'll find them online (social media, website, email, school, etc.)"
                value={formData.pitchSlide3}
                onChange={(e) => handleInputChange('pitchSlide3', e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(1)}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleStepComplete}
                disabled={!isStepValid()}
                className="flex-1"
              >
                Final Step: Reflection <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-green-500" />
              <span>Step 3: Reflection & Future Planning</span>
            </CardTitle>
            <CardDescription>
              Think about your experience and how you might turn this idea into a real business someday.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">🎉 Congratulations!</h4>
              <p className="text-sm text-gray-700">
                You've just completed the entire process of creating a micro-business concept! 
                These reflection questions will help you think about what you learned and what's next.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  What was the easiest part of starting an online business? *
                </label>
                <Textarea
                  placeholder="Think about which steps felt natural or fun to you..."
                  value={formData.reflection1}
                  onChange={(e) => handleInputChange('reflection1', e.target.value)}
                  className="min-h-[60px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What was the hardest part? *
                </label>
                <Textarea
                  placeholder="Which steps were challenging? What would you do differently?"
                  value={formData.reflection2}
                  onChange={(e) => handleInputChange('reflection2', e.target.value)}
                  className="min-h-[60px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Which tool (ChatGPT, Canva, Google Sites) was most helpful? Why? *
                </label>
                <Textarea
                  placeholder="Which digital tool did you enjoy using the most?"
                  value={formData.reflection3}
                  onChange={(e) => handleInputChange('reflection3', e.target.value)}
                  className="min-h-[60px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  If you had one more week, how would you expand this business?
                </label>
                <Textarea
                  placeholder="What would you add or improve? New services? Better marketing?"
                  value={formData.reflection4}
                  onChange={(e) => handleInputChange('reflection4', e.target.value)}
                  className="min-h-[60px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  How could this idea become real in the future?
                </label>
                <Textarea
                  placeholder="Do you think you might actually start this business someday? What would it take?"
                  value={formData.reflection5}
                  onChange={(e) => handleInputChange('reflection5', e.target.value)}
                  className="min-h-[60px]"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(2)}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleStepComplete}
                disabled={!isStepValid()}
                className="flex-1 bg-green-500 hover:bg-green-600"
              >
                Complete the Challenge! 🏆
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completion Card */}
      {isComplete && (
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">🎉 Challenge Complete! 🎉</h3>
            <p className="text-gray-600 mb-4">
              You've earned your <strong>Pitch Master Badge</strong> and completed the entire Digital Micro-Business Challenge!
            </p>
            
            <div className="bg-white p-4 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">What You've Accomplished:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-left">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Identified a real problem to solve</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Created a unique business solution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Defined your target audience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Built a complete brand identity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Designed marketing materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Created a business website</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Developed a compelling pitch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Learned valuable digital skills</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge className="bg-yellow-500 text-white">💡 Big Idea</Badge>
              <Badge className="bg-blue-500 text-white">🎨 Brand Builder</Badge>
              <Badge className="bg-green-500 text-white">🚀 Pitch Master</Badge>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={onNext}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold"
              >
                View Your Project Hub 🏆
              </Button>
              <p className="text-sm text-gray-600">
                See all your work in one place and get your completion certificate!
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Launch Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Website Building</h4>
              <div className="space-y-1">
                <a 
                  href="https://sites.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Sites - Free Website Builder</span>
                </a>
                <a 
                  href="https://www.canva.com/create/websites/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Canva Websites</span>
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Presentation Tools</h4>
              <div className="space-y-1">
                <a 
                  href="https://docs.google.com/presentation/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Slides</span>
                </a>
                <a 
                  href="https://www.canva.com/create/presentations/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Canva Presentations</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Day3Module
