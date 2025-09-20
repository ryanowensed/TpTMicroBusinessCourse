import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Trophy, Download, Share2, ExternalLink, Lightbulb, Palette, Rocket, Star, Calendar, Target, Users, Globe, Presentation, MessageSquare } from 'lucide-react'

const ProjectHub = ({ studentData, completedModules }) => {
  const generateCertificate = () => {
    // This would generate a downloadable certificate
    const certificateData = {
      studentName: "Future Entrepreneur",
      completionDate: new Date().toLocaleDateString(),
      businessName: studentData.businessIdea?.businessName || "Your Business"
    }
    
    // For now, we'll just show an alert
    alert("🎉 Congratulations! Your Future Founder Certificate is ready! In a real implementation, this would download a personalized certificate.")
  }

  const shareProject = () => {
    if (navigator.share) {
      navigator.share({
        title: 'I completed the Digital Micro-Business Challenge!',
        text: `Check out my business idea: ${studentData.businessIdea?.businessName || 'My Business'}`,
        url: window.location.href
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `I just completed the Digital Micro-Business Challenge and created a business called "${studentData.businessIdea?.businessName || 'My Business'}"! 🚀`
      navigator.clipboard.writeText(shareText)
      alert("Share text copied to clipboard!")
    }
  }

  const allBadges = [
    { id: 'day1', name: 'Big Idea', icon: '💡', color: 'bg-yellow-500', earned: completedModules.includes('day1') },
    { id: 'day2', name: 'Brand Builder', icon: '🎨', color: 'bg-blue-500', earned: completedModules.includes('day2') },
    { id: 'day3', name: 'Pitch Master', icon: '🚀', color: 'bg-green-500', earned: completedModules.includes('day3') }
  ]

  const completionPercentage = (completedModules.filter(id => ['day1', 'day2', 'day3'].includes(id)).length / 3) * 100

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Trophy className="w-10 h-10" />
                <div>
                  <h1 className="text-3xl font-bold">Your Project Hub</h1>
                  <p className="text-purple-100">All your amazing work in one place!</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-purple-100">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Completed: {new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>{Math.round(completionPercentage)}% Complete</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                <Trophy className="w-16 h-16 text-white/80" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges & Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <span>Your Achievements</span>
          </CardTitle>
          <CardDescription>
            Badges you've earned throughout the challenge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {allBadges.map((badge) => (
              <div 
                key={badge.id}
                className={`p-6 rounded-lg text-center transition-all ${
                  badge.earned 
                    ? 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 shadow-lg' 
                    : 'bg-gray-50 border-2 border-gray-200 opacity-50'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  badge.earned ? badge.color : 'bg-gray-300'
                }`}>
                  <span className="text-2xl">{badge.earned ? badge.icon : '🔒'}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{badge.name}</h3>
                <Badge variant={badge.earned ? "default" : "secondary"} className={badge.earned ? badge.color : ''}>
                  {badge.earned ? 'Earned!' : 'Locked'}
                </Badge>
              </div>
            ))}
          </div>
          
          {completionPercentage === 100 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg text-center">
              <h4 className="font-semibold text-lg mb-2">🏆 Challenge Complete!</h4>
              <p className="text-gray-700 mb-4">
                Congratulations! You've earned all badges and completed the entire Digital Micro-Business Challenge!
              </p>
              <Button onClick={generateCertificate} className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                <Download className="w-4 h-4 mr-2" />
                Download Your Certificate
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Business Overview */}
      {studentData.businessIdea?.businessName && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <span>Your Business Concept</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4">{studentData.businessIdea.businessName}</h3>
              {studentData.branding?.slogan && (
                <p className="text-center text-lg text-gray-600 mb-6 italic">"{studentData.branding.slogan}"</p>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Problem You Solve</span>
                  </h4>
                  <p className="text-gray-700 text-sm">{studentData.businessIdea.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Your Solution</span>
                  </h4>
                  <p className="text-gray-700 text-sm">{studentData.businessIdea.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Target Audience</span>
                  </h4>
                  <p className="text-gray-700 text-sm">{studentData.businessIdea.targetAudience}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>What Makes You Special</span>
                  </h4>
                  <p className="text-gray-700 text-sm">{studentData.businessIdea.uniqueValue}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Brand Identity */}
      {studentData.branding?.businessName && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-6 h-6 text-blue-500" />
              <span>Your Brand Identity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Business Name</h4>
                  <p className="text-2xl font-bold text-blue-600">{studentData.branding.businessName}</p>
                </div>
                
                {studentData.branding.slogan && (
                  <div>
                    <h4 className="font-semibold mb-2">Slogan</h4>
                    <p className="text-lg italic text-gray-700">"{studentData.branding.slogan}"</p>
                  </div>
                )}
                
                {studentData.branding.brandColors && (
                  <div>
                    <h4 className="font-semibold mb-2">Brand Colors</h4>
                    <p className="text-gray-700">{studentData.branding.brandColors}</p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                {studentData.branding.logoDescription && (
                  <div>
                    <h4 className="font-semibold mb-2">Logo Design</h4>
                    <p className="text-gray-700 text-sm">{studentData.branding.logoDescription}</p>
                  </div>
                )}
                
                {studentData.branding.adType && (
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Material</h4>
                    <Badge variant="outline" className="mb-2">{studentData.branding.adType}</Badge>
                    <p className="text-gray-700 text-sm">{studentData.branding.adDescription}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Digital Presence */}
      {(studentData.landingPage || studentData.pitchDeck) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-green-500" />
              <span>Your Digital Presence</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {studentData.landingPage && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Landing Page</span>
                  </h4>
                  {studentData.landingPage.startsWith('http') ? (
                    <a 
                      href={studentData.landingPage} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Your Website</span>
                    </a>
                  ) : (
                    <p className="text-gray-700 text-sm">{studentData.landingPage}</p>
                  )}
                </div>
              )}
              
              {studentData.pitchDeck && (
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <Presentation className="w-4 h-4" />
                    <span>Pitch Deck</span>
                  </h4>
                  <p className="text-gray-700 text-sm">3-slide business presentation created</p>
                  {typeof studentData.pitchDeck === 'string' && studentData.pitchDeck.startsWith('http') && (
                    <a 
                      href={studentData.pitchDeck} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mt-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Presentation</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reflection Insights */}
      {studentData.reflection?.reflection1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-purple-500" />
              <span>Your Reflection & Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentData.reflection.reflection1 && (
                <div>
                  <h4 className="font-semibold mb-2">What was easiest?</h4>
                  <p className="text-gray-700 text-sm bg-green-50 p-3 rounded">{studentData.reflection.reflection1}</p>
                </div>
              )}
              
              {studentData.reflection.reflection2 && (
                <div>
                  <h4 className="font-semibold mb-2">What was most challenging?</h4>
                  <p className="text-gray-700 text-sm bg-orange-50 p-3 rounded">{studentData.reflection.reflection2}</p>
                </div>
              )}
              
              {studentData.reflection.reflection3 && (
                <div>
                  <h4 className="font-semibold mb-2">Most helpful tool</h4>
                  <p className="text-gray-700 text-sm bg-blue-50 p-3 rounded">{studentData.reflection.reflection3}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={shareProject} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Share2 className="w-4 h-4 mr-2" />
              Share Your Achievement
            </Button>
            
            {completionPercentage === 100 && (
              <Button onClick={generateCertificate} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>
            )}
            
            <Button 
              variant="outline"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Print Summary
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle>🚀 What's Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">
              Congratulations on completing the Digital Micro-Business Challenge! Here are some ways to continue your entrepreneurial journey:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Keep Learning</h4>
                <div className="text-sm space-y-1">
                  <div>• Take more entrepreneurship courses</div>
                  <div>• Join young entrepreneur communities</div>
                  <div>• Read business books and blogs</div>
                  <div>• Watch entrepreneur interviews</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Take Action</h4>
                <div className="text-sm space-y-1">
                  <div>• Actually start your micro-business</div>
                  <div>• Test your idea with real customers</div>
                  <div>• Improve your digital marketing skills</div>
                  <div>• Network with other young entrepreneurs</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectHub
