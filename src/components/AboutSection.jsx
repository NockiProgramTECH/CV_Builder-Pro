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
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Développeur passionné" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                🌿 Entre code Python et infrastructures réseau : un parcours qui grandit
              </h3>
              <p className="text-white/80 leading-relaxed">
                Un développeur au regard déterminé, dans un environnement qui évoque la croissance - 
                métaphore parfaite pour un parcours tech en pleine évolution. Cette approche professionnelle 
                reflète un équilibre entre technique et vision.
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
                Comme beaucoup de passionnés, exploration de Python - ce langage élégant qui ouvre tant de portes. 
                Premiers scripts d'automatisation réseau, premières analyses de logs SNMP... Ces moments où le code 
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
                Maîtriser l'art de jongler entre les couches OSI et les lignes de code. Débugger un script Python 
                qui analyse du trafic réseau tout en configurant des VLANs sur du matériel Cisco. Faire communiquer 
                le monde logiciel avec les protocoles télécom.
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
                <h4 className="font-semibold text-blue-400">🏆 Ta fierté</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Ces outils de monitoring hybrides développés, mélangeant Python (Scapy, Netmiko, Pandas) avec une 
                compréhension profonde des réseaux et télécoms. Chaque script qui optimise une infrastructure, 
                chaque analyse qui prévient une panne.
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
                "Mon code parle Python, mes réseaux parlent TCP/IP - et parfois les deux conversent ensemble pour créer de la magie."
              </p>
              <footer className="text-blue-300 text-sm">— Philosophie du développeur réseau</footer>
            </blockquote>
          </motion.div>

          {/* Stack technique */}
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <Wifi className="w-5 h-5 text-purple-400 mr-2" />
              🔧 Stack technique unique
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-blue-400 font-medium">Langage :</span>
                <p className="text-white/80">Python (automatisation, analyse, monitoring)</p>
              </div>
              <div>
                <span className="text-green-400 font-medium">Réseaux :</span>
                <p className="text-white/80">Protocoles TCP/IP, Wireshark, GNS3</p>
              </div>
              <div>
                <span className="text-purple-400 font-medium">Télécom :</span>
                <p className="text-white/80">SDN/NFV, VoIP, infrastructures modernes</p>
              </div>
            </div>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {['#Python', '#Réseaux', '#Télécom', '#DevOps', '#Infrastructure', '#TechPassion'].map((tag) => (
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