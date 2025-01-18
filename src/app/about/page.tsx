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
        eyebrow="Kultúránk"
        title="Találd meg az egyensúlyt a szenvedélyed és az életed között."
        invert
      >
        <p>
          Hiszünk az együttműködés erejében, amely minden projektünk
          középpontjában áll.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Elkötelezettség" invert>
            Minden ügyfélprojektet maximális figyelemmel és szakértelemmel
            kezelünk, hogy a lehető legjobb eredményt érjük el.
          </GridListItem>
          <GridListItem title="Rugalmasság" invert>
            Rugalmasan alkalmazkodunk ügyfeleink igényeihez, legyen szó kis vagy
            közepes méretű vállalkozásokról.
          </GridListItem>
          <GridListItem title="Innováció" invert>
            A legmodernebb technológiákat és megoldásokat alkalmazzuk, hogy
            ügyfeleink kiemelkedjenek a versenytársak közül.
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
  description:
    'Hiszünk abban, hogy az erőnk az együttműködésben rejlik, amely ügyfeleinket helyezi a középpontba.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="Rólunk"
        title="Digitális megoldások, amelyek előre visznek"
      >
        <p>
          A Wenovate elkötelezett amellett, hogy ügyfeleinek magas színvonalú
          technológiai szolgáltatásokat nyújtson. A célunk, hogy minden projekt
          a lehető legjobban tükrözze ügyfeleink vízióját és célkitűzéseit.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            A Wenovate azért jött létre, hogy egyedi és hatékony digitális
            megoldásokat kínáljon. Hiszünk abban, hogy minden sikeres projekt
            alapja a közös gondolkodás és az ügyfeleinkkel való folyamatos
            együttműködés.
          </p>
          <p>
            Mindegy, hogy weboldalról, generatív AI-ről, e-kereskedelmi
            rendszerről vagy komplex alkalmazásokról van szó, a Wenovate
            partnerei számíthatnak a minőségre és a szakértelemre.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="100%" label="Ügyfélközpontú megközelítés" />
          <StatListItem value="10+" label="Megvalósított projekt" />
          <StatListItem value="7+" label="Évnyi tapasztalat" />
        </StatList>
      </Container>

      <Culture />

      {/* <Team /> */}

      <PageLinks
        // className="mt-24 sm:mt-32 lg:mt-40"
        title="Blog"
        intro="Ismerje meg legújabb technológiai megoldásainkat és projektjeink történeteit, amelyek inspirálhatják következő lépéseit."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
