import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Lightbulb, Palette, Rocket, CheckCircle, Trophy, Star } from 'lucide-react'
import './App.css'

// Import course modules
import WelcomeModule from './components/WelcomeModule'
import Day1Module from './components/Day1Module'
import Day2Module from './components/Day2Module'
import Day3Module from './components/Day3Module'
import ProjectHub from './components/ProjectHub'

function App() {
  const [currentModule, setCurrentModule] = useState('welcome')
  const [completedModules, setCompletedModules] = useState([])
  const [studentData, setStudentData] = useState({
    businessIdea: {},
    branding: {},
    landingPage: '',
    pitchDeck: '',
    reflection: {}
  })

  const modules = [
    { id: 'welcome', title: 'Welcome', icon: Star, color: 'bg-purple-500' },
    { id: 'day1', title: 'Day 1: The Big Idea', icon: Lightbulb, color: 'bg-yellow-500' },
    { id: 'day2', title: 'Day 2: Building Your Brand', icon: Palette, color: 'bg-blue-500' },
    { id: 'day3', title: 'Day 3: The Launchpad', icon: Rocket, color: 'bg-green-500' },
    { id: 'hub', title: 'Project Hub', icon: Trophy, color: 'bg-orange-500' }
  ]

  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId])
    }
  }

  const updateStudentData = (section, data) => {
    setStudentData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }))
  }

  const getProgressPercentage = () => {
    const totalModules = modules.length - 2 // Exclude welcome and hub
    return (completedModules.filter(id => ['day1', 'day2', 'day3'].includes(id)).length / totalModules) * 100
  }

  const renderCurrentModule = () => {
    switch (currentModule) {
      case 'welcome':
        return <WelcomeModule onStart={() => setCurrentModule('day1')} />
      case 'day1':
        return (
          <Day1Module
            onComplete={() => completeModule('day1')}
            onNext={() => setCurrentModule('day2')}
            onUpdateData={(data) => updateStudentData('businessIdea', data)}
            data={studentData.businessIdea}
          />
        )
      case 'day2':
        return (
          <Day2Module
            onComplete={() => completeModule('day2')}
            onNext={() => setCurrentModule('day3')}
            onUpdateData={(data) => updateStudentData('branding', data)}
            data={studentData.branding}
          />
        )
      case 'day3':
        return (
          <Day3Module
            onComplete={() => completeModule('day3')}
            onNext={() => setCurrentModule('hub')}
            onUpdateData={(data) => updateStudentData('reflection', data)}
            onUpdateLandingPage={(url) => setStudentData(prev => ({ ...prev, landingPage: url }))}
            onUpdatePitchDeck={(url) => setStudentData(prev => ({ ...prev, pitchDeck: url }))}
            data={studentData.reflection}
          />
        )
      case 'hub':
        return <ProjectHub studentData={studentData} completedModules={completedModules} />
      default:
        return <WelcomeModule onStart={() => setCurrentModule('day1')} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Digital Micro-Business Challenge</h1>
                <p className="text-sm text-gray-600">Interactive Course for Grades 8-12</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Progress</p>
                <p className="text-xs text-gray-600">{Math.round(getProgressPercentage())}% Complete</p>
              </div>
              <div className="w-24">
                <Progress value={getProgressPercentage()} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Course Modules</CardTitle>
                <CardDescription>Track your progress through the challenge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {modules.map((module) => {
                  const Icon = module.icon
                  const isCompleted = completedModules.includes(module.id)
                  const isCurrent = currentModule === module.id
                  
                  return (
                    <Button
                      key={module.id}
                      variant={isCurrent ? "default" : "ghost"}
                      className={`w-full justify-start h-auto p-3 ${
                        isCurrent ? 'bg-primary text-primary-foreground' : ''
                      }`}
                      onClick={() => setCurrentModule(module.id)}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <div className={`w-8 h-8 rounded-full ${module.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-medium text-sm">{module.title}</p>
                        </div>
                        {isCompleted && (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>

            {/* Badges Section */}
            {completedModules.length > 0 && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-lg">Your Badges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {completedModules.includes('day1') && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        💡 Big Idea
                      </Badge>
                    )}
                    {completedModules.includes('day2') && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        🎨 Brand Builder
                      </Badge>
                    )}
                    {completedModules.includes('day3') && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        🚀 Pitch Master
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderCurrentModule()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
