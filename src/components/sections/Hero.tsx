'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { siteConfig } from '@/config/site.config';
import Button from '../common/Button';
import Container from '../common/Container';
import { downloadResume } from '@/lib/utils';
import Image from "next/image";

export default function Hero() {
  const { language } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-sky/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary-600 font-medium text-lg">
                {language === 'fr' ? '👋 Bonjour, je suis' : '👋 Hi, I\'m'}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4"
            >
              {siteConfig.name}
            </motion.h1>

            {/* Role with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gradient">
                {siteConfig.author.role[language]}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-neutral-600 mb-8 max-w-xl"
            >
              {siteConfig.description[language]}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium">
                AI / ML Engineering
              </span>
              <span className="px-4 py-2 bg-accent-cyan/10 text-accent-cyan rounded-lg font-medium">
                Data Engineering
              </span>
              <span className="px-4 py-2 bg-accent-indigo/10 text-accent-indigo rounded-lg font-medium">
                Full-Stack
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={scrollToProjects}
              >
                {language === 'fr' ? 'Voir mes projets' : 'View my projects'}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => downloadResume(language)}
              >
                {language === 'fr' ? 'Télécharger CV' : 'Download Resume'}
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-neutral-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300 hover:shadow-md"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white border border-neutral-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.social.email}
                className="p-3 bg-white border border-neutral-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-all duration-300 hover:shadow-md"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

                    {/* Right: Image/Illustration - VERSION SIMPLE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 space-y-6">
              {/* Main image */}
              <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan overflow-hidden shadow-2xl">
                {/* Ta photo ici */}
                <Image 
                    src="/images/profile.png"
                    width={400}
                    height={400}
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Stats en dessous (pas en absolute) */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-white rounded-xl shadow-lg p-4 border border-neutral-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600">
                        {language === 'fr' ? 'Data Engineer' : 'Data Engineer'}
                      </p>
                      <p className="font-semibold text-neutral-900">@ Mwinda</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white rounded-xl shadow-lg p-4 border border-neutral-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-600">
                        {language === 'fr' ? 'Projets IA' : 'AI Projects'}
                      </p>
                      <p className="font-semibold text-neutral-900">6+</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">
              {language === 'fr' ? 'Découvrir' : 'Discover'}
            </span>
            <FaArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}