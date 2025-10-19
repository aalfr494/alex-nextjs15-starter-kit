"use client";

import { useState } from "react";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  

  const features = [
    {
      title: "Lightning Fast",
      description: "Built with performance in mind. Your users will love the speed.",
      icon: "⚡",
    },
    {
      title: "Fully Responsive",
      description: "Looks great on all devices, from mobile to desktop.",
      icon: "📱",
    },
    {
      title: "Easy to Customize",
      description: "Clean code and well-organized components make customization a breeze.",
      icon: "🎨",
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help you rank higher.",
      icon: "🔍",
    },
    {
      title: "Type Safe",
      description: "Fully typed with TypeScript for better developer experience.",
      icon: "🛡️",
    },
    {
      title: "Open Source",
      description: "Free to use and modify for your projects.",
      icon: "💎",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Up to 10 users",
        "Basic analytics",
        "Email support",
        "1GB storage",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      features: [
        "Up to 50 users",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "24/7 support",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium text-gray-900">🎉 Now available for Next.js 15</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your SaaS
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A free and open-source landing page template for your SaaS business, built with React, TypeScript, and Tailwind CSS.
          </p>


        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the Full Potential of the SaaS Template
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm border-2 transition-all ${
                  plan.popular
                    ? "border-gray-900 shadow-xl scale-105"
                    : "border-gray-100 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of companies already using our platform
          </p>
          <SignUpButton mode="modal">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-400 transition-colors shadow-lg">
            Start Your Free Trial
          </button></SignUpButton>
        </div>
      </section>


    </div>
  );
}