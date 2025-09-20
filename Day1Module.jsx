import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Lightbulb, Users, Target, Brain, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react'

const Day1Module = ({ onComplete, onNext, onUpdateData, data }) => {
  const [formData, setFormData] = useState({
    problem: data.problem || '',
    solution: data.solution || '',
    targetAudience: data.targetAudience || '',
    uniqueValue: data.uniqueValue || '',
    businessName: data.businessName || ''
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value }
    setFormData(newData)
    onUpdateData(newData)
  }

  const handleStepComplete = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
      onComplete()
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.problem.length > 10
      case 2: return formData.solution.length > 10
      case 3: return formData.targetAudience.length > 10
      case 4: return formData.uniqueValue.length > 10 && formData.businessName.length > 2
      default: return false
    }
  }

  const businessIdeas = [
    "Tutoring service for younger students",
    "Custom phone case design business",
    "Social media management for local businesses",
    "Handmade jewelry or accessories",
    "Pet sitting and dog walking service",
    "Digital art commissions",
    "Lawn care and gardening service",
    "Baking and cake decorating",
    "Photography for events",
    "Tech support for seniors"
  ]

  const chatGptPrompts = [
    "Give me 5 micro-business ideas a high school student could start online with no money",
    "What are some problems teenagers face that I could solve with a simple business?",
    "Suggest eco-friendly business ideas for students who care about the environment",
    "What digital services can a tech-savvy student offer to make money?"
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <Lightbulb className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Day 1: The Big Idea</h1>
              <p className="text-yellow-100">Discover your entrepreneurial passion and define your business concept</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step <= currentStep ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-yellow-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Identify the Problem' :
                currentStep === 2 ? 'Define Your Solution' :
                currentStep === 3 ? 'Know Your Audience' :
                'Create Your Unique Value'
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
              <Target className="w-5 h-5 text-yellow-500" />
              <span>Step 1: What Problem Will You Solve?</span>
            </CardTitle>
            <CardDescription>
              Great businesses start by solving real problems. Think about challenges you or people around you face daily.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Inspiration Section */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                <span>Need Inspiration? Here are some problems students have solved:</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div>• Students struggling with math homework</div>
                <div>• Boring phone cases that all look the same</div>
                <div>• Small businesses with no social media presence</div>
                <div>• Pet owners who travel frequently</div>
                <div>• People who want custom artwork</div>
                <div>• Seniors who need help with technology</div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What problem do you want to solve? *
              </label>
              <Textarea
                placeholder="Describe a problem you've noticed or experienced. Be specific! For example: 'My classmates always struggle to understand algebra concepts and there's no affordable tutoring available after school.'"
                value={formData.problem}
                onChange={(e) => handleInputChange('problem', e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimum 10 characters. Think about problems in your school, community, or daily life.
              </p>
            </div>

            <Button 
              onClick={handleStepComplete}
              disabled={!isStepValid()}
              className="w-full"
            >
              Next: Define Your Solution <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-yellow-500" />
              <span>Step 2: What's Your Solution?</span>
            </CardTitle>
            <CardDescription>
              Now that you've identified a problem, how will you solve it? What product or service will you offer?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* AI Helper Section */}
            <Alert>
              <Brain className="w-4 h-4" />
              <AlertDescription>
                <strong>💡 Pro Tip:</strong> Use ChatGPT to brainstorm! Try these prompts:
                <div className="mt-2 space-y-1">
                  {chatGptPrompts.map((prompt, index) => (
                    <div key={index} className="text-xs bg-gray-100 p-2 rounded font-mono">
                      "{prompt}"
                    </div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>

            {/* Business Ideas Gallery */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Popular Student Business Ideas:</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {businessIdeas.map((idea, index) => (
                  <Badge key={index} variant="outline" className="justify-start p-2 text-xs">
                    {idea}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What product or service will you provide? *
              </label>
              <Textarea
                placeholder="Describe your solution in detail. For example: 'I will offer one-on-one algebra tutoring sessions via video call, with custom practice worksheets and progress tracking.'"
                value={formData.solution}
                onChange={(e) => handleInputChange('solution', e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500 mt-1">
                Be specific about what you'll offer and how it solves the problem you identified.
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
                Next: Know Your Audience <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-500" />
              <span>Step 3: Who Is Your Target Audience?</span>
            </CardTitle>
            <CardDescription>
              Understanding your customers is crucial. Who exactly will buy your product or service?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Audience Examples */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">Think about these details:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Age & Grade:</strong>
                  <div>• Middle schoolers (11-14)</div>
                  <div>• High schoolers (15-18)</div>
                  <div>• College students</div>
                  <div>• Young adults</div>
                </div>
                <div>
                  <strong>Interests:</strong>
                  <div>• Gaming & technology</div>
                  <div>• Arts & creativity</div>
                  <div>• Sports & fitness</div>
                  <div>• Music & entertainment</div>
                </div>
                <div>
                  <strong>Needs:</strong>
                  <div>• Academic help</div>
                  <div>• Creative expression</div>
                  <div>• Convenience</div>
                  <div>• Social connection</div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Describe your target audience in detail *
              </label>
              <Textarea
                placeholder="Who will buy from you? Include age, interests, needs, and where you can find them. For example: 'Middle school students (grades 6-8) who struggle with math, have access to computers, and whose parents value education. I can reach them through school bulletin boards and parent Facebook groups.'"
                value={formData.targetAudience}
                onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500 mt-1">
                The more specific you are, the better you can market to them later!
              </p>
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
                className="flex-1"
              >
                Final Step: Your Unique Value <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-yellow-500" />
              <span>Step 4: What Makes You Special?</span>
            </CardTitle>
            <CardDescription>
              Why should customers choose YOU over other options? What's your unique selling proposition?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium mb-3">What makes businesses unique:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>• <strong>Price:</strong> Cheaper than competitors</div>
                <div>• <strong>Quality:</strong> Better materials or service</div>
                <div>• <strong>Speed:</strong> Faster delivery or response</div>
                <div>• <strong>Personal touch:</strong> More caring or customized</div>
                <div>• <strong>Convenience:</strong> Easier to access or use</div>
                <div>• <strong>Innovation:</strong> New approach or technology</div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Why would someone choose your business over others? *
              </label>
              <Textarea
                placeholder="What makes you different and better? For example: 'Unlike expensive tutoring centers, I offer affordable rates and flexible scheduling. As a student myself, I understand how to explain concepts in ways that make sense to other students.'"
                value={formData.uniqueValue}
                onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                What will you name your business? *
              </label>
              <Input
                placeholder="Choose a memorable name that reflects what you do"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Keep it simple, memorable, and related to your service!
              </p>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(3)}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleStepComplete}
                disabled={!isStepValid()}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600"
              >
                Complete Day 1! 🎉
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completion Card */}
      {isComplete && (
        <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Congratulations! 🎉</h3>
            <p className="text-gray-600 mb-4">
              You've earned your <strong>Big Idea Badge</strong>! You now have a solid business concept with:
            </p>
            <div className="text-left max-w-md mx-auto mb-6 space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A clear problem to solve</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A specific solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A defined target audience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">A unique value proposition</span>
              </div>
            </div>
            <Badge className="bg-yellow-500 text-white mb-4">
              💡 Big Idea Badge Earned!
            </Badge>
            <div>
              <Button 
                onClick={onNext}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Continue to Day 2: Building Your Brand 🎨
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle>📚 Helpful Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">AI Brainstorming</h4>
              <a 
                href="https://chat.openai.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>ChatGPT - Free AI Assistant</span>
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Entrepreneurship Learning</h4>
              <a 
                href="https://www.khanacademy.org/college-careers-more/entrepreneurship2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Khan Academy - Entrepreneur Interviews</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Day1Module
