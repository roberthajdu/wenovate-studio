import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Felfedezés" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ismerjük meg egymást. Alaposan feltérképezzük vállalkozásod{' '}
          <strong className="font-semibold text-neutral-950">céljait</strong>,
          közönségedet és a működésed részleteit. Itt kezdődik a varázslat.
        </p>
        <p>
          Ezen a fázison belül közösen dolgozunk ki{' '}
          <strong className="font-semibold text-neutral-950">
            kérdőíveket
          </strong>
          , megvalósíthatósági tanulmányokat és koncepciókat, amelyek
          biztosítják az alapokat a következő lépésekhez.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ezen a fázison belül
      </h3>
      <TagList className="mt-4">
        <TagListItem>Mélyinterjúk</TagListItem>
        <TagListItem>Versenyelemzés</TagListItem>
        <TagListItem>Üzleti célok meghatározása</TagListItem>
        <TagListItem>Koncepciótervek</TagListItem>
        <TagListItem>Felmérések és kutatások</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Stratégiai tervezés" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Az első fázis eredményeire építve világos{' '}
          <strong className="font-semibold text-neutral-950">stratégiát</strong>{' '}
          dolgozunk ki, amely tartalmazza a projekt minden lépését és
          mérföldkövét. Az átláthatóság biztosítja, hogy minden pillanatban
          képben legyél.
        </p>
        <p>
          Emellett kialakítjuk az alapvető{' '}
          <strong className="font-semibold text-neutral-950">
            tervezési kereteket
          </strong>
          , amelyek segítenek vizualizálni a végső megoldást.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Zsiga Gyula', role: 'Szakmai szemmel blog' }}
        className="mt-12"
      >
        A Wenovate csapatával végig tudtam, hogy a projekt jó kezekben van. Az
        átláthatóságuk és precizitásuk kiemelkedő.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section
      title="Fejlesztés és optimalizálás"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A stratégiai terv alapján a legújabb technológiák segítségével
          fejlesztjük és optimalizáljuk az elképzeléseidet. A{' '}
          <strong className="font-semibold text-neutral-950">minőség</strong> és{' '}
          <strong className="font-semibold text-neutral-950">
            rugalmasság
          </strong>
          garantálja, hogy az eredmény tökéletesen illeszkedjen az igényeidhez.
        </p>
        <p>
          Az átfogó tesztelés biztosítja, hogy minden funkció zökkenőmentesen
          működjön, mielőtt az élesítésre kerül sor.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ezen a fázison belül
      </h3>
      <List className="mt-8">
        <ListItem title="Tesztelés">
          Minden projektünket alaposan teszteljük, hogy biztosítsuk a
          kifogástalan működést.
        </ListItem>
        <ListItem title="Infrastruktúra">
          Megbízható technológiai alapokat biztosítunk, amelyek hosszú távon
          támogatják vállalkozásod.
        </ListItem>
        <ListItem title="Támogatás">
          Az élesítést követően is itt vagyunk, hogy folyamatos segítséget és
          karbantartást nyújtsunk.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="Értékeink"
        title="Megbízhatóság és innováció egyensúlya"
      >
        <p>
          A Wenovate-nál elkötelezettek vagyunk amellett, hogy ügyfeleinknek a
          legújabb technológiákat és trendeket hozzuk el, miközben a
          megbízhatóságot tartjuk szem előtt.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precizitás">
            Az első lépéstől az utolsóig a részletekre való odafigyelés
            határozza meg a munkánkat.
          </GridListItem>
          <GridListItem title="Hatékonyság">
            Az időd és az erőforrásaid maximális tiszteletben tartásával
            dolgozunk.
          </GridListItem>
          <GridListItem title="Rugalmasság">
            Egyedi igényeidhez igazítjuk a megoldásokat, hogy a legjobban
            szolgálják a céljaidat.
          </GridListItem>
          <GridListItem title="Őszinteség">
            Átlátható és tiszta kommunikációval építünk bizalmat.
          </GridListItem>
          <GridListItem title="Hűség">
            Hosszú távú partnerségeket építünk, amelyek az ügyfeleink sikereit
            támogatják.
          </GridListItem>
          <GridListItem title="Innováció">
            Mindig keresünk új és jobb megoldásokat, hogy ügyfeleink előnyt
            szerezzenek.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Folyamatunk" title="Hogyan dolgozunk?">
        <p>
          A Wenovate-nál hiszünk abban, hogy a hatékony munkafolyamatok és a
          modern technológiák együttesen teszik lehetővé ügyfeleink sikereit.
          Minden projektet az egyedisége alapján kezelünk.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
