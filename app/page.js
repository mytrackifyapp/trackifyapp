"use client"

import { applicationClientUrls } from "@/components/constant/urls"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import {
  BarChart3,
  PieChart,
  Wallet,
  ArrowRight,
  LineChart,
  Smartphone,
  Play,
  X,
  Check,
  Bot,
  Sparkles,
  Zap,
  Shield,
  CreditCard,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    pricing: false,
    howItWorks: false,
    testimonials: false,
    cta: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const openVideo = () => {
    setIsVideoOpen(true)
    // If we had a real video, we would play it here
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
    // If we had a real video, we would pause it here
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const pricingCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-blue-50 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMkZBQzY2IiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiMyMTk2RjMiIHN0b3Atb3BhY2l0eT0iLjA1IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDEyMDB2NjAwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+')]"></div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-4xl rounded-lg overflow-hidden">
            <button onClick={closeVideo} className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg">
              <X className="h-6 w-6 text-gray-800" />
            </button>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <div className="text-white text-lg"></div>
              {/* Replace with actual video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                poster="/placeholder.svg?height=720&width=1280"
              >
                <source src="/demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 m-auto h-[70px] max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <Link
            href={"/"}
            className="flex max-w-[180px] items-center gap-2 p-3 text-2xl group"
          >
            <img
    src="/trackifylogo.jpg" 
    alt="Trackify Logo"
    className="w-11 h-11 rounded-full shadow-lg group-hover:rotate-12 group-hover:bg-black/90 transition-all ease-in duration-200"
  />
          <span className="font-black tracking-[-0.03em] text-[#13131A] group-hover:text-[#13131A]/90 transition-all ease-in duration-200 text-xl">
            Trackify
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              FAQ
            </Link>
          </nav>

          <Link
            href={applicationClientUrls.auth.login}
            className="leading-2 mr-4 inline-flex h-[38px] items-center overflow-hidden rounded-md text-white bg-gray-900 px-4 py-1 hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>

          <Link
             href={applicationClientUrls.auth.register}
            className="hidden md:inline-flex h-[38px] items-center overflow-hidden rounded-md bg-gradient-to-r from-green-500 to-green-600 px-4 py-1 text-white hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10">
        <motion.div
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
          initial="hidden"
          animate={isVisible.hero ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </motion.div>

          <motion.h1
            className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl"
            variants={fadeIn}
          >
            <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-green-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative text-green-700">Smart finance</span>
            </span>{" "}
            tracking for modern businesses
          </motion.h1>
          <motion.p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700" variants={fadeIn}>
            Take control of your finances with powerful tracking, insightful analytics, and automated reporting.
            Trackify helps you make smarter financial decisions.
          </motion.p>
          <motion.div className="mt-10 flex justify-center gap-x-6" variants={fadeIn}>
            <Link
              href={applicationClientUrls.auth.register}
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-3 text-md font-semibold text-white hover:from-green-600 hover:to-green-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-800 active:text-green-100 shadow-md hover:shadow-lg transition-all"
            >
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={openVideo}
              className="group inline-flex items-center justify-center rounded-full px-8 py-3 text-md font-semibold text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50 transition-all"
            >
              <Play className="mr-2 h-4 w-4" /> Watch demo
            </button>
          </motion.div>
          <motion.div className="mt-16 relative" variants={fadeIn}>
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1 bg-gradient-to-b from-white via-white to-transparent"></div>
              <div className="flex-1 w-full bg-gradient-to-t from-white via-white to-transparent"></div>
            </div>
            <div className="mx-auto max-w-6xl relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <img
                  src="/preview.jpg" // Replace with the actual image file name in your public folder
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white opacity-70"></div>
        <motion.div
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
          initial="hidden"
          animate={isVisible.features ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeIn}>
            <h2 className="text-base font-semibold leading-7 text-green-600">Powerful Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your finances
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trackify provides all the tools you need to take control of your financial life, from expense tracking to
              budget planning and beyond.
            </p>
          </motion.div>
          <motion.div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none" variants={staggerContainer}>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div
                className="flex flex-col"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 shadow-md">
                    <BarChart3 className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Expense Tracking
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Easily track and categorize all your expenses in one place. Get a clear picture of where your money
                    is going.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="#"
                      className="text-sm font-semibold leading-6 text-green-600 hover:text-green-700 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
              <motion.div
                className="flex flex-col"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 shadow-md">
                    <PieChart className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Budget Planning
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Create custom budgets for different categories and track your progress. Get alerts when you're
                    approaching your limits.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="#"
                      className="text-sm font-semibold leading-6 text-green-600 hover:text-green-700 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
              <motion.div
                className="flex flex-col"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600 shadow-md">
                    <LineChart className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Financial Insights
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Get powerful insights into your spending habits with interactive charts and reports that help you
                    make better financial decisions.
                  </p>
                  <p className="mt-6">
                    <Link
                      href="#"
                      className="text-sm font-semibold leading-6 text-green-600 hover:text-green-700 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
            </dl>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white opacity-70"></div>
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <motion.div
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
          initial="hidden"
          animate={isVisible.pricing ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeIn}>
            <h2 className="inline-flex items-center text-base font-semibold leading-7 text-green-600">
              <Sparkles className="mr-2 h-5 w-5" /> Pricing Plans
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the right plan for your needs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Simplifying Financial Oversight with Advanced Expense Tracking, Management and AI
            </p>
          </motion.div>

          <motion.div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3" variants={staggerContainer}>
            {/* Free Plan */}
            <motion.div
              className="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 hover:border-green-500 transition-all"
              variants={pricingCardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Free</h3>
                <div className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
                  Get Started
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Perfect for individuals just starting their financial journey.
              </p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$0</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Trend visualization with charts</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Add up to 200 entries per account</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Track subscription billing dates</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Choose preferred currency display</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Email support available</span>
                </li>
              </ul>
              <Link
                href={applicationClientUrls.auth.register}
                className="mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors shadow-sm"
              >
                Start for free
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              className="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200 lg:order-first lg:col-span-1 hover:border-green-500 transition-all"
              variants={pricingCardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Pro</h3>
                <div className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">Popular</div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                For professionals who need advanced financial tracking.
              </p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$15</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Everything in Free plan</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Unlimited entries per account</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Advanced trend visualization</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Export data as CSV</span>
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <span>Priority support with quick reply</span>
                </li>
              </ul>
              <Link
                href={applicationClientUrls.auth.register}
                className="mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all shadow-md"
              >
                Get started
              </Link>
            </motion.div>

            

            {/* Premium Plan with AI CFO
            <motion.div
              className="relative flex flex-col rounded-3xl bg-gradient-to-b from-gray-900 to-gray-800 p-8 shadow-xl lg:order-last lg:col-span-1 hover:shadow-2xl transition-all"
              variants={pricingCardVariants}
              whileHover="hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-8 text-white">Premium</h3>
                <div className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold text-white">Best Value</div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                For businesses and power users who want AI-powered financial insights.
              </p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">$29</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                <li className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Everything in Pro plan</span>
                </li>
                <li className="flex gap-x-3">
                  <Bot className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span className="font-medium text-white">AI Personal CFO Bot</span>
                </li>
                <li className="flex gap-x-3">
                  <Zap className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Automated financial insights</span>
                </li>
                <li className="flex gap-x-3">
                  <Shield className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Fraud detection alerts</span>
                </li>
                <li className="flex gap-x-3">
                  <CreditCard className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  <span>Investment tracking & recommendations</span>
                </li>
              </ul>
              <Link
                href={applicationClientUrls.auth.register}
                className="mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold text-gray-900 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-all shadow-md"
              >
                Upgrade to Premium
              </Link>
            </motion.div> */}
          </motion.div>

          {/* AI CFO Feature Highlight */}
          <motion.div
            className="mt-24 rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 shadow-xl overflow-hidden relative"
            variants={fadeIn}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMkZBQzY2IiBzdG9wLW9wYWNpdHk9Ii4xIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzIxOTZGMyIgc3RvcC1vcGFjaXR5PSIuMSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgxMjAwdjYwMEgweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuMiIvPjwvc3ZnPg==')]"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <Bot className="mr-2 h-6 w-6 text-green-400" /> Meet Your AI Personal CFO
                </h3>
                <p className="mt-4 text-gray-300">
                  Our AI-powered financial assistant analyzes your spending patterns, identifies saving opportunities,
                  and provides personalized recommendations to help you achieve your financial goals.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-x-3 text-gray-300">
                    <Check className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                    <span>Personalized financial advice based on your spending habits</span>
                  </li>
                  <li className="flex gap-x-3 text-gray-300">
                    <Check className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                    <span>Smart budget recommendations that adapt to your lifestyle</span>
                  </li>
                  <li className="flex gap-x-3 text-gray-300">
                    <Check className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                    <span>Proactive alerts for unusual spending or potential savings</span>
                  </li>
                  <li className="flex gap-x-3 text-gray-300">
                    <Check className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                    <span>Natural language interface to ask questions about your finances</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="https://my-awesome-chatbot-beta-hazel.vercel.app/" // Replace with your external URL
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Improves security for external links
                    className="inline-flex items-center rounded-md py-2.5 px-4 text-sm font-semibold text-gray-900 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 transition-all shadow-md"
                  >
                    Try Trackify AI<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md h-80 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white font-medium">Trackify AI</div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto space-y-4 text-sm">
                      <div className="flex items-start">
                        <div className="bg-gray-700 rounded-lg p-3 text-white max-w-xs">
                          <p>How can I improve my savings this month?</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-green-600 rounded-lg p-3 text-white max-w-xs">
                          <p>
                            Based on your spending patterns, I've identified that you could save $127 by reducing
                            restaurant expenses. You've spent 40% more than last month in this category.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-gray-700 rounded-lg p-3 text-white max-w-xs">
                          <p>What's my biggest expense category?</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-green-600 rounded-lg p-3 text-white max-w-xs">
                          <p>
                            Your biggest expense this month is Housing at $1,450, which is 35% of your monthly spending.
                            This is within your budget of $1,500.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <input
                        type="text"
                        placeholder="Ask Trackify AI..."
                        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        disabled
                      />
                      <button className="ml-2 p-2 bg-green-500 rounded-lg" disabled>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="howItWorks" className="relative z-10 py-24 sm:py-32 overflow-hidden">
        <motion.div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          initial="hidden"
          animate={isVisible.howItWorks ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            variants={fadeIn}
          >
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-600">Track Smarter</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better way to manage money
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Trackify empowers you to take full control of your finances from daily expenses to long-term investments — 
                with a sleek, AI-powered dashboard built for simplicity and insight.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CreditCard className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      Manage Subscriptions Effortlessly
                    </dt>
                    <dd className="inline">
                      {" "}
                      Keep tabs on every recurring payment — from streaming services like netflix to software tools like canva. Trackify lets you log, categorize, 
                      and visualize your subscriptions so you never miss a renewal or overpay again.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <PieChart className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      Monitor Expenses in Real-Time
                    </dt>
                    <dd className="inline">
                      {" "}
                      Easily track where your money goes. Our system automatically categorizes your spending and highlights unusual patterns 
                       giving you clarity on every transaction.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <BarChart3 className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      Know Your Total Income.
                    </dt>
                    <dd className="inline">
                      {" "}
                      Sync your income sources — salaries, freelance gigs, passive earnings 
                      into one clean view. Get a full picture of how much you earn monthly and annually.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Zap className="absolute left-1 top-1 h-5 w-5 text-green-600" aria-hidden="true" />
                      Stay on Top of Investments
                    </dt>
                    <dd className="inline">
                      {" "}
                      Monitor your stocks, crypto, savings accounts, and other investment portfolios. 
                      Trackify provides performance insights that help you grow your wealth confidently.


                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.howItWorks ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-[500px] rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl overflow-hidden relative">
                <img
                  src="/product.jpg" // Replace with the actual image file name in your public folder
                  alt="Product Screenshot"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50 to-white opacity-70"></div>
        <motion.div
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
          initial="hidden"
          animate={isVisible.testimonials ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="mx-auto max-w-2xl text-center" variants={fadeIn}>
            <h2 className="text-base font-semibold leading-7 text-green-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by businesses and individuals
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hear from our satisfied customers who have transformed their financial management with Trackify.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            variants={staggerContainer}
          >
            {[
              {
                content:
                  "Trackify has completely changed how I manage my business finances. The insights have helped me cut unnecessary expenses by 30%.",
                author: "Sarah A",
                role: "Content Creator",
              },
              {
                content:
                  "As someone who always struggled with budgeting, Trackify made it simple and even enjoyable. I've saved more in 6 months than I did in the past 2 years.",
                author: "Michael Kofi",
                role: "Software Engineer",
              },
              {
                content:
                  "The automated categorization and reporting save me hours each month. Trackify is an essential tool for our company's financial management.",
                author: "Divine Gabriel",
                role: "CFO, Trackify Inc.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between bg-white p-8 shadow-xl rounded-xl border border-gray-100 hover:border-green-200 transition-all"
                variants={fadeIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-7 text-gray-600">{testimonial.content}</p>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative z-10">
        <motion.div
          className="bg-gradient-to-r from-black -600 to-black -700"
          initial="hidden"
          animate={isVisible.cta ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Boost your financial intelligence.
                  <br />
                  Start using Trackify today.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Join thousands of users who have transformed their relationship with money using our powerful
                  financial tracking platform.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    href={applicationClientUrls.auth.register}
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                  >
                    Get started
                  </Link>
                  <button onClick={openVideo} className="text-sm font-semibold leading-6 text-white flex items-center">
                    <Play className="mr-2 h-4 w-4" /> Watch demo <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <div className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 h-[400px] overflow-hidden">
                  <img
                    src="/screenshot.jpg" // Replace with the actual image file name in your public folder
                    alt="App Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Trackify, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
