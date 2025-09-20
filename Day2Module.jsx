import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Palette, Type, Image, Megaphone, ExternalLink, CheckCircle, ArrowRight, Upload } from 'lucide-react'

const Day2Module = ({ onComplete, onNext, onUpdateData, data }) => {
  const [formData, setFormData] = useState({
    businessName: data.businessName || '',
    slogan: data.slogan || '',
    logoDescription: data.logoDescription || '',
    brandColors: data.brandColors || '',
    adType: data.adType || '',
    adDescription: data.adDescription || ''
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    onUpdateData(newData)
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
      case 1: return formData.businessName.length > 2 && formData.slogan.length > 5
      case 2: return formData.logoDescription.length > 10 && formData.brandColors.length > 3
      case 3: return formData.adType.length > 0 && formData.adDescription.length > 10
      default: return false
    }
  }

  const sloganTips = [
    "Keep it short and memorable (3-7 words)",
    "Focus on the benefit you provide",
    "Make it rhyme or use alliteration",
    "Avoid complex words or jargon"
  ]

  const logoStyles = [
    { name: "Minimalist", description: "Clean, simple design with lots of white space" },
    { name: "Playful", description: "Fun colors and rounded shapes" },
    { name: "Professional", description: "Serious, trustworthy appearance" },
    { name: "Creative", description: "Artistic and unique design elements" }
  ]

  const colorPalettes = [
    { name: "Tech Blue", colors: "#3B82F6, #1E40AF, #DBEAFE" },
    { name: "Nature Green", colors: "#10B981, #065F46, #D1FAE5" },
    { name: "Warm Orange", colors: "#F59E0B, #92400E, #FEF3C7" },
    { name: "Royal Purple", colors: "#8B5CF6, #5B21B6, #EDE9FE" },
    { name: "Sunset Pink", colors: "#EC4899, #BE185D, #FCE7F3" }
  ]

  const adTypes = [
    { type: "Instagram Post", description: "Square image (1080x1080) for social media" },
    { type: "Product Listing", description: "Like an Etsy or online store product page" },
    { type: "Digital Flyer", description: "Promotional poster for your service" },
    { type: "Facebook Ad", description: "Horizontal image for Facebook advertising" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <Palette className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Day 2: Building Your Brand</h1>
              <p className="text-blue-100">Create a memorable identity that attracts your target customers</p>
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
                  step <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-2 ${
                    step < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 3: {
                currentStep === 1 ? 'Name & Slogan' :
                currentStep === 2 ? 'Logo & Colors' :
                'Marketing Materials'
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
              <Type className="w-5 h-5 text-blue-500" />
              <span>Step 1: Business Name & Slogan</span>
            </CardTitle>
            <CardDescription>
              Your name and slogan are the first things customers will remember about your business.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name Examples */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Great Business Name Examples:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div>• <strong>MathMate Tutoring</strong> - Clear and memorable</div>
                <div>• <strong>Paws & Play Pet Care</strong> - Alliteration works!</div>
                <div>• <strong>TechHelp Seniors</strong> - Describes the service</div>
                <div>• <strong>Sweet Treats Bakery</strong> - Easy to remember</div>
                <div>• <strong>Green Thumb Gardens</strong> - Uses common phrases</div>
                <div>• <strong>Snap Happy Photos</strong> - Fun and energetic</div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Business Name *
              </label>
              <Input
                placeholder="Enter your business name (keep it simple and memorable)"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
              />
            </div>

            {/* Slogan Tips */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Slogan Writing Tips:</h4>
              <div className="space-y-2">
                {sloganTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-sm">
                <strong>Examples:</strong> "Math Made Easy" • "Your Pet's Best Friend" • "Tech Problems Solved"
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Slogan/Tagline *
              </label>
              <Input
                placeholder="Create a catchy slogan that describes what you do"
                value={formData.slogan}
                onChange={(e) => handleInputChange('slogan', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                This should be short, memorable, and explain your main benefit
              </p>
            </div>

            <Button 
              onClick={handleStepComplete}
              disabled={!isStepValid()}
              className="w-full"
            >
              Next: Design Your Logo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Image className="w-5 h-5 text-blue-500" />
              <span>Step 2: Logo Design & Brand Colors</span>
            </CardTitle>
            <CardDescription>
              Create a visual identity that represents your business personality and appeals to your target audience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Canva Tutorial */}
            <Alert>
              <Palette className="w-4 h-4" />
              <AlertDescription>
                <strong>🎨 Ready to Design?</strong> Use Canva's free logo maker to create your logo!
                <div className="mt-2">
                  <a 
                    href="https://www.canva.com/create/logos/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Canva Logo Maker (Free)</span>
                  </a>
                </div>
              </AlertDescription>
            </Alert>

            {/* Logo Style Guide */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Choose Your Logo Style:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {logoStyles.map((style, index) => (
                  <div key={index} className="p-3 bg-white rounded border">
                    <h5 className="font-medium text-sm">{style.name}</h5>
                    <p className="text-xs text-gray-600">{style.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Describe your logo design *
              </label>
              <Textarea
                placeholder="Describe what your logo looks like or what you want it to include. For example: 'A simple blue circle with a white book icon inside, with my business name in clean, modern font below.'"
                value={formData.logoDescription}
                onChange={(e) => handleInputChange('logoDescription', e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            {/* Color Palette Section */}
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Popular Color Palettes:</h4>
              <div className="space-y-2">
                {colorPalettes.map((palette, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white rounded">
                    <span className="font-medium text-sm">{palette.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono">{palette.colors}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleInputChange('brandColors', palette.colors)}
                        className="text-xs"
                      >
                        Use This
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Brand Colors *
              </label>
              <Input
                placeholder="List your main brand colors (e.g., 'Blue and white' or specific hex codes)"
                value={formData.brandColors}
                onChange={(e) => handleInputChange('brandColors', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Choose 2-3 colors that work well together and match your business personality
              </p>
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
                Next: Create Your Ad <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Megaphone className="w-5 h-5 text-blue-500" />
              <span>Step 3: Create Your First Marketing Material</span>
            </CardTitle>
            <CardDescription>
              Design your first piece of marketing content to promote your business and attract customers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Ad Type Selection */}
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Choose Your Marketing Material Type:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {adTypes.map((ad, index) => (
                  <div 
                    key={index} 
                    className={`p-3 border rounded cursor-pointer transition-colors ${
                      formData.adType === ad.type ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => handleInputChange('adType', ad.type)}
                  >
                    <h5 className="font-medium text-sm">{ad.type}</h5>
                    <p className="text-xs text-gray-600">{ad.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Canva Templates */}
            <Alert>
              <Image className="w-4 h-4" />
              <AlertDescription>
                <strong>🎨 Design Your Marketing Material:</strong> Use Canva's free templates!
                <div className="mt-2 space-y-1">
                  <a 
                    href="https://www.canva.com/create/instagram-posts/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📱 Instagram Post Templates
                  </a>
                  <a 
                    href="https://www.canva.com/create/flyers/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📄 Flyer Templates
                  </a>
                  <a 
                    href="https://www.canva.com/create/facebook-ads/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📢 Facebook Ad Templates
                  </a>
                </div>
              </AlertDescription>
            </Alert>

            <div>
              <label className="block text-sm font-medium mb-2">
                Describe your marketing material *
              </label>
              <Textarea
                placeholder="Describe what your ad/post will look like and what message it will convey. Include key elements like your business name, slogan, main benefit, and call-to-action."
                value={formData.adDescription}
                onChange={(e) => handleInputChange('adDescription', e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500 mt-1">
                Think about: What's the main message? What action do you want people to take?
              </p>
            </div>

            {/* Marketing Tips */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Marketing Material Must-Haves:</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div>✅ Your business name and logo</div>
                <div>✅ Clear benefit or value proposition</div>
                <div>✅ Contact information or next step</div>
                <div>✅ Eye-catching visuals or colors</div>
                <div>✅ Easy-to-read fonts</div>
                <div>✅ Call-to-action (what to do next)</div>
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
                className="flex-1 bg-blue-500 hover:bg-blue-600"
              >
                Complete Day 2! 🎉
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completion Card */}
      {isComplete && (
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Amazing Work! 🎨</h3>
            <p className="text-gray-600 mb-4">
              You've earned your <strong>Brand Builder Badge</strong>! Your business now has:
            </p>
            <div className="text-left max-w-md mx-auto mb-6 space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A memorable business name and slogan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A professional logo design plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A cohesive brand color palette</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Your first marketing material</span>
              </div>
            </div>
            <Badge className="bg-blue-500 text-white mb-4">
              🎨 Brand Builder Badge Earned!
            </Badge>
            <div>
              <Button 
                onClick={onNext}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                Continue to Day 3: The Launchpad 🚀
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle>🎨 Design Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Free Design Tools</h4>
              <div className="space-y-1">
                <a 
                  href="https://www.canva.com/create/logos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Canva Logo Maker</span>
                </a>
                <a 
                  href="https://www.canva.com/create/instagram-posts/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Canva Social Media Templates</span>
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Color & Design Inspiration</h4>
              <div className="space-y-1">
                <a 
                  href="https://coolors.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Coolors - Color Palette Generator</span>
                </a>
                <a 
                  href="https://fonts.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Google Fonts - Free Typography</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Day2Module
