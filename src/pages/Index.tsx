"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion"; 

const Index = () => {
  const skills = [
    { name: "Java", level: 85 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Java Script", level: 80 },
    { name: "ReactJs", level: 80 },
    { name: "NextJs", level: 80 },
  ];

  const projects = [
    {
      title: "Automatic LED On/Off",
      description:
        "An automatic LED on/off system is a mechanism that controls an LED light based on certain conditions, such as motion detection, ambient light levels, or other environmental factors.",
      image: "/lovable-uploads/automatic.jpg",
    },
    {
      title: "Portfolio",
      description:
        "My portfolio showcases my expertise in modern web development, featuring projects built with technologies like ReactJS. It highlights my skills in creating interactive user interfaces to solve complex problems and deliver innovative solutions.",
      image: "/lovable-uploads/Portfolio.jpg",
    },
    {
    title: "QuickCourt Booking",
    description:
      "QuickCourt is an AI-powered platform for booking sports courts instantly. It allows users to browse available courts, book slots in real-time, and receive instant confirmations with smooth UI and secure payment integration.",
    image: "/lovable-uploads/QuickCourt.jpg", 
  },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Section className="pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 relative group">
            <Avatar className="w-full h-full">
              <AvatarImage
                src="/lovable-uploads/1a6a501d-4d46-42dc-913e-fb46ec6ce1a4.png"
                alt="Brindha S"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <AvatarFallback>BS</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Hi There! <br />
              I'M BRINDHA S
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 animate-fade-in">
              Frontend Developer
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-transparent">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          About Me
        </SectionTitle>

        <div className="max-w-3xl mx-auto text-center transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg text-gray-200 mb-7 leading-relaxed font-medium">
            I am Brindha S and I am a computer science and engineering student at Knowledge Institute of Technology in Salem.
            I am proficient in various programming languages like{" "}
            <span className="text-purple-400 font-semibold">HTML</span>,{" "}
            <span className="text-purple-400 font-semibold">CSS</span>,{" "}
            <span className="text-purple-400 font-semibold">Java Script</span>,{" "}
            <span className="text-purple-400 font-semibold">Java</span>,{" "}
            <span className="text-purple-400 font-semibold">C</span>,{" "}
            <span className="text-purple-400 font-semibold">ReactJs</span>,{" "}
            <span className="text-purple-400 font-semibold">NextJs</span>.
            I love solving complex problems through efficient and scalable code. My experience spans across front-end design, back-end development, real-time communication, and integrating AI-based features into modern applications.
          </p>

          {/* Education Cards Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400 text-center">Educational Journey</h3>
            <div className="relative flex flex-col md:flex-row md:justify-center items-center gap-8 mt-6">
              {/* Connector line */}
              <div className="absolute md:w-3/4 w-1 h-full md:h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-40" />

              {/* 10th Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="relative z-10 bg-gray-900 border border-purple-600/40 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-80">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">SSLC (10th Grade)</CardTitle>
                    <CardDescription className="text-gray-400">
                      MNS Govt Girls Hr.Sec.School Attayampatty, Salem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Year: 2020 – 2021 <br />
                      Completed with strong fundamentals in Science and Mathematics, building my logical foundation.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 12th Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="relative z-10 bg-gray-900 border border-purple-600/40 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-80">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">HSC (12th Grade)</CardTitle>
                    <CardDescription className="text-gray-400">
                      MNS Govt Girls Hr.Sec.School Attayampatty, Salem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Year: 2022 – 2023 <br />
                      Focused on Computer Physics, Chemistry and Mathematics, where I developed my passion for programming.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Degree Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="relative z-10 bg-gray-900 border border-purple-600/40 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-80">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">
                      B.E. – Computer Science and Engineering
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Knowledge Institute of Technology, Salem
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Year: 2023 – 2027 <br />
                      Currently pursuing my degree with focus on Web Development, AI, and Modern Technologies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-transparent">
        <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Skills
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 bg-black"
            >
              <CardHeader>
                <CardTitle className="text-lg text-white">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-transparent">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 bg-black"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-300">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
<Section id="contact" className="bg-transparent">
  <SectionTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
    Contact
  </SectionTitle>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Left Side - Personal Info */}
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
      <div className="space-y-4">
        <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
          <Mail className="w-5 h-5" /> brindhasuresh031@gmail.com
        </p>
        <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
          <Phone className="w-5 h-5" /> +91 98122 51784
        </p>
        <p className="flex items-center gap-2 hover:text-purple-600 transition-colors text-gray-300">
          <MapPin className="w-5 h-5" /> Valluvar Street, S.Papparapatty, Attayampatty
        </p>

        {/* GitHub & LinkedIn Links */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://github.com/Brindha122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brindha-suresh-5a238b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-500 transition-colors"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <form className="space-y-4">
      <Input
        placeholder="Your Name"
        className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
      />
      <Input
        type="email"
        placeholder="Your Email"
        className="transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
      />
      <Textarea
        placeholder="Your Message"
        className="h-32 transition-all duration-300 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 bg-gray-900 text-white"
      />
      <Button className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
        Send Message
      </Button>
    </form>
  </div>
</Section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 hover:text-purple-400 transition-colors">
            Designed and developed by Brindha S
          </p>
          <p className="text-gray-400">© 2025 Brindha S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
