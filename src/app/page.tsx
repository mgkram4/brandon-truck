'use client'

import { motion } from 'framer-motion'
import { FaArrowRight, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaStar, FaTruck } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaTruck className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">Brandon Truck Rental</h1>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
              <a href="#fleet" className="text-gray-700 hover:text-orange-600 transition-colors">Fleet</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Get Quote
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Reliable Truck Rentals for Your Business
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From small delivery trucks to heavy-duty vehicles, we provide the perfect solution for your transportation needs. Available 24/7 with competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-700 transition-colors">
                  Reserve Now
                </button>
                <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-50 transition-colors">
                  View Fleet
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <FaTruck className="h-24 w-24 text-white" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Available Trucks</span>
                    <span className="text-2xl font-bold text-orange-600">45+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Customer Rating</span>
                    <div className="flex items-center">
                      <FaStar className="h-4 w-4 text-yellow-400" />
                      <span className="text-lg font-bold text-gray-900 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Brandon Truck Rental?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the most reliable and efficient truck rental services with unmatched customer support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaClock,
                title: "24/7 Availability",
                description: "Need a truck urgently? We're available round the clock to serve your needs."
              },
              {
                icon: FaShieldAlt,
                title: "Fully Insured",
                description: "All our vehicles are fully insured and maintained to the highest standards."
              },
              {
                icon: FaStar,
                title: "Top Rated Service",
                description: "Over 1000+ satisfied customers with 4.9-star average rating."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Fleet</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of well-maintained trucks for every business need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Light Delivery Truck",
                capacity: "Up to 3,500 lbs",
                price: "$89/day",
                features: ["Fuel Efficient", "Easy to Drive", "Perfect for City Deliveries"]
              },
              {
                name: "Medium Box Truck",
                capacity: "Up to 10,000 lbs",
                price: "$149/day",
                features: ["Spacious Cargo Area", "Loading Ramp", "Great for Moving"]
              },
              {
                name: "Heavy Duty Truck",
                capacity: "Up to 26,000 lbs",
                price: "$229/day",
                features: ["Commercial Grade", "Long Distance", "Heavy Cargo"]
              }
            ].map((truck, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-48 rounded-lg flex items-center justify-center mb-6">
                  <FaTruck className="h-16 w-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{truck.name}</h4>
                <p className="text-gray-600 mb-4">{truck.capacity}</p>
                <div className="text-3xl font-bold text-orange-600 mb-6">{truck.price}</div>
                <ul className="space-y-2 mb-6">
                  {truck.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors">
                  Rent Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-xl text-gray-600 mb-8">
                Ready to rent a truck? Contact us today for the best rates and immediate availability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="h-6 w-6 text-orange-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-6 w-6 text-orange-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">info@brandontruckrental.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-6 w-6 text-orange-600 mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="text-gray-600">123 Main Street, Your City, ST 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h4>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600">
                    <option>Select Truck Type</option>
                    <option>Light Delivery Truck</option>
                    <option>Medium Box Truck</option>
                    <option>Heavy Duty Truck</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Additional Requirements"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  ></textarea>
                </div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-md font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center">
                  Send Quote Request
                  <FaArrowRight className="h-5 w-5 ml-2" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaTruck className="h-8 w-8 text-orange-600" />
                <h5 className="text-xl font-bold">Brandon Truck Rental</h5>
              </div>
              <p className="text-gray-400">
                Your trusted partner for reliable truck rental services.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Services</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Light Truck Rental</li>
                <li>Medium Truck Rental</li>
                <li>Heavy Duty Rental</li>
                <li>24/7 Support</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Fleet</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Contact Info</h6>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-4567</li>
                <li>info@brandontruckrental.com</li>
                <li>123 Main Street</li>
                <li>Your City, ST 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brandon Truck Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
