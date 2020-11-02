import React from 'react'
import ToolBarCgu from '../ Steering/toolBarCgu'
import { useEffect } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};


function Cgu() {
    return (
        <div>
            <ToolBarCgu/>
            <BrowserRouter>
        <ScrollToTop>
            <div style={{textDecoration: "none", color:"white", padding:"5em"}}>
            <p>
           <h1> Conditions Générales d’Utilisation </h1>
LoicS.com - France <br/><br/>
Le site LoicS.com est édité et administré par Loic SUNVÉ, 
En utilisant le site LoicS.com, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes Conditions Générales d’Utilisation. Les présentes Conditions Générales d'Utilisation et la Politique de Confidentialité peuvent être mises à jour à tout moment. Les Conditions Générales d’Utilisation et la Politique de Confidentialité en vigueur au moment de l’utilisation du site LoicS.com sont celles qui vous sont opposables.
Nous vous conseillons de vous tenir régulièrement informé des conditions en vigueur. Vous pouvez prendre connaissance à tout moment de la version des Conditions Générales d'Utilisation en vigueur en vous rendant dans la rubrique « Conditions Générales d'Utilisation » du site LoicS.com.
Vous pouvez également télécharger les présentes Conditions Générales d'Utilisation en cliquant ici.
<h2 className="strat">1. Propriété intellectuelle</h2>
L'ensemble des éléments (dessins, modèles, illustrations, images, bandes sonores, textes, logos, marques...) constitutifs du site LoicS.com est la propriété exclusive de Loic SUNVÉ ou de ses filiales. A l'exception des dérogations expressément prévue dans les Conditions Générales d'Utilisation, il vous est interdit de reproduire intégralement ou partiellement, par quelque procédé que ce soit, de distribuer, de publier, de transmettre, de modifier ou de vendre tout ou partie du contenu du site LoicS.com, ou de créer des œuvres dérivées à partir de celui-ci.
La marque « Loic SUNVÉ », la marque figurative représentant un attelage, toutes les autres marques et logos liés à Loic SUNVÉ, déposés ou non, affichés sur le site LoicS.com, ainsi que le nom de domaine « LoicS.com » sont et demeureront la propriété exclusive de Loic SUNVÉ. Toute reproduction, distribution, transmission, modification ou utilisation de ces marques sans accord exprès et préalable de Loic SUNVÉ, pour quelque motif que ce soit, est interdite.
Il vous est interdit de supprimer tout avis de droit d'auteur, de marque ou d'autres droits exclusifs du site LoicS.com ou de tout contenu qui y figure. Vous pouvez faire une seule copie des pages Internet publiées sur le site LoicS.com pour votre usage privé, personnel et non commercial, sous réserve que toute copie de ces pages Internet conserve toutes les mentions de « copyright » (droit d'auteur) et de droits exclusifs qui y figurent.
<h2 className="strat">2. Liens</h2>
Le site Internet LoicS.com peut contenir des liens vers des sites tiers non édités ou contrôlés par Loic SUNVÉ. De tels liens sont uniquement fournis à titre de commodité ; ils ne peuvent et ne doivent pas être interprétés comme un aval exprès ou implicite de ces sites, de leur contenu ou de tout produit ou service qui y est offert.
Vous ne pouvez mettre en place un lien vers le site Internet LoicS.com qu'avec l'autorisation écrite et expresse de Loic SUNVÉ.
<h2 className="strat">3. Limitation de responsabilité</h2>
Loic SUNVÉ ne pourra en aucun cas être tenue responsable vis-à-vis de vous ou d'un tiers de tout dommage indirect, incident, spécial ou accessoire - ce qui inclut, sans que cela soit exhaustif, toute perte de bénéfice ou autre perte indirecte -, résultant de votre utilisation du site LoicS.com ou de votre incapacité à l'utiliser. La présente limitation de responsabilité s'applique dans toute la mesure autorisée par la loi.
<h2 className="strat">4. Absence de garantie</h2>
Loic SUNVÉ ne peut garantir et affirmer :
- que le site Internet LoicS.com est exempt de virus, programmes d'écrasement des données, chevaux de Troie ou autre matériel de destruction,
- que les informations contenues dans le site LoicS.com sont exactes, complètes ou à jour.
Le site LoicS.com peut contenir des imprécisions techniques ou d'autres défauts, Loic SUNVÉ ne garantit pas la correction de ces défauts. Le site Internet LoicS.com et le contenu de ce site sont présentés « en l'état » et « en fonction des disponibilités ». Loic SUNVÉ exclut expressément toute forme de garantie, et notamment, toute garantie implicite relative aux conditions usuelles d'usage du site LoicS.com ou de l'aptitude du site à un usage normal ou à une utilisation spécifique, à sa qualité ou au respect de toutes dispositions légales. La présente limitation de responsabilité s'applique dans toute la mesure autorisée par la loi.
<h2 className="strat">5. Droit applicable – Litiges</h2>
Les présentes Conditions Générales d'Utilisation sont régies et interprétées conformément au droit français.
En cas de contestation liée à l’utilisation du site LoicS.com, vous avez la possibilité de recourir à une procédure de médiation conventionnelle ou à toute autre procédure de mode alternatif de règlement des différends.
Loic SUNVÉ se réserve le droit de requérir et d'obtenir des injonctions ou ordonnances pour la défense de ses droits aux termes des présentes.
            </p>
            </div>
            </ScrollToTop>
      </BrowserRouter>
        </div>
    )
}
export default Cgu