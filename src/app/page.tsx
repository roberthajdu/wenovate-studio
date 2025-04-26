import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoFerfikolcsonbeLight from '@/images/clients/ferfikolcsonbe/logo2-min.webp'
import logoMkszLight from '@/images/clients/mksz/MKSZ_Logo_horizontal_white.png'
import logoZsigaGyulaLight from '@/images/clients/zsiga-gyula/logo-white.png'
import logoZsigaGyula from '@/images/clients/zsiga-gyula/logo.webp'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients: [string, StaticImageData][] = [
  ['MKSZ', logoMkszLight],
  ['Férfikölcsönbe', logoFerfikolcsonbeLight],
  ['Zsiga Gyula', logoZsigaGyulaLight],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm tracking-wider text-white sm:text-left">
            Büszkék vagyunk ügyfeleink sikerére
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    unoptimized
                    className="h-9 w-auto"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="A kreatív, üzleti fókuszú megoldások otthona."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nem csupán alkalmazásokat fejlesztünk – eredményeket szállítunk.
          Ismerd meg néhány korábbi projektünket, és képzeld el, mit hozhatnánk
          létre együtt.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-auto"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Esettanulmány</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Szolgáltatásaink"
        title="Innováció, amely kézzelfogható eredményeket hoz."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Legyen szó webfejlesztésről, mobilalkalmazásokról vagy mesterséges
          intelligencia alapú rendszerekről, mi mindig arra törekszünk, hogy a
          legjobbat hozzuk ki projektjeidből.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Modern webfejlesztés">
              Professzionális, reszponzív weboldalakat tervezünk és fejlesztünk,
              hogy az első benyomásod valóban maradandó legyen.
            </ListItem>
            <ListItem title="Mobilalkalmazások">
              Naprakész, felhasználóbarát mobilappokat készítünk, amelyek
              közvetlenül támogatják az üzleti céljaidat.
            </ListItem>
            <ListItem title="AI megoldások">
              Mesterséges intelligencia alapú rendszerekkel gyorsítjuk fel
              folyamataidat és nyitunk új növekedési lehetőségeket.
            </ListItem>
            <ListItem title="Digitális transzformáció">
              Segítünk folyamataid optimalizálásában és modernizálásában, hogy
              céged hosszú távon is versenyképes maradjon.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Az általunk készített weboldalakat és alkalmazásokat innovatív és kreatív megoldásokkal tesszük egyedivé és személyre szabottá. Modern munkáink személyes élményt nyújtanak a felhasználóknak a felgyorsult online világban.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mx-auto mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-5xl">
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tighter text-[#0f1d07] [text-wrap:balance] sm:text-7xl">
            Fejlesszük együtt a{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-sky-400">
              digitális jövődet
            </span>{' '}
            🚀
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Webfejlesztés, mobilalkalmazások és mesterséges intelligencia alapú
            rendszerek: támogatjuk a növekedésedet modern, megbízható
            technológiával.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Zsiga Gyula', logo: logoZsigaGyula }}
      >
        A Wenovate csapata tökéletes partner volt számomra a blogom
        megalkotásában. Minden elvárásomat túlszárnyalták – szívből ajánlom
        őket!
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
