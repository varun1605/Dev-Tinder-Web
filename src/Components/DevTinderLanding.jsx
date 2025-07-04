"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Code,
  Users,
  Zap,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Star,
  MessageCircle,
  GitBranch,
} from "lucide-react";
import "./DevTinderLanding.css";
import { Link, Outlet } from "react-router-dom";
const socialLinks = [
  { Icon: Github, url: "https://github.com/varun1605" },

  {
    Icon: Linkedin,
    url: "https://www.linkedin.com/in/varun-mangrulkar-a3117b1b3/",
  },
];

// Animation variants
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Custom Components with inline styles
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  ...props
}) => {
  const getButtonStyles = () => {
    const base = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6px",
      fontWeight: "500",
      transition: "all 0.2s",
      cursor: "pointer",
      border: "none",
      outline: "none",
    };

    const variants = {
      default: {
        backgroundColor: "#3b82f6",
        color: "white",
        padding: size === "lg" ? "12px 32px" : "8px 16px",
        fontSize: size === "lg" ? "18px" : "14px",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "rgba(255,255,255,0.8)",
        padding: size === "lg" ? "12px 32px" : "8px 16px",
        fontSize: size === "lg" ? "18px" : "14px",
      },
      outline: {
        backgroundColor: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,0.3)",
        padding: size === "lg" ? "12px 32px" : "8px 16px",
        fontSize: size === "lg" ? "18px" : "14px",
      },
    };

    return { ...base, ...variants[variant] };
  };

  return (
    <button
      style={getButtonStyles()}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", style = {} }) => (
  <div
    style={{
      borderRadius: "8px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      ...style,
    }}
    className={className}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div style={{ padding: "24px" }} className={className}>
    {children}
  </div>
);

const Badge = ({ children, className = "" }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "9999px",
      border: "1px solid rgba(255,255,255,0.2)",
      padding: "4px 12px",
      fontSize: "12px",
      fontWeight: "600",
      transition: "all 0.2s",
      backgroundColor: "rgba(255,255,255,0.1)",
      color: "white",
    }}
    className={className}
  >
    {children}
  </div>
);

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DevTinderLanding = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  const howItWorksInView = useInView(howItWorksRef, {
    once: true,
    margin: "-100px",
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        color: "white",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "relative",
          zIndex: 50,
          padding: "0 16px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div style={{ position: "relative" }}>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart
                  style={{
                    width: "32px",
                    height: "32px",
                    color: "#ec4899",
                    fill: "#ec4899",
                  }}
                />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
                style={{ position: "absolute", top: "-4px", right: "-4px" }}
              >
                <Code
                  style={{ width: "16px", height: "16px", color: "#22d3ee" }}
                />
              </motion.div>
            </div>
            <span
              //   style={{
              //     fontSize: "24px",
              //     fontWeight: "bold",
              //     background: "linear-gradient(to right, #ec4899, #22d3ee)",
              //     WebkitBackgroundClip: "text",
              //     backgroundClip: "text",
              //     color: "transparent",
              //   }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent ml-2"
            >
              devTinder
            </span>
          </a>
        </motion.div>

        <nav style={{ marginLeft: "auto", display: "flex", gap: "24px" }}>
          {[
            { name: "Features", id: "features" },
            { name: "How it Works", id: "how-it-works" },
            { name: "Community", id: "community" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.8)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "white")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.8)")
                }
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </nav>

        <div style={{ marginLeft: "24px", display: "flex", gap: "8px" }}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <Button variant="ghost">Sign In</Button> */}
            <Link to={"/login"}>Sign Up</Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          ></motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        style={{ position: "relative", padding: "80px 16px" }}
        ref={heroRef}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(34, 211, 238, 0.2))",
            filter: "blur(48px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <motion.div
            style={{ marginBottom: "32px" }}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge
                style={{
                  background:
                    "linear-gradient(to right, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))",
                  color: "#f9a8d4",
                  border: "1px solid rgba(236, 72, 153, 0.3)",
                  marginBottom: "16px",
                }}
              >
                🚀 The Future of Developer Networking
              </Badge>
            </motion.div>

            <motion.h1
              style={{
                fontSize: "clamp(2rem, 8vw, 4rem)",
                fontWeight: "bold",
                marginBottom: "24px",
                lineHeight: "1.1",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                style={{
                  background:
                    "linear-gradient(to right, white, #f9a8d4, #a5f3fc)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Swipe Right on
              </motion.span>
              <br />
              <motion.span
                style={{
                  background: "linear-gradient(to right, #ec4899, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Your Next Dev Partner
              </motion.span>
            </motion.h1>

            <motion.p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "768px",
                margin: "0 auto 32px",
                lineHeight: "1.6",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Connect with developers who share your passion, skills, and
              interests. Build projects, share knowledge, and grow together in
              the ultimate developer community.
            </motion.p>
          </motion.div>

          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "48px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                style={{
                  background: "linear-gradient(to right, #ec4899, #9333ea)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Start Matching
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight style={{ width: "20px", height: "20px" }} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "64px",
            }}
            variants={staggerContainer}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
          >
            {[
              "React",
              "Node.js",
              "Python",
              "TypeScript",
              "Go",
              "Rust",
              "Vue",
              "Angular",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                variants={staggerItem}
                transition={{ delay: index * 0.1 + 1 }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 5px 15px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge>{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Cards */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
            variants={staggerContainer}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
          >
            {[
              {
                icon: Heart,
                title: "Smart Matching",
                desc: "AI-powered algorithm matches you with developers based on skills, interests, and goals.",
                color: "#ec4899",
              },
              {
                icon: Code,
                title: "Skill Showcase",
                desc: "Display your projects, contributions, and expertise to attract the right connections.",
                color: "#22d3ee",
              },
              {
                icon: Users,
                title: "Build Together",
                desc: "Collaborate on projects, share knowledge, and grow your network organically.",
                color: "#a855f7",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                transition={{ delay: index * 0.2 + 1.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <Card
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <CardContent style={{ textAlign: "center" }}>
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <item.icon
                        style={{
                          width: "48px",
                          height: "48px",
                          color: item.color,
                          margin: "0 auto 16px",
                        }}
                      />
                    </motion.div>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "white",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection>
        <section id="features" className="py-20 px-4" ref={featuresRef}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Why Developers Love
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  devTinder
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                More than just networking - it's about finding your coding
                soulmate
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={featuresInView ? "animate" : "initial"}
            >
              {[
                {
                  icon: Zap,
                  title: "Instant Connections",
                  desc: "Skip the awkward introductions. Match instantly with developers who get you.",
                  color: "#fde047",
                },
                {
                  icon: GitBranch,
                  title: "Project Collaboration",
                  desc: "Find co-founders, contributors, and teammates for your next big idea.",
                  color: "#84cc16",
                },
                {
                  icon: MessageCircle,
                  title: "Tech Discussions",
                  desc: "Engage in meaningful conversations about the latest technologies and trends.",
                  color: "#60a5fa",
                },
                {
                  icon: Star,
                  title: "Skill Matching",
                  desc: "Connect based on programming languages, frameworks, and experience levels.",
                  color: "#a855f7",
                },
                {
                  icon: Github,
                  title: "GitHub Integration",
                  desc: "Showcase your repositories and contributions directly in your profile.",
                  color: "#6b7280",
                },
                {
                  icon: Users,
                  title: "Community Events",
                  desc: "Join hackathons, meetups, and coding sessions with your matches.",
                  color: "#22d3ee",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                  }}
                >
                  <Card className="feature-card backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon
                          className={`h-12 w-12 mb-4 ${
                            item.color === "#fde047"
                              ? "text-yellow-400"
                              : item.color === "#84cc16"
                              ? "text-green-400"
                              : item.color === "#60a5fa"
                              ? "text-blue-400"
                              : item.color === "#a855f7"
                              ? "text-purple-400"
                              : item.color === "#6b7280"
                              ? "text-gray-300"
                              : "text-cyan-400"
                          }`}
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection>
        <section
          id="how-it-works"
          className="py-20 px-4 bg-gradient-to-r from-black/20 to-purple-900/20"
          ref={howItWorksRef}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={
                howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </span>
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate={howItWorksInView ? "animate" : "initial"}
            >
              {[
                {
                  step: "1",
                  title: "Create Your Profile",
                  desc: "Showcase your skills, projects, and what you're looking for in a coding partner.",
                  gradient: "from-pink-500 to-purple-600",
                },
                {
                  step: "2",
                  title: "Start Swiping",
                  desc: "Browse through developer profiles and swipe right on those who interest you.",
                  gradient: "from-cyan-500 to-blue-600",
                },
                {
                  step: "3",
                  title: "Connect & Build",
                  desc: "When you both swipe right, start chatting and building amazing projects together.",
                  gradient: "from-purple-500 to-pink-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  variants={staggerItem}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(236, 72, 153, 0.4)",
                        "0 0 20px rgba(236, 72, 153, 0.4)",
                        "0 0 0px rgba(236, 72, 153, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  >
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="cta-card rounded-3xl p-12 backdrop-blur-sm"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(236, 72, 153, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready to Find Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Coding Partner?
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join thousands of developers who are already building the future
                together.
              </motion.p>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(236, 72, 153, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  style={{
                    background: "linear-gradient(to right, #ec4899, #9333ea)",
                    border: "none",
                  }}
                >
                  Start Your Journey
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <Heart
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "8px",
                      }}
                    />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
        <footer className="border-t border-white/10 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="flex items-center space-x-2 mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <Heart
                      style={{
                        width: "32px",
                        height: "32px",
                        color: "#ec4899",
                        fill: "#ec4899",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                    style={{ position: "absolute", top: "-4px", right: "-4px" }}
                  >
                    <Code
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#22d3ee",
                      }}
                    />
                  </motion.div>
                </div>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #ec4899, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  devTinder
                </span>
              </motion.div>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, url }, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      color: "#ec4899",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Icon style={{ width: "24px", height: "24px" }} />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* <motion.div
                className="flex space-x-6 mb-4 md:mb-0"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      color: "#ec4899",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <Icon style={{ width: "24px", height: "24px" }} />
                    </a>
                  </motion.div>
                ))}
              </motion.div> */}

              <motion.p
                className="text-white/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                © 2024 devTinder. Made with ❤️ for developers.
              </motion.p>
            </div>
          </div>
        </footer>
      </AnimatedSection>
      <Outlet />
    </div>
  );
};

export default DevTinderLanding;
