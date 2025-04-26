import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Értékeink"
        title="Innováció. Partnerség. Minőség."
        invert
      >
        <p>
          Hiszünk abban, hogy az üzleti siker alapja a folyamatos fejlődés, az
          együttműködés és a kiváló kivitelezés.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="🎉 Egyensúly és elkötelezettség" invert>
            Szenvedéllyel végezzük a munkánkat, de megértjük az üzleti élet
            komplexitását is. Minden projektben a hosszú távú egyensúlyra
            törekszünk.
          </GridListItem>
          <GridListItem title="🤝 Rugalmasság és alkalmazkodás" invert>
            Minden ügyfél egyedi. Rugalmasan igazodunk az igényekhez, és közösen
            alakítjuk ki a legjobb megoldást.
          </GridListItem>
          <GridListItem title="🚀 Innováció fókuszú gondolkodás" invert>
            A legmodernebb technológiákat és friss ötleteket használjuk, hogy
            versenyelőnyt teremtsünk ügyfeleink számára.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Rólunk',
  description: 'Modern digitális megoldások az üzleti sikereidért',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="Rólunk"
        title="Modern digitális megoldások az üzleti sikereidért"
      >
        <p>
          A Wenovate nem csupán egy fejlesztőstúdió – üzleti partnerként
          kísérünk végig a digitális átalakulásod útján.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Számunkra minden projekt egy közös munka, ahol a technológiai
            szakértelem és az üzleti megértés kéz a kézben jár.
          </p>
          <p>
            Célunk, hogy modern technológiákkal, üzleti szemlélettel és magas
            színvonalú kivitelezéssel segítsünk ügyfeleinknek elérni céljaikat.
            Legyen szó webes vagy mobilalkalmazás-fejlesztésről, mesterséges
            intelligencia alapú megoldásokról vagy digitális stratégiáról, a
            Wenovate a stabil háttér, amire számíthatsz.
          </p>
          <p>
            Készen állsz, hogy szintet lépj vállalkozásoddal? Mi végigkísérünk a
            tervezéstől a megvalósításon át a növekedésig.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100%" label="ügyfélközpontú megközelítés" />
          <StatListItem value="10+" label="sikeresen megvalósított projekt" />
          <StatListItem
            value="7+"
            label="év tapasztalat szoftverfejlesztésben és digitális innovációban"
          />
        </StatList>
      </Container>

      <Culture />

      {/* <Team /> */}

      <PageLinks
        // className="mt-24 sm:mt-32 lg:mt-40"
        title="Blog"
        intro="A Wenovate blogban szakmai tapasztalatainkat, friss technológiai trendeket és gyakorlati tanácsokat osztunk meg.
Fedezd fel, hogyan segíthet az innováció és a modern technológia a vállalkozásod növekedésében!"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
