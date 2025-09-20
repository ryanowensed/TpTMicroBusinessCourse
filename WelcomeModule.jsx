import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Rocket, Clock, Users, Target, Lightbulb, Palette, Presentation } from 'lucide-react'

const WelcomeModule = ({ onStart }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Rocket className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Digital Micro-Business Challenge</h1>
              </div>
              <p className="text-xl text-purple-100 max-w-2xl">
                Transform your ideas into a real business concept in just 3 days! Learn entrepreneurship 
                through hands-on experience with free digital tools and AI assistance.
              </p>
              <div className="flex items-center space-x-4 text-purple-100">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>3-Day Challenge</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>Grades 8-12</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>Self-Paced</span>
                </div>
              </div>
              <Button 
                onClick={onStart}
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
              >
                Start Your Journey 🚀
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <Rocket className="w-32 h-32 text-white/80" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What You'll Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">What You'll Learn</CardTitle>
          <CardDescription>
            This interactive course will guide you through the complete process of creating a micro-business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg">Day 1: The Big Idea</h3>
              <p className="text-gray-600">
                Discover your entrepreneurial style, brainstorm with AI, and define your target audience
              </p>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                💡 Big Idea Badge
              </Badge>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Day 2: Building Your Brand</h3>
              <p className="text-gray-600">
                Create your business name, design a logo with Canva, and craft your first marketing materials
              </p>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                🎨 Brand Builder Badge
              </Badge>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Presentation className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg">Day 3: The Launchpad</h3>
              <p className="text-gray-600">
                Build your landing page with Google Sites and create a compelling pitch deck
              </p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                🚀 Pitch Master Badge
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools You'll Use */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Free Tools You'll Master</CardTitle>
          <CardDescription>
            All tools are completely free and perfect for students
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="font-medium">ChatGPT</h4>
              <p className="text-sm text-gray-600">AI-powered brainstorming</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-medium">Canva</h4>
              <p className="text-sm text-gray-600">Design logos & marketing</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="font-medium">Google Sites</h4>
              <p className="text-sm text-gray-600">Build your website</p>
            </div>
            
            <div className="p-4 border rounded-lg text-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-medium">Google Slides</h4>
              <p className="text-sm text-gray-600">Create your pitch</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Makes This Special */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Why This Course is Different</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Interactive & Engaging</h4>
                  <p className="text-gray-600 text-sm">No boring lectures - learn by doing with real tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Self-Paced Learning</h4>
                  <p className="text-gray-600 text-sm">Complete at your own speed, save your progress</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Real-World Skills</h4>
                  <p className="text-gray-600 text-sm">Learn digital marketing, design, and business planning</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Completely Free</h4>
                  <p className="text-gray-600 text-sm">All tools and resources are free to use</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Age-Appropriate</h4>
                  <p className="text-gray-600 text-sm">Designed specifically for middle and high school students</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-medium">Portfolio Ready</h4>
                  <p className="text-gray-600 text-sm">Create real projects you can showcase</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ready to Start */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Business Idea? 🚀</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have discovered their entrepreneurial potential. 
            Your journey to becoming a young entrepreneur starts with a single click!
          </p>
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8"
          >
            Start Day 1: The Big Idea 💡
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default WelcomeModule
