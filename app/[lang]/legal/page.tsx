import type { Metadata } from 'next'
import { langs, type Lang } from '@/lib/getDictionary'

export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Mentions légales — Moïra Advisory',
  description: 'Mentions légales de Moïra Advisory, agence immobilière à Paris.',
}

const sections = [
  {
    title: 'Éditeur du site',
    content: [
      { label: 'Raison sociale', value: 'MOÏRA' },
      { label: 'Forme juridique', value: 'Société par actions simplifiée (SAS) à associé unique' },
      { label: 'Capital social', value: '1 000,00 €' },
      { label: 'RCS', value: '949 264 808 R.C.S. Paris' },
      { label: 'N° EUID', value: 'FR7501.949264808' },
      { label: 'Siège social', value: '229 rue Saint-Honoré, 75001 Paris' },
      { label: 'Directeur de la publication', value: 'Adrien Helle' },
      { label: 'Contact', value: 'adrien.helle@moiradvisory.com' },
    ],
  },
  {
    title: 'Hébergeur',
    content: [
      { label: 'Société', value: 'Vercel Inc.' },
      { label: 'Adresse', value: '340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis' },
      { label: 'Site', value: 'vercel.com' },
    ],
  },
  {
    title: 'Carte professionnelle — Loi Hoguet n° 70-9 du 02/01/1970',
    content: [
      { label: 'Numéro de carte', value: 'CPI75012023000000221' },
      { label: 'Délivrée par', value: 'CCI de Paris Île-de-France' },
      { label: 'Validité', value: "Jusqu'au 17/04/2029" },
      { label: 'Activités autorisées', value: 'Transactions sur immeubles et fonds de commerce — Gestion immobilière' },
    ],
  },
  {
    title: 'Garantie financière',
    content: [
      { label: 'Organisme (gestion immobilière)', value: 'Compagnie Européenne de Garanties et Cautions (CEGC) — 59 avenue Pierre Mendès-France, 75013 Paris' },
      { label: 'Montant', value: '110 000 €' },
      { label: 'Transactions sur immeubles', value: 'Absence de garantie financière — non détention de fonds' },
    ],
  },
  {
    title: 'Assurance responsabilité civile professionnelle',
    content: [
      { label: 'Assureur', value: 'AXA France IARD' },
      { label: 'Adresse', value: '313 Terrasses de l\'Arche, 92727 Nanterre Cedex' },
      { label: 'Couverture', value: 'Transactions sur immeubles et fonds de commerce — Gestion immobilière' },
    ],
  },
  {
    title: 'Médiation de la consommation',
    intro: "Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.",
    content: [
      { label: 'Médiateur', value: 'MEDIMMOCONSO — Médiation Immobilière et Construction' },
      { label: 'Site', value: 'www.medimmoconso.fr' },
      { label: 'Adresse', value: '1 allée du Parc de Brabois, 54500 Vandœuvre-lès-Nancy' },
    ],
  },
  {
    title: 'Protection des données personnelles (RGPD)',
    intro: "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition au traitement de vos données personnelles.",
    content: [
      { label: 'Responsable du traitement', value: 'MOÏRA — 229 rue Saint-Honoré, 75001 Paris' },
      { label: 'Finalité', value: 'Traitement des demandes de contact et d\'estimation reçues via le formulaire du site' },
      { label: 'Durée de conservation', value: '3 ans à compter du dernier contact' },
      { label: 'Exercice de vos droits', value: 'adrien.helle@moiradvisory.com' },
      { label: 'Autorité de contrôle', value: 'CNIL — www.cnil.fr' },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    intro: "L'ensemble des contenus présents sur le site moiradvisory.com (textes, graphismes, logotypes, images, photographies) est protégé par le droit d'auteur et demeure la propriété exclusive de MOÏRA. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation expresse est strictement interdite.",
    content: [],
  },
  {
    title: 'Cookies',
    intro: "Ce site utilise Google Analytics (mesure d'audience anonymisée). Vous pouvez vous opposer à la collecte de données en installant le module de désactivation Google Analytics disponible sur tools.google.com/dlpage/gaoptout. Aucun cookie publicitaire ou de traçage commercial n'est déposé sur ce site.",
    content: [],
  },
]

export default function LegalPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang
  const isFr = lang === 'fr'

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="mb-16">
          <p className="font-dm text-xs tracking-[0.25em] uppercase text-gold mb-4">
            {isFr ? 'Informations légales' : 'Legal information'}
          </p>
          <h1 className="font-cormorant font-light text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            {isFr ? 'Mentions légales' : 'Legal notices'}
          </h1>
          <p className="font-dm text-sm text-[#6B6B6B]">
            {isFr
              ? 'Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l\'Économie Numérique.'
              : 'In accordance with French Law n° 2004-575 of June 21, 2004 on Digital Economy.'}
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-[#E8E4DC] pt-10">
              <h2 className="font-cormorant text-2xl font-light text-[#1A1A1A] mb-6">
                {section.title}
              </h2>

              {section.intro && (
                <p className="font-dm text-sm text-[#6B6B6B] leading-relaxed mb-6 max-w-2xl">
                  {section.intro}
                </p>
              )}

              {section.content.length > 0 && (
                <dl className="space-y-3">
                  {section.content.map((item, j) => (
                    <div key={j} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-4">
                      <dt className="font-dm text-[11px] tracking-[0.12em] uppercase text-[#6B6B6B] pt-0.5">
                        {item.label}
                      </dt>
                      <dd className="font-dm text-sm text-[#1A1A1A]">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          ))}
        </div>

        <p className="font-dm text-xs text-[#6B6B6B] mt-16 pt-8 border-t border-[#E8E4DC]">
          {isFr
            ? `Mentions légales mises à jour le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}.`
            : `Legal notices last updated on ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.`}
        </p>
      </div>
    </div>
  )
}
