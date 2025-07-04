import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Network, Wifi, Terminal, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="glass-effect border-white/20 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <CardTitle className="gradient-text flex items-center text-2xl">
            <Heart className="w-6 h-6 mr-3 text-red-400" />
            À propos du créateur
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Photo et intro */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0 shadow-lg">
              <img 
                src="/1750536226127 copy.jpg" 
                alt="Développeur Python spécialisé en réseaux et télécoms" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                🌿 Entre code Python et infrastructures réseau : un parcours qui grandit
              </h3>
              <p className="text-white/80 leading-relaxed">
                Sur cette photo, on découvre un développeur au regard déterminé, dans un environnement verdoyant qui évoque la croissance - 
                métaphore parfaite pour un parcours tech en pleine évolution. Cette approche professionnelle en chemise blanche 
                reflète un équilibre entre rigueur technique et vision d'avenir.
              </p>
            </div>
          </div>

          {/* Parcours en 3 étapes */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center mb-3">
                <Terminal className="w-5 h-5 text-green-400 mr-2" />
                <h4 className="font-semibold text-green-400">🚀 Les débuts</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Passionné par l'automatisation et les infrastructures, j'ai commencé par coder en Python pour scripter des tâches réseaux. 
                Premiers scripts d'analyse SNMP, premières automatisations de logs... Ces moments magiques où le code 
                dialogue avec l'infrastructure physique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center mb-3">
                <Network className="w-5 h-5 text-yellow-400 mr-2" />
                <h4 className="font-semibold text-yellow-400">⚡ Le défi</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Jouer entre les couches OSI : résoudre des problèmes de latence en Python tout en configurant des VLANs sur du matériel Cisco. 
                Faire communiquer mes scripts de supervision avec des APIs RESTful d'équipements télécom. 
                L'art de maîtriser le software ET le hardware.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/5 rounded-lg p-4 border border-white/10"
            >
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-blue-400 mr-2" />
                <h4 className="font-semibold text-blue-400">🏆 Ma fierté</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Création d'outils de monitoring hybrides (Python + librairies réseaux) qui prédisent les congestions réseau grâce au Machine Learning. 
                Chaque script Scapy qui optimise une infrastructure, chaque analyse Pandas qui prévient une panne télécom.
              </p>
            </motion.div>
          </div>

          {/* Citation inspirante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30"
          >
            <blockquote className="text-center">
              <p className="text-lg font-medium text-white italic mb-3">
                "Rien ne me motive plus qu'un problème entre la couche 2 et la couche 7... et un bon café pour debugger mon Python !"
              </p>
              <footer className="text-blue-300 text-sm">— Ma philosophie de développeur réseau</footer>
            </blockquote>
          </motion.div>

          {/* Stack technique */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <Wifi className="w-5 h-5 text-purple-400 mr-2" />
              🔧 Ma stack technique unique
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-blue-400 font-medium">Langage :</span>
                <p className="text-white/80">Python (scripts, Flask/Django, Scapy, Pandas)</p>
              </div>
              <div>
                <span className="text-green-400 font-medium">Réseaux :</span>
                <p className="text-white/80">Protocoles TCP/IP, Wireshark, GNS3, Netmiko</p>
              </div>
              <div>
                <span className="text-purple-400 font-medium">Télécom :</span>
                <p className="text-white/80">SDN/NFV, VoIP (Asterisk), infrastructures 5G</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10 text-center"
          >
            <p className="text-white/80 mb-2">
              <strong className="text-blue-400">👉 Et toi, tu préfères coder pour le cloud ou les infrastructures physiques ?</strong>
            </p>
            <p className="text-white/60 text-sm">
              Tu viens aussi des télécoms ou tu mixes un autre domaine avec le dev ? 
              Partage ton stack en commentaire sur mes réseaux sociaux !
            </p>
          </motion.div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {['#Python', '#Réseaux', '#Télécom', '#DevOps', '#Infrastructure', '#TechPassion', '#Scapy', '#Netmiko'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutSection;