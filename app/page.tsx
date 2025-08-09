"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Sparkles,
  Heart,
  Star,
  Feather,
  Play,
  X,
  MapPin,
  Music,
  Calendar,
  Quote,
  Users,
  Compass,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TributePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const traits = [
    { icon: "🛡️", title: "Loyal", description: "A fortress of trust in an uncertain world" },
    { icon: "🔥", title: "Fierce", description: "When needed, she becomes my warrior" },
    { icon: "🌸", title: "Soft-hearted", description: "Gentle soul with infinite compassion" },
    { icon: "🎨", title: "Creative", description: "Paints life with her unique vision" },
    { icon: "🌪️", title: "Beautiful Chaos", description: "Storm and calm dancing as one" },
  ]

  const tributeVideos = [
    { src: "/Saumya-kr.mp4", title: "Saumya" },
    { src: "/Dhwani.mp4", title: "Dhwani" },
    { src: "/vidhi.mp4", title: "Vidhi" },
  ];

  const gratefulMoments = [
    {
      title: "She defended me when no one else did",
      description: "Standing tall when the world felt small",
      year: "Always",
    },
    {
      title: "Stayed on call when I broke down at 2AM",
      description: "Her voice, a lighthouse in my darkest hours",
      year: "Countless nights",
    },
    {
      title: "Taught me what real support feels like",
      description: "Not just words, but presence that heals",
      year: "Every day",
    },
    {
      title: "Celebrated my wins like they were her own",
      description: "Joy multiplied, never divided",
      year: "Every victory",
    },
  ]

  const timelineEvents = [
    {
      year: "Childhood",
      title: "The Beginning of Everything",
      description: "Two little souls finding each other in a big world",
      image: "/kr-5.jpg?height=200&width=300&text=Childhood+Memories",
      details: "From playground adventures to sharing secrets under blanket forts",
    },
    {
      year: "School Days",
      title: "Growing Up Side by Side",
      description: "Navigating homework, crushes, and finding ourselves",
      image: "/kr-1.jpg?height=200&width=300&text=School+Adventures",
      details: "Late night study sessions that turned into life conversations",
    },
    {
      year: "Teenage Years",
      title: "Weathering the Storm",
      description: "When everything felt dramatic, we had each other",
      image: "/kr-9.jpg?height=200&width=300&text=Teen+Years",
      details: "First heartbreaks, big dreams, and endless phone calls",
    },
    {
      year: "Young Adults",
      title: "Chasing Dreams Together",
      description: "Different paths, same unwavering support",
      image: "/kr-4.jpg?height=200&width=300&text=Young+Adults",
      details: "College adventures, career starts, and midnight pep talks",
    },
    {
      year: "Present",
      title: "Still Here, Still Us",
      description: "Distance means nothing when friendship means everything",
      image: "/kr-8.jpg?height=300&width=300&text=Present+Day",
      details: "Video calls, surprise visits, and love that never fades",
    },
  ]

  const insideJokes = [
    {
      joke: "That how much you love rabbit",
      context: "You know exactly what I mean 😂",
      emoji: "🚗",
    },
    {
      joke: "Our secret code word for 'save me from this conversation'",
      context: "Works every single time",
      emoji: "🆘",
    },
    {
      joke: "That how much you love to go on mountains",
      context: "That beautiful morning",
      emoji: "🚙",
    },
    {
      joke: "Our impression of that one friend of our fathers",
      context: "Still makes us cry",
      emoji: "👩‍🏫",
    },
  ]

  const playlist = [
    { song: "Our Song : Billo Rani", artist: "Javed akhtar, Richa sharma ", mood: "Nostalgic" },
    { song: "Road Trip Anthem : PINKY", artist: "Mamta Sharma, Meet Bros", mood: "Adventure" },
    { song: "Kajara re", artist: "alisha chinai, javed ali", mood: "Cathartic" },

  ]

  const places = [
    {
      name: "Our Havmor Hangout",
      description: "Where we solved the world's problems over cones",
      coordinates: "Corner booth, always",
      memories: "Countless hours of laughter and tears",
    },
    {
      name: "The Riverfront Ride",
      description: "Our thinking spot when life got complicated",
      coordinates: "Inside the car",
      memories: "Deep conversations and comfortable silences",
    },
    {
      name: "Jim corbett and binsar valley",
      description: "Where i learned the meaning of friendship",
      coordinates: "In the resort",
      memories: "On that evening when everyone was enjoying themselves",
    },
    {
      name: "Kashmir",
      description: "The best trip till date",
      coordinates: "Pahalgam",
      memories: "Where i learned how to take aesthetic photos",
    },
    {
      name: "Udaipur",
      description: "Where i got my best friend",
      coordinates: "While we were returning towards our home",
      memories: "That chat in car ",
    },
    {
      name: "Jaisalmer",
      description: "Where all the 5 friends were there",
      coordinates: "The dessert safari",
      memories: "The best camel ride ever",
    },
    {
      name: "Koorg, Ooty",
      description: "Where we enjoyed those wavy roads",
      coordinates: "Between destinations",
      memories: "There is not one , there's a list",
    },
    {
      name: "Abu",
      description: "Where we enjoyed that sunrise walk",
      coordinates: "The great nakki lake ",
      memories: "The softy and subah ki chai , aaayhaaaayy",
    },
    {
      name: "Goa",
      description: "Where you drunk the brandi for the first time",
      coordinates: "In the hotel room",
      memories: "At that time you were something else for me ",
    },

  ]

  const testimonials = [
    {
      name: "Even on the days it would’ve been easier not to.",
      // relationship: "College Friend",
      quote: "Because we never stopped choosing each other",
    },
    {
      name: "Even from ourselves.",
      // relationship: "Family",
      quote: "Because we learned that ‘us’ was worth protecting",
    },
    {
      name: " imperfect, tired, sometimes hurt, but still here.",
      // relationship: "Mutual Friend",
      quote: "Because we kept showing up",
    },
  ]

  const photos = [
    { id: 1, src: "/kr-1-1.jpg?height=300&width=250&text=Where+it+all+began", caption: "Where it all began" },
    { id: 2, src: "/kr-2-2.jpg?height=400&width=300&text=Growing+up+together", caption: "Growing up together" },
    { id: 3, src: "/kr-3-3.jpg?height=350&width=280&text=Coffee+talks", caption: "Coffee talks and dreams" },
    { id: 4, src: "/kr-4-4.jpg?height=320&width=260&text=Sunset+conversations", caption: "Sunset conversations" },
    { id: 5, src: "/kr-5-5.jpg?height=380&width=290&text=Unguarded+laughter", caption: "Unguarded laughter" },
    {
      id: 6,
      src: "/kr-6-6.jpg?height=360&width=270&text=Through+thick+and+thin",
      caption: "Through thick and thin",
    },
    { id: 7, src: "/kr-7-7.jpg?height=340&width=280&text=Adventure+time", caption: "Adventure time" },
    { id: 8, src: "/KR-3.jpg?height=370&width=290&text=Quiet+moments", caption: "Quiet moments" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timelineEvents.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className={`absolute text-pink-200`}
            style={{
              top: `${10 + i * 12}%`,
              left: `${5 + i * 11}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles size={20 + i * 2} />
            ) : i % 3 === 1 ? (
              <Star size={18 + i * 2} />
            ) : (
              <Feather size={22 + i * 2} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/30 to-indigo-100/30"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="backdrop-blur-md bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 mb-8 leading-tight">
              Since the Beginning
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-2xl md:text-3xl text-gray-700 font-dancing mb-8 leading-relaxed"
            >
              "Friendship is the only cement that will ever hold the world together."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-lg md:text-xl text-gray-600 font-quicksand italic"
            >
              This isn't a love story. It's a story of two souls growing up together — side by side.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who She Is Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-playfair text-center text-gray-800 mb-16">Who She Is</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/30 border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <h3 className="text-2xl font-quicksand font-bold text-gray-800 mb-3">{trait.title}</h3>
                  <p className="text-gray-600 font-quicksand leading-relaxed">{trait.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Through the Years Timeline */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50/50 to-pink-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair text-gray-800 mb-4">Through the Years</h2>
            <p className="text-xl font-dancing text-gray-600">A journey of growing up together</p>
          </div>


          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-purple-300 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="backdrop-blur-md bg-white/40 border-white/50 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-purple-600" size={20} />
                      <span className="text-sm font-quicksand text-purple-600 font-semibold">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-dancing text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 font-quicksand mb-4">{event.description}</p>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <p className="text-sm text-gray-500 font-quicksand italic">{event.details}</p>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What I'm Grateful For Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50/50 to-purple-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-playfair text-center text-gray-800 mb-16">What I'm Grateful For</h2>

          <div className="space-y-8">
            {gratefulMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="backdrop-blur-md bg-white/40 border-white/50 p-8 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                      <span className="text-sm font-quicksand text-purple-600 font-semibold">{moment.year}</span>
                    </div>
                    <h3 className="text-2xl font-dancing text-gray-800 mb-3 leading-relaxed">"{moment.title}"</h3>
                    <p className="text-gray-600 font-quicksand italic">{moment.description}</p>
                  </Card>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="text-pink-600" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Inside Jokes Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair text-gray-800 mb-4">Our Inside Jokes</h2>
            <p className="text-xl font-dancing text-gray-600">The silly things that make us us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insideJokes.map((joke, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/30 border-white/40 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {joke.emoji}
                  </div>
                  <h3 className="text-xl font-dancing text-gray-800 mb-3 leading-relaxed">"{joke.joke}"</h3>
                  <p className="text-gray-600 font-quicksand text-sm italic">{joke.context}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Shared Playlist Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50/50 to-indigo-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair text-gray-800 mb-4">Our Soundtrack</h2>
            <p className="text-xl font-dancing text-gray-600">Songs that tell our story</p>
          </div>

          <div className="space-y-4">
            {playlist.map((song, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/40 border-white/50 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Music className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-dancing text-gray-800 mb-1">{song.song}</h3>
                      <p className="text-gray-600 font-quicksand text-sm mb-1">{song.artist}</p>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-200 to-purple-200 text-purple-700 text-xs font-quicksand rounded-full">
                        {song.mood}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Places We've Been Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair text-gray-800 mb-4">Places We've Been</h2>
            <p className="text-xl font-dancing text-gray-600">Every location holds a piece of our story</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {places.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/30 border-white/40 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin
                      className="text-pink-600 group-hover:scale-110 transition-transform duration-300"
                      size={24}
                    />
                    <h3 className="text-xl font-dancing text-gray-800">{place.name}</h3>
                  </div>
                  <p className="text-gray-700 font-quicksand mb-3">{place.description}</p>
                  <p className="text-sm text-purple-600 font-quicksand italic mb-3">{place.coordinates}</p>
                  <p className="text-sm text-gray-500 font-quicksand">{place.memories}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Unforgettable Moments Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-50/50 to-purple-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-5xl font-playfair text-center text-gray-800 mb-16">Unforgettable Moments</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.caption}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-dancing text-xl">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What Others Say Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair text-gray-800 mb-4">The Heart of This Story</h2>
            <p className="text-xl font-dancing text-gray-600">Our friendship through my eyes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="group"
              >
                <Card className="backdrop-blur-md bg-white/30 border-white/40 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Quote
                    className="text-pink-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                    size={32}
                  />
                  <p className="text-gray-700 font-dancing text-lg mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                      <Users className="text-purple-600" size={16} />
                    </div>
                    <div>
                      <p className="font-quicksand font-semibold text-gray-800">{testimonial.name}</p>
                      {/*<p className="font-quicksand text-sm text-gray-600">{testimonial.relationship}</p>*/}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Future Dreams Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50/50 to-pink-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-playfair text-gray-800 mb-8">Future Dreams</h2>
          <p className="text-xl font-dancing text-gray-600 mb-12">The adventures still waiting for us</p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/40 border-white/50 p-8 rounded-2xl shadow-xl"
            >
              <Compass className="text-purple-600 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-dancing text-gray-800 mb-4">Adventures Ahead</h3>
              <p className="text-gray-600 font-quicksand">
                New cities to explore, new memories to make, new chapters to write together
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/40 border-white/50 p-8 rounded-2xl shadow-xl"
            >
              <Clock className="text-pink-600 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-dancing text-gray-800 mb-4">Growing Old Together</h3>
              <p className="text-gray-600 font-quicksand">
                Watching each other's dreams come true, celebrating life's milestones side by side
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Click Me Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-dancing text-gray-800 mb-8">Some things can't be typed...</h2>
          <p className="text-xl text-gray-600 font-quicksand mb-12">Some feelings need voice.</p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white px-12 py-6 rounded-full text-xl font-quicksand shadow-2xl border-0 overflow-hidden group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />
              <span className="relative z-10 flex items-center gap-3">
                <Play size={24} />
                Click Me
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-4xl font-dancing text-gray-800 mb-6">No Goodbyes</h3>
          <p className="text-xl text-gray-600 font-quicksand leading-relaxed mb-8">
            We don't grow apart — we grow side by side, even when miles away.
          </p>
          <p className="text-lg text-gray-500 font-dancing italic">
            Here's to a friendship that transcends time, distance, and everything in between.
          </p>

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="mt-8 text-pink-300"
          >
            <Sparkles size={32} />
          </motion.div>
        </motion.div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-dancing text-gray-800">
                  {tributeVideos[currentVideoIndex].title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Main Video Player */}
                <video
                  // The 'key' is crucial! It forces React to re-render the video player when the src changes.
                  key={tributeVideos[currentVideoIndex].src}
                  controls
                  autoPlay // Automatically plays the video when you switch
                  className="w-full rounded-lg shadow-lg aspect-video"
                >
                  <source src={tributeVideos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Playlist/Thumbnails */}
                <div className="flex justify-center gap-4 pt-2">
                  {tributeVideos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-28 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300
                        ${currentVideoIndex === index
                          ? "border-purple-500 scale-105 shadow-lg"
                          : "border-gray-300 hover:border-purple-400"
                        }`}
                    >
                      {/* This is a simple text placeholder for a thumbnail */}
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <p className="text-xs text-center font-quicksand text-gray-700 px-1">{video.title}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
