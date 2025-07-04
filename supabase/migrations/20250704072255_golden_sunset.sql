/*
  # Création de la table CVs pour stockage public

  1. Nouvelle table
    - `cvs`
      - `id` (uuid, clé primaire)
      - `creator_name` (text, nom de la personne qui a créé le CV)
      - `cv_data` (jsonb, données complètes du CV)
      - `created_at` (timestamp)

  2. Sécurité
    - Désactiver RLS pour permettre l'accès public
    - Permettre à tous les utilisateurs de lire et créer des CVs
*/

CREATE TABLE IF NOT EXISTS cvs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_name text NOT NULL,
  cv_data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Désactiver RLS pour permettre l'accès public
ALTER TABLE cvs DISABLE ROW LEVEL SECURITY;

-- Créer un index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_cvs_created_at ON cvs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cvs_creator_name ON cvs(creator_name);