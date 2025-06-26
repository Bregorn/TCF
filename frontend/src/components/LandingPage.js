import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Brain, 
  DollarSign, 
  Zap, 
  BarChart3, 
  FileText,
  Target,
  TrendingUp,
  Users,
  Rocket,
  ShoppingCart,
  Star,
  CheckCircle,
  Mail,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden" style={{backgroundColor: '#003049'}}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-slate-800/50"
        style={{backgroundColor: 'rgba(0, 48, 73, 0.8)'}}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(to right, #f77f00, #3b82f6)'}}>
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent" style={{background: 'linear-gradient(to right, #f77f00, #3b82f6)', WebkitBackgroundClip: 'text'}}>
              The Clique Factory
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107" 
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/50 to-blue-950/90"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:64px_64px] opacity-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Smarter Ads.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Better Results.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fully Automated.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            One platform. Every decision. Fully AI-optimized.
          </motion.p>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2">
              <span>Request Early Access</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-700/50 transition-all transform hover:scale-105 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>See How It Works</span>
            </button>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-purple-500/30"
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Five core features that revolutionize how you approach digital marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: AI Strategy Recommender */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1716436329475-4c55d05383bb" 
                  alt="AI Strategy"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">AI Strategy Recommender</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Suggests optimal platforms (Meta, TikTok, Google), content structure, and timing based on your campaign goals using advanced AI analysis.
              </p>
            </motion.div>

            {/* Feature 2: Budget Optimizer */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" 
                  alt="Budget Optimization"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Budget Optimizer</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Real-time budget allocation suggestions that maximize ROI across all your marketing channels with intelligent spending decisions.
              </p>
            </motion.div>

            {/* Feature 3: Campaign Generator */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" 
                  alt="Campaign Generation"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Campaign Generator</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                AI creates visuals, copy, and formats for multiple platforms simultaneously, saving hours of manual creative work.
              </p>
            </motion.div>

            {/* Feature 4: Real-Time Performance Engine */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-green-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Performance Monitoring"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">Real-Time Performance Engine</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Live campaign monitoring with AI tuning that automatically optimizes performance based on real-time data insights.
              </p>
            </motion.div>

            {/* Feature 5: One-Click Reports */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-indigo-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 md:col-span-2 lg:col-span-1"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg" 
                  alt="Reporting Dashboard"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-indigo-400" />
                <h3 className="text-2xl font-bold">One-Click Reports</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Executive dashboards and conversion tracking that provide actionable insights with beautiful, shareable reports.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Three simple steps to transform your marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Input Your Goal</h3>
              <p className="text-slate-300 leading-relaxed">
                Tell us your campaign objective and share your content ideas. Our AI analyzes your goals to create the perfect strategy.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Get AI Strategy + Assets</h3>
              <p className="text-slate-300 leading-relaxed">
                Receive custom strategy recommendations and campaign assets generated specifically for your brand and objectives.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Launch & Optimize</h3>
              <p className="text-slate-300 leading-relaxed">
                Deploy your campaigns and let AI continuously optimize performance in real-time for maximum results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions for Every Business
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored AI-powered marketing for your specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DTC Brands */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all transform hover:scale-105"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1613553347534-975d042656f7" 
                  alt="DTC Brands"
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <ShoppingCart className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">For DTC Brands</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Scale your direct-to-consumer business with AI-driven customer acquisition and retention strategies.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Customer lifetime value optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Multi-channel attribution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Automated retargeting campaigns</span>
                </li>
              </ul>
            </motion.div>

            {/* Agencies */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all transform hover:scale-105"
            >
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg" 
                  alt="Digital Agencies"
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">For Agencies</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Deliver exceptional results for clients while scaling your agency operations with AI automation.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>White-label reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Multi-client campaign management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Automated client presentations</span>
                </li>
              </ul>
            </motion.div>

            {/* Scaling Startups */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:border-green-500/50 transition-all transform hover:scale-105"
            >
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1629019621373-e5087c90067b" 
                  alt="Scaling Startups"
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Rocket className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold">For Scaling Startups</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Accelerate growth with data-driven marketing strategies that scale with your startup's rapid expansion.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Growth-focused optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Budget-efficient scaling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Rapid experimentation framework</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI in Action Preview */}
      <section className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI in Action
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our AI makes strategic recommendations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold">Goal: App Downloads</h3>
                  <p className="text-slate-400">E-commerce mobile app</p>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="text-green-400 font-semibold mb-2">AI Strategy Recommendation:</p>
                <p className="text-slate-300">TikTok Influencer Campaign + Instagram Story Ads</p>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• Target Audience: 18-34, mobile-first shoppers</p>
                <p>• Budget Split: 60% TikTok, 40% Instagram</p>
                <p>• Predicted ROAS: 4.2x</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">Goal: Lead Generation</h3>
                  <p className="text-slate-400">B2B SaaS platform</p>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <p className="text-green-400 font-semibold mb-2">AI Strategy Recommendation:</p>
                <p className="text-slate-300">LinkedIn Sponsored Content + Google Search Ads</p>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• Target Audience: Decision makers, 25-45</p>
                <p>• Budget Split: 70% LinkedIn, 30% Google</p>
                <p>• Predicted CPL: $42</p>
              </div>
            </motion.div>
          </div>

          {/* Testimonial */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-slate-300 mb-6 italic">
              "The Clique Factory increased our ROAS by 340% in just 8 weeks. The AI recommendations were spot-on, and the automation saved us 20+ hours per week."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/5990047/pexels-photo-5990047.jpeg" 
                alt="Testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-slate-400">VP Marketing, TechFlow</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
            alt="AI Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 to-blue-950/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Let AI take over your ad ops.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of marketers who've already transformed their campaigns with The Clique Factory.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-12 py-6 rounded-xl text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-2xl shadow-purple-500/25"
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(to right, #f77f00, #3b82f6)'}}>
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  The Clique Factory
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                AI-powered digital marketing platform that helps brands optimize campaigns and maximize ROI.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <Github className="w-6 h-6 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Updates</h4>
              <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-l-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-r-lg hover:from-purple-700 hover:to-blue-700 transition-all">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 The Clique Factory. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;